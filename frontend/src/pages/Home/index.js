import React, { useState, useEffect } from "react";
import { Col, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ListaAluno from "../../components/ListaAluno";
import idade from "../../helpers/tratamentoIdade";
import "./styles.css";
import api from "../../services/api";


function Home() {
  const [listaAlunos, setListaAlunos] = useState([]);

  async function buscarListas(bairro = "") {
    const { data } = await api.get(`/list?neighborhood=${bairro}`);
    setListaAlunos(data);
  }

  function handleFiltro(event){
      buscarListas(event.target.value)
  }

  useEffect(() => {
    buscarListas();
  }, []);

  return (
    <>
      <Header>
        <Link className="btn btn-primary" to="/login">Acessar</Link>
      </Header>
 
      <Container>
      <h2 style={{ width: "334px" }}>
          Aqui você encontra várias crianças e pode escolher uma para ajudar
        </h2>
        <span>Bairro:</span>
      <Form style={{ marginBottom: "30px" }}>
        <Form.Row >

          <Col lg="2">
            <Form.Control onChange={handleFiltro} as="select" defaultValue="Selecione...">
            <option value="">Selecione...</option>
              <option value="Vila Carrão">Vila Carrão</option>
              <option value="Vila Matilde">Vila Matilde</option>
              <option value="Vila Nova Manchester">Vila Nova Manchester</option>
              <option value="Chácara Califórnia">Chácara Califórnia</option>

            </Form.Control>
          </Col>
        </Form.Row>
      </Form>


     {
       listaAlunos.length ? (
      <div className="listagem">
          {listaAlunos.map((lista) => {
            return (
              <Link key={lista.id} to={`/lista/${lista.id}`}>
                <ListaAluno
                  nome={lista.student.name}
                  idade={idade(lista.student.birthDate)}
                  descricao={lista.description}
                />
              </Link>
            );
          })}
        </div>
       ) :
       (
         <h5>Não temos nenhuma lista cadastrada para esse bairro, procure em outro 😃</h5>
       )
      }
      
      </Container>
      <Footer />
    </>
  );
}

export default Home;
