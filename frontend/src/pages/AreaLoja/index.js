import React from "react";
import './style.css'
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Produto from "../../components/Produto";
import caderno from "../../assets/caderno.png";
import lapis from "../../assets/lapis.png";
import borracha from "../../assets/borracha.png";
import tesoura from "../../assets/tesoura.png";
import lapisdecor from "../../assets/lapisdecor.png";
import cola from "../../assets/cola.png";
import caneta from "../../assets/caneta.png";
import reguas from "../../assets/reguas.png";
import apontador from "../../assets/apontador.png";
import { Container, Col, Row, Button, Accordion, Card, ListGroup, ListGroupItem } from "react-bootstrap";
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

      <h1 className="titulo">Painel Papelaria</h1>
      <div id="botoes">
      <h2 className="subtitulo1">O que você quer fazer?</h2>
    
      <Row >
        <Col>
          <Accordion >
            <Card id="caixa">
              <Accordion.Toggle id="caixaSaldo" as={Card.Header} eventKey="0">
                Ver meu Saldo
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body id="valorSaldo">R$ 100,00</Card.Body>                
              </Accordion.Collapse>
            </Card>            
          </Accordion>
        </Col>
      </Row>
      <Row>
        <Col>
          <button id="opcaoPapelaria">Receber Saldo</button>
        </Col>
      </Row>
      <Row>
        <Col>
          <button id="opcaoPapelaria">Adicionar Produto</button>
        </Col>
      </Row>

      <h2 className="subtitulo1">Meus produtos:</h2>
      </div>
      <Row className="tresCards">
        
      <Card id="styleCard">
        <Card.Img variant="top" className="imgProduto" src={caderno} />
        <Card.Body>
          <Card.Title className="tituloProduto">Caderno</Card.Title>          
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem className="infoProdutos">Marca: Tilibra</ListGroupItem>
          <ListGroupItem className="infoProdutos">Quantidade: 01</ListGroupItem>
          <ListGroupItem className="infoProdutos">Valor: R$15,00</ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Card.Link className="linkProdutos" href="#">Editar</Card.Link>
          <Card.Link className="linkProdutos" href="#">Remover</Card.Link>
        </Card.Body>
      </Card>

      <Card id="styleCard">
        <Card.Img variant="top" className="imgProduto" src={lapis} />
        <Card.Body>
          <Card.Title className="tituloProduto">Lápis</Card.Title>          
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem className="infoProdutos">Marca: Faber-Castell</ListGroupItem>
          <ListGroupItem className="infoProdutos">Quantidade: 01</ListGroupItem>
          <ListGroupItem className="infoProdutos">Valor: R$1,00</ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Card.Link className="linkProdutos" href="#">Editar</Card.Link>
          <Card.Link className="linkProdutos" href="#">Remover</Card.Link>
        </Card.Body>
      </Card>

      <Card id="styleCard">
        <Card.Img variant="top" className="imgProduto" src={borracha} />
        <Card.Body>
          <Card.Title className="tituloProduto">Borracha</Card.Title>          
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem className="infoProdutos">Marca: Faber-Castell</ListGroupItem>
          <ListGroupItem className="infoProdutos">Quantidade: 01</ListGroupItem>
          <ListGroupItem className="infoProdutos">Valor: R$1,50</ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Card.Link className="linkProdutos" href="#">Editar</Card.Link>
          <Card.Link className="linkProdutos" href="#">Remover</Card.Link>
        </Card.Body>
      </Card>
      </Row>
      <Row className="tresCards">
      <Card id="styleCard">
        <Card.Img variant="top" className="imgProduto" src={tesoura} />
        <Card.Body>
          <Card.Title className="tituloProduto">Tesoura</Card.Title>          
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem className="infoProdutos">Marca: Maped</ListGroupItem>
          <ListGroupItem className="infoProdutos">Quantidade: 01</ListGroupItem>
          <ListGroupItem className="infoProdutos">Valor: R$4,00</ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Card.Link className="linkProdutos" href="#">Editar</Card.Link>
          <Card.Link className="linkProdutos" href="#">Remover</Card.Link>
        </Card.Body>
      </Card>

      <Card id="styleCard">
        <Card.Img variant="top" className="imgProduto" src={lapisdecor} />
        <Card.Body>
          <Card.Title className="tituloProduto">Lápis de Cor 24 cores</Card.Title>          
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem className="infoProdutos">Marca: Bic</ListGroupItem>
          <ListGroupItem className="infoProdutos">Quantidade: 01</ListGroupItem>
          <ListGroupItem className="infoProdutos">Valor: R$19,00</ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Card.Link className="linkProdutos" href="#">Editar</Card.Link>
          <Card.Link className="linkProdutos" href="#">Remover</Card.Link>
        </Card.Body>
      </Card>

      <Card id="styleCard">
        <Card.Img variant="top" className="imgProduto" src={cola} />
        <Card.Body>
          <Card.Title className="tituloProduto">Cola</Card.Title>          
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem className="infoProdutos">Marca: Pritt</ListGroupItem>
          <ListGroupItem className="infoProdutos">Quantidade: 01</ListGroupItem>
          <ListGroupItem className="infoProdutos">Valor: R$4,00</ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Card.Link className="linkProdutos" href="#">Editar</Card.Link>
          <Card.Link className="linkProdutos" href="#">Remover</Card.Link>
        </Card.Body>
      </Card>
      </Row>
      <Row className="tresCards">
      <Card id="styleCard">
        <Card.Img variant="top" className="imgProduto" src={caneta} />
        <Card.Body>
          <Card.Title className="tituloProduto">Caneta</Card.Title>          
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem className="infoProdutos">Marca: Bic</ListGroupItem>
          <ListGroupItem className="infoProdutos">Quantidade: 01</ListGroupItem>
          <ListGroupItem className="infoProdutos">Valor: R$2,00</ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Card.Link className="linkProdutos" href="#">Editar</Card.Link>
          <Card.Link className="linkProdutos" href="#">Remover</Card.Link>
        </Card.Body>
      </Card>

      <Card id="styleCard">
        <Card.Img variant="top" className="imgProduto" src={reguas} />
        <Card.Body>
          <Card.Title className="tituloProduto">Kit Réguas</Card.Title>          
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem className="infoProdutos">Marca: Maped</ListGroupItem>
          <ListGroupItem className="infoProdutos">Quantidade: 01</ListGroupItem>
          <ListGroupItem className="infoProdutos">Valor: R$7,00</ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Card.Link className="linkProdutos" href="#">Editar</Card.Link>
          <Card.Link className="linkProdutos" href="#">Remover</Card.Link>
        </Card.Body>
      </Card>

      <Card id="styleCard">
        <Card.Img variant="top" className="imgProduto" src={apontador} />
        <Card.Body>
          <Card.Title className="tituloProduto">Apontador</Card.Title>          
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem className="infoProdutos">Marca: Maped</ListGroupItem>
          <ListGroupItem className="infoProdutos">Quantidade: 01</ListGroupItem>
          <ListGroupItem className="infoProdutos">Valor: R$3,00</ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Card.Link className="linkProdutos" href="#">Editar</Card.Link>
          <Card.Link className="linkProdutos" href="#">Remover</Card.Link>
        </Card.Body>
      </Card>
      </Row>
    </Container>
    <Footer />

    </>
  );

}



{/*function AreaLoja() {
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
        <h1 className="titulo">Painel Papelaria</h1>
        <Row>
          <Col xs={9}>
            <h2 className="subtitulo1">Aqui você organiza seus itens a venda.</h2>                      
          </Col>
        </Row>
        <Accordion >
          <Card id="caixaSaldo">
            <Card.Header>
              <Accordion.Toggle id="linkSaldo"as={Button} variant="link" eventKey="0">
                Saldo
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
}*/}

export default AreaLoja;
