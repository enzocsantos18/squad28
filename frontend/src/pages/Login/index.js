import React from 'react';
import { Container, Form, Col, Modal, Button,Row} from "react-bootstrap";
import imagemlogin from './fotologin.png'
import './login.css';

function Login() {
  return (
    <Container>
      <div className='grid'>
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
    </Container>


  );
}

export default Login;