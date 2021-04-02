import React, {useState} from "react";
import './style.css'
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Form, Col,Container, Row, Button } from "react-bootstrap";
import MaskedInput from "react-maskedinput";
import imgResp from "../../assets/responsavel2.png"
import api from "../../services/api";
import { useHistory } from "react-router-dom";

function CadastroResponsavel (props) {
    const [validated, setValidated] = useState(false);
    const history = useHistory();

    const [dados, setDados] = useState({
        nome: '',
        email: '',
        cpf: '',
        senha: '',
    })



    const handleInputChange = (event) => {
        setDados({
            ...dados,
            [event.target.name] : event.target.value
        })
    }

  async function handleSubmit (event){
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try{
       const response = await api.post('/parent', {
            name: dados.nome,
            email: dados.email,
            password: dados.senha
        })

        if (response.status === 200){
             history.push("/login");
        }
    }
    catch(e){   
        console.error(e)
    }

    setValidated(true);
  };

  return (
    <div className="main">
    <Header />
    <Container>   
    <img id="imgRespon"src={imgResp} alt="Avatar Responsavel"/>
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
                        onChange={handleInputChange}
                        id="campoNome"
                        name="nome" 
                        required
                        type="text"
                        placeholder="Nome Completo"           
                    />  
                    <Form.Control.Feedback type="invalid">
                        Digite seu nome!
                    </Form.Control.Feedback>         
                </Form.Group>                
            </Form.Row>  
            <Form.Row> 
                <Form.Group as={Col} md="4" controlId="validationCustom02">     
                    <MaskedInput
                        onChange={handleInputChange}
                        required
                        type="text"
                        name="cpf" 
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
                        Gentileza informar um CPF válido!
                    </Form.Control.Feedback>        
                </Form.Group>            
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col} md="6" controlId="validationCustom03">         
                    <MaskedInput
                        onChange={handleInputChange}
                        type="text"
                        mask="(11) 11111-1111"
                        placeholder="  Telefone" 
                        name="telefone" 

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
                        onChange={handleInputChange}           
                        id="campoMail"
                        required
                        name="email" 
                        type="mail"
                        placeholder="E-mail"           
                    />    
                    <Form.Control.Feedback type="invalid">
                        Gentileza informar um e-mail válido!
                    </Form.Control.Feedback>        
                </Form.Group>
            </Form.Row>     
            <Form.Row> 
                <Form.Group as={Col} md="4" controlId="validationCustom02">      
                   <Form.Control
                        onChange={handleInputChange}
                        id="campoSenha"
                        required
                        name="senha" 
                        type="password"
                        placeholder="Senha"                
                    />    
                    <Form.Control.Feedback type="invalid">
                        Escolha uma senha!
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



