import React from 'react';
import './style.css';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Login from "../Login"
import { Container,  Col, Button,Row,Card,CardGroup} from "react-bootstrap";
import img_nosso from '../../assets/Rectangle2_home1.png' ;
import elli from './Ellipse1.png';
// import api from '../../services/api';
// import { useHistory } from 'react-router';
// import Auth from '../../services/auth'

function Oficial() {
    return (
        <>
        {/* <Header/> */}
        <Container fluid>   
            <Row>        
                <div id='fundo_inicio'>
                   
                    <div id='posicao_h1_titulo'>
                        <h1 className='h1_titulo '>Olá, somos a Lapiseira!</h1>
                    </div>

                    <p className='p_conteudo'>Conectamos alunos com necessidades de materiais escolares a pessoas com vontade de mudar essa realidade.</p>
                    
                    <a href='#'><Button className='button' type='submint' >Login</Button></a>
                </div>

                <h2>Nosso Objetivo</h2>

                <Row xs={2} md={2} lg={2}>

                    <Col><p>Acreditamos na educação acima de tudo e queremos que crianças não percam oportunidade de aprender mais por falta de material.</p>
                    </Col>

                    <Col><img src={img_nosso}></img></Col>

                </Row>
                <h2>Faça Parte</h2>
                <Row xs={1} md={2} lg={2}>
                    <Col>
                        <p>Se você for o responsável por um aluno da rede pública que precisa de material escolar, cadastre-se abaixo</p>
                        <a href='#'> <Button className='button' type='submint'>Responsável</Button></a>
                    </Col>
                    <Col>
                        <p>Se você for um(a) doador(a) e quiser acessar as listas, clique abaixo</p>
                        <a href='#'> <Button className='button' type='submint'>Doador</Button></a>
                    </Col>
                </Row>
                <h2>Depoimentos</h2>

                {/* <Row xs={3} md={3} lg={3}>
           
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={elli}className='img_card'/>
                            <Card.Body>
                            
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural
                                </Card.Text>
                            </Card.Body>

                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={elli} className='img_card'/>
                            <Card.Body>
                        
                            <Card.Text>
                                This card has supporting text below as a natural lead-in to additional
                                content.{' '}
                            </Card.Text>
                            </Card.Body>

                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={elli} className='img_card' />
                            <Card.Body>

                            <Card.Text>
                                This is a wider card with supporting text below as a natural 
                            </Card.Text>
                            </Card.Body>

                        </Card>
                    </Col> 
           
                </Row>*/}

                <Row xs={3} md={3} lg={3}>
                        
                    <Col>
                        <img src={elli} className='img_card'/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Col>
                    <Col>
                        <img src={elli} className='img_card'/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Col>
                    <Col>
                        <img src={elli} className='img_card'/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Col> 
           
                </Row>





            </Row>

        </Container>
        {/* <Footer/> */}
        </>
    );
}
  
export default Oficial;