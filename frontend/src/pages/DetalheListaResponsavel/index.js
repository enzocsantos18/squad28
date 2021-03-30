import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Container, Row, Col, Modal, Button, Form} from "react-bootstrap";
import api from "../../services/api";
import idade from '../../helpers/tratamentoIdade';
import real from '../../helpers/tratamentoDinheiro';

import { useParams } from "react-router";
import './index.css';


function DetalheListaResponsavel() {
  const [lista, setLista] = useState();
  const [loja, setLoja] = useState();

  const [infoConfirmacao, setInfoConfirmacao] = useState({});

  const { id } = useParams();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);


  async function buscarListas() {
    const { data } = await api.get(`/list/${id}`);
    setLista(data);
    setLoja(data.productsList[0].product.paperStore.name)
  }


  async function handleShow(produto, lista, estudante){
    setShow(true)
    setInfoConfirmacao({
      produto, lista, estudante
    })

  }

  async function handleConfirmacao(){
    handleClose();

    const data = {
      listId: infoConfirmacao.lista.id,
      productId: infoConfirmacao.produto.id,
      studentId: infoConfirmacao.estudante.id,
    }

    const config = {
      headers: {
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NywidHlwZSI6InBhcmVudCIsImlhdCI6MTYxNjk0OTE2NSwiZXhwIjoxNjE3NTUzOTY1fQ.Q7F5sGVo4hQqkaJGCjzq4ocJAf4Zbh2wGvcLrvFkxsg"
    }}
    try{
      await api.post(`/donationConfirmation`, data, config);

      setInfoConfirmacao({})
    }
    catch(e){
      console.error(e)
    }

  }

  useEffect(() => {
    buscarListas();
  }, [infoConfirmacao]);

  return (
    <>
      <Header />
      <Container>
        {lista ? (
          <>
            <h2>Lista</h2>
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
              <h4>Papelaria: {loja}</h4>
              <p>Itens da lista: </p>
              {lista.productsList.map((item) => (
                item.purchased === 0 ? (

                  <div key={item.product.id} className="produto" >
                  
                    <div className="info-produto">
                      <p>{item.product.name}</p>
                      <p>Em aberto</p>
                    </div>
                  </div>
                )
                : (
                  <div onClick={() => handleShow(item.product, lista, lista.student)} key={item.product.id} className="produto comprado">
                    <p>{item.product.name}</p>
                    {
                      item.received === 0 ? (

                        <Button>Coletado</Button>
                      ) :
                      (<span>Item recebido</span>)
                    }

                  </div>
                )
            ))}
              </Col>
            </Row>
          </>
        ) : (
          <>
            <p>Carregando...</p>
          </>
        )}
      </Container>
      <Footer />
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Tem certeza que quer confirmar o recebimento?</Modal.Title>
        </Modal.Header>
       

            <Modal.Body>
              O valor do produto será depositado para a loja vendedora
            </Modal.Body>
       
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
          <Button variant="primary" onClick={handleConfirmacao}>
            Confirmar
          </Button>
        </Modal.Footer>
      </Modal>
      
    </>
  );
}

export default DetalheListaResponsavel;
