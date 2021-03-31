import React, { useState } from 'react';
import './login.css';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
// import { Link, withRouter } from "react-router-dom";
import { Container, Form, Col, Button,Row,Modal} from "react-bootstrap";
import imagemlogin from './fotologin.png'





function Login() {
  return (
    <Container fluid >
      <Header/>
      <Row>
        <Col sm={6}>
          <div className='grid_texto'>
            <h1>Olá, somos a<br/> Lapiseira</h1>
            
            <p>Conectamos alunos com necessidades de materiais escolares com pessoas com vontade de mudar essa realidade.</p>
          </div>
        </Col>
        
        <Col sm={6}>
          <div className='grid' >
            <Row>
              <div>
                <h2 className='titulo_login'>Faça o login <br/>e vamos <br/>mudar o<br/> mundo!</h2>
              </div>
              <div>
                <img className='img_login' src={imagemlogin}/>
              </div>          
            </Row>
            
            <Form id='form'>
              <Form.Group controlId="formEmail">
                <Form.Control id='input' type="email" placeholder="Email" />
              </Form.Group>
      
              <Form.Group controlId="formPassword">
                <Form.Control id='inputsenha' type="password" placeholder="Senha" />
              </Form.Group>
             
                <Button id="buttonEntar" type="submit">
                  Login
                </Button>
            
              
            </Form>

          </div>
        </Col>
      </Row>

      {/* <Footer/> */}
    </Container>
  );
}

export default Login;