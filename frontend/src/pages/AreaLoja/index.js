import React from "react";
import Header from "../../components/Header";
import Produto from "../../components/Produto";
import { Container, Row, Button, Accordion, Card } from "react-bootstrap";
import Auth from '../../services/auth';
import { useHistory } from "react-router";


function AreaLoja() {
  const history = useHistory();
  function handleSair(){
    Auth.destroyToken();
    history.push('/')
  }

  return (
    <>
    <Header linkLogo="/areaLoja">
      <Button onClick={handleSair}>Sair</Button>
    </Header>
      <Container>
        <Accordion style={{ width: "18rem", margin: "10px 0px" }}>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                Clique aqui para ver seu saldo
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <Row>R$100,00</Row>
                <Row>
                  <Button>Retirar dinheiro</Button>
                </Row>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
        <Button style={{ width: "18rem", margin: "10px 0px" }}>
          Adicionar novo produto
        </Button>
        <h2>Meus produtos</h2>
        <Row>
          <Produto
            name="Lápis de cor"
            valor="2.50"
            img="https://img.kalunga.com.br/fotosdeprodutos/389691d.jpg"
          />
          <Produto
            name="Lápis de cor"
            valor="4.50"
            img="https://img.kalunga.com.br/fotosdeprodutos/389691d.jpg"
          />
          <Produto
            name="Lápis de cor"
            valor="2.50"
            img="https://img.kalunga.com.br/fotosdeprodutos/389691d.jpg"
          />
          <Produto
            name="Lápis de cor"
            valor="2.50"
            img="https://img.kalunga.com.br/fotosdeprodutos/389691d.jpg"
          />
          <Produto
            name="Lápis de cor"
            valor="2.50"
            img="https://img.kalunga.com.br/fotosdeprodutos/389691d.jpg"
          />
          <Produto
            name="Lápis de cor"
            valor="2.50"
            img="https://img.kalunga.com.br/fotosdeprodutos/389691d.jpg"
          />
          <Produto
            name="Lápis de cor"
            valor="2.50"
            img="https://img.kalunga.com.br/fotosdeprodutos/389691d.jpg"
          />
        </Row>
      </Container>
    </>
  );
}

export default AreaLoja;
