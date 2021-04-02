import React from 'react';
import './style.css';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Login from "../Login"
import CadastroResponsavel from "../CadastroResponsavel"
import { Container,  Col, Button,Row,Card,CardGroup} from "react-bootstrap";
import img_nosso from '../../assets/Rectangle2_home1.png' ;
import elli from './Ellipse1.png';
// import api from '../../services/api';
// import { useHistory } from 'react-router';
// import Auth from '../../services/auth'

function Oficial() {
    return (
        <>
        <Header/>
        <Container fluid>   
            <Row>        
                <div id='fundo_inicio'>
                   
                    <div id='posicao_h1_titulo'>
                        <h1 className='h1_titulo '>Olá, somos a Lapiseira!</h1>
                    </div>

                    <p>Conectamos alunos com<br/> 
                                      necessidades de materiais<br/> 
                                        escolares a pessoas com<br/>
                                         vontade de mudar essa<br/>
                                          realidade.</p>
                    
                    <a href='/Login'><Button className='button' type='submint' >Login</Button></a>
                </div>              
         
                <h2>Nosso Objetivo</h2>

                <Row>
                    <Col>
                        <p id='gird_objetivo' className='texto_imagem'>Acreditamos na educação acima de tudo e queremos que crianças não percam oportunidade de aprender mais por falta de material.</p>
                    </Col> 
                    <Col >
                        <div>
                            <img src={img_nosso} id="img_nosso_objetivo"/>
                        </div>
                    </Col>
                </Row>
            
                <h2 id='espacamento_h2'>Faça Parte</h2>

                <Row xs={1} md={2} lg={2} className='grid'>
                   
                    <Col>             
                        <p className='centralizarTexto'>Se você for o responsável por um aluno da rede pública que precisa de material escolar, cadastre-se abaixo.</p>
                        <a href='/CadastroResponsavel' > <Button className='button2' type='submint'>Responsável</Button></a>
                    </Col>
                    <Col>
                        <p className='centralizarTexto'>Se você for um(a) doador(a) e quiser acessar as listas, clique abaixo.</p>
                        <a href='#' > <Button className='button2' type='submint'>Doador</Button></a>
                    </Col>
                   
                </Row>
                <h2>Depoimentos</h2>

                <Row xs={3} md={3} lg={3} id="test">
                        
                    <Col className='col_card'>
                        <div className='fundo_card'>
                            <img src={elli} className='img_card'/>
                            <p className='p_card'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </Col>
                    <Col className='col_card'>
                        <div className='fundo_card'>
                            <img src={elli} className='img_card'/>
                            <p className='p_card'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div> 
                    </Col>
                    <Col className='col_card'>
                        <div className='fundo_card'>
                            <img src={elli} className='img_card'/>
                            <p className='p_card'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </Col> 
           
                </Row>
            </Row>

        </Container>
        <Footer/>
        </>
    );
}
  
export default Oficial;