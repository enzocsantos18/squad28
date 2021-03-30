import React, {useState, render} from "react";
import './style.css'
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Form, Col, InputGroup, Container, Row, Button, Accordion, Card } from "react-bootstrap";
import MaskedInput from "react-maskedinput";
import imgResp from "../../assets/responsavel.png"

function CadastroResponsavel (props) {
    const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div className="main">
    <Header />
    <Container>   
    <img id="imgResponsavel"src={imgResp} alt=""/>
        <Form className="formulario" noValidate validated={validated} onSubmit={handleSubmit}>
            
            <div className="formMenor">
            <h1 className="titulo">Cadastro Responsável</h1>
            <Row>
                <Col xs={9}>
                    <h2 className="subtitulo1">Nesta etapa faremos um cadastro inicial para conhecermos melhor você </h2>                      
                </Col>
            </Row>
            <Form.Row className="linhaForm1">
                <Form.Group className="campo" as={Col} md="4" controlId="validationCustom01">    
                    <Form.Control
                        id="campoNome" 
                        required
                        type="text"
                        placeholder="Nome Completo"           
                    />           
                </Form.Group>
            </Form.Row>  
            <Form.Row> 
                <Form.Group as={Col} md="4" controlId="validationCustom02">     
                    <MaskedInput
                        required
                        type="text"
                        mask="111.111.111-11"
                        placeholder="  CPF" 
                        id="campoCPF"
                        {...props}
                        formatCharacters={{
                        'W': {
                            validate(char) { return /\w/.test(char ) },
                            transform(char) { return char.toUpperCase() }
                        }
                        }}
                    />   
                    
                    {/*<Form.Control
                        id="campoCPF"
                        required
                        type="text"
                        placeholder="CPF"       
                                 
                    />*/}    
                    <Form.Control.Feedback type="invalid">
                        Gentileza informar um CPF válido.
                    </Form.Control.Feedback>        
                </Form.Group>            
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col} md="6" controlId="validationCustom03">         
                    <MaskedInput
                        
                        type="text"
                        mask="(11) 11111-1111"
                        placeholder="  Telefone" 
                        id="campoTel"
                        {...props}
                        formatCharacters={{
                        'W': {
                            validate(char) { return /\w/.test(char ) },
                            transform(char) { return char.toUpperCase() }
                        }
                        }}
                    />   

                    {/*<Form.Control 
                    id="campoTel"
                    type="tel" 
                    placeholder="Telefone"  
                    />*/}
                    <Form.Control.Feedback type="invalid">
                        Gentileza informar um telefone válido.
                    </Form.Control.Feedback>
                </Form.Group>           
            </Form.Row>
            <Row>
                <Col xs={10}>
                    <h2 className="subtitulo2">Para finalizar o seu cadastro insira:</h2>
                </Col>
            </Row>
            <Form.Row className="linhaForm1">
                <Form.Group as={Col} md="4" controlId="validationCustom01">            
                    <Form.Control                
                        id="campoMail"
                        required
                        type="mail"
                        placeholder="E-mail"           
                    />    
                    <Form.Control.Feedback type="invalid">
                        Gentileza informar um e-mail válido.
                    </Form.Control.Feedback>        
                </Form.Group>
            </Form.Row>     
            <Form.Row> 
                <Form.Group as={Col} md="4" controlId="validationCustom02">      
                   <Form.Control
                        id="campoSenha"
                        required
                        type="password"
                        placeholder="Senha"                
                    />    
                    <Form.Control.Feedback type="invalid">
                        Escolha uma senha com no mínimo 06 dígitos
                    </Form.Control.Feedback>        
                </Form.Group>            
            </Form.Row>
            
            <Button id="btnEnviar" type="submit">Continuar</Button>     
              
            </div>
        </Form>        
                  
    </Container>
    <Footer /> 
    </div>
  );

  
}


    
export default CadastroResponsavel;        



