import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Container, Row, Col, Modal, Button} from "react-bootstrap";
import api from "../../services/api";
import idade from '../../helpers/tratamentoIdade';
import real from '../../helpers/tratamentoDinheiro';

import { useParams } from "react-router";
import './index.css';

function DetalheLista() {
  const [lista, setLista] = useState();
  const [itens, setItens] = useState([]);
  const [valor, setValor] = useState(0);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const { id } = useParams();

  async function buscarListas() {
    const { data } = await api.get(`/list/${id}`);
    setLista(data);
  }

  async function handleDoacao(){
    try{
      await api.post(`/donate`, {
        listId: lista.id,
        productsIds: itens
      })

      setItens([])
      setValor(0)
      handleClose();
    }
    catch(e){
      console.log(e)
    }

  }

  function handleSelct(id, preco){
    if(itens.includes(id)){
      const itensFiltrados = itens.filter((i) => ( i !== id))
      setItens(itensFiltrados)
      const precoAtual = (Number(valor) - Number(preco)).toFixed(2);
      setValor(precoAtual);
    }
    else{
      const precoAtual = (Number(valor)+ Number(preco)).toFixed(2);
      setValor(precoAtual);
      setItens([...itens, id]);
      setValor(precoAtual);
    }


  }

  useEffect(() => {
    buscarListas();
  }, [itens]);

  return (
    <>
      <Header />
      <Container>
        {lista ? (
          <>
            <h2>Meu material escolar</h2>
            <Row>
              <Col sm="12" md="6" lg="4">
                <div className="info-lista">
                  <img
                    src="https://img.icons8.com/bubbles/2x/user-male.png"
                    alt="Foto ilustrativa de perfil"
                  />
                  <h3>
                    {lista.student.name}, {idade(lista.student.birthDate)} anos.
                  </h3>
                  <span>Escola: {lista.student.school.name}</span>
                  <p>{lista.description}</p>
                </div>
              </Col>
              <Col>
              <p>Selecione os items que deseja doar: </p>
              {lista.productsList.map((item) => (
                item.purchased === 0 ? (

                  <div key={item.product.id} className="produto" >
                    <input type="checkbox" onClick={() => handleSelct(item.product.id, item.product.price)}/>
                    <div className="info-produto">

                      <p>{item.product.name}</p>
                      <p>{real(item.product.price)}</p>
                    </div>
                  </div>
                )
                : (
                  <div key={item.product.id} className="produto comprado">
                    <p>{item.product.name}</p>
                  </div>
                )
            ))}
              <p>Subtotal de sua doação: {real(Number(valor))}</p>

              {
                valor > 0 && <button onClick={handleShow}>Doar</button>
              }
              
              </Col>

            </Row>

           
          </>
        ) : (
          <>
            <p>Carregando...</p>
          </>
        )}
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Tem certerza que quer doar?</Modal.Title>
        </Modal.Header>
        <Modal.Body>Seu subtotal está em {real(Number(valor))}</Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={() => handleDoacao()}>
            Doar
          </Button>
        </Modal.Footer>
      </Modal>
      </Container>
      <Footer />
    </>
  );
}

export default DetalheLista;
