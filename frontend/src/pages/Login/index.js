import React from 'react';
import { Container, Form, Col, Modal, Button} from "react-bootstrap";
import imagemlogin from './fotologin.png'
// import { Container } from './styles';

function Login() {
  return (
    <Container>
      <h2>Faça o logim e vamos mudar o mundo!</h2>
      <img src={imagemlogin }/>

      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Email" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Senha" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>

    </Container>


  );
}

export default Login;