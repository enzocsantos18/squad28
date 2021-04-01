import React, { useState } from 'react';
import './login.css';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Container, Form, Col, Button,Row} from "react-bootstrap";
import imagemlogin from '../../assets/img_login_pag.png' 
import api from '../../services/api';
import { useHistory } from 'react-router';
import Auth from '../../services/auth'

function Login() {

  const history = useHistory();
  const [dados, setDados] = useState({
    email: '',
    password: '',
  })
  const [isResponsavel, setIsResponsavel] = useState(true);
  const [erro, setErro] = useState(false);

const handleInputChange = (event) => {
    setDados({
      ...dados,
      [event.target.name] : event.target.value
    })

}

async function handleSubmit (event){
event.preventDefault();
    if(isResponsavel){

      try{
        const response = await api.post('/auth/parent', {
            ...dados
          })
      
          if(response.status === 200){
            Auth.setToken({
              token: response.data.token,
              type: 'Parent'
            })
            history.push("/areaResponsavel");
          }
         }
          catch(e){   
            setErro(true);
          }
    }else{
      try{
        const response = await api.post('/auth/store', {
            ...dados
          })
      
            if(response.status === 200){
              Auth.setToken({
                token: response.data.token,
                type: 'Store'
              })
              history.push("/areaLoja");
            }
          }
          catch(e){   
            setErro(true);
          }
    }

    };

  return (
    <>
    <Header/>
    <Container >
      <div className='grid' >
        <Row xs={2} md={8} lg={3}>

          <Col>
            <h2 className='titulo_login'>Faça o login <br/>e vamos <br/>mudar o<br/> mundo!</h2>
          </Col>

          <Col>
            <img className='img_login' alt="imagem ilustrativa login" src={imagemlogin}/>
          </Col> 

          <Col xs={12} md={12} lg={4}>
            <Form id='form' onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Control className='input' type="email" placeholder="Email" onChange={handleInputChange} name="email" />
              </Form.Group>
      
              <Form.Group>
                <Form.Control className='input' onChange={handleInputChange} name="password" type="password" placeholder="Senha" />
              </Form.Group>
              {erro && <span>Email e/ou senha inválidos.</span>}
                <div className='buttonaliamento'>
                  <Button id="buttonEntar" type="submit">
                    Login
                  </Button>
                </div>
                {/* <Button onClick={() => setIsResponsavel(true)}>Responsavel</Button>
                <Button onClick={() => setIsResponsavel(false)}>Papelaria</Button> */}
            </Form>
          </Col>

        </Row>
      </div>
    </Container>
    <Footer/>
    </>
  );
}

export default Login;