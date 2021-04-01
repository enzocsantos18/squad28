import React, {useState} from "react";
import './style.css'
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Form, Col, Container, Row, Button } from "react-bootstrap";
import MaskedInput from "react-maskedinput";
import avatar1 from "../../assets/avatar1.png"
import avatar2 from "../../assets/avatar2.png"
import avatar3 from "../../assets/avatar3.png"
import api from "../../services/api";
import { useHistory } from "react-router-dom";

function CadastroAluno (props) {
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
    
        <Form className="formulario" noValidate validated={validated} onSubmit={handleSubmit}>
            
            <div className="formMenor">
            <h1 className="titulo">Quem vai se beneficiar?</h1>
            <Row>
                <Col xs={9}>
                    <h2 className="subtitulo1">Agora nos diga as informações do aluno: </h2>                      
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
                        placeholder="Digite o nome do Aluno"           
                    />  
                     <Form.Control.Feedback type="invalid">
                        Informe o nome do aluno!
                    </Form.Control.Feedback>           
                </Form.Group>
            </Form.Row>  
            <Form.Row> 
                <Form.Group as={Col} md="4" controlId="validationCustom02">     
                    <MaskedInput
                        onChange={handleInputChange}
                        required
                        type="text"
                        name="nascimento" 
                        mask="11/11/1111"
                        placeholder="  Data de Nascimento" 
                        id="campoNascimento"
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
                        Informe uma data válida!
                    </Form.Control.Feedback>        
                </Form.Group> 
            </Form.Row>     
           <Form.Row>
                <Form.Group as={Col} md="4" controlId="validationCustom01">    
                    <Form.Control
                        onChange={handleInputChange}
                        id="campoMatricula"
                        name="matricula" 
                        required
                        type="text"
                        placeholder="Matrícula"           
                    />   
                    <Form.Control.Feedback type="invalid">
                        Informe a matrícula do aluno!
                    </Form.Control.Feedback>        
                </Form.Group>                        
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col} md="4" controlId="validationCustom02" > 
                    <Form.Control required id="campoUf" name="uf" placeholder="UF" as="select" custom>
                        <option value="" disabled selected>UF da Escola</option>                        
                        <option value="SP">SP</option>
                    </Form.Control>
                    <Form.Control.Feedback type="invalid">
                        Selecione o estado da escola!
                    </Form.Control.Feedback>
                </Form.Group>
            </Form.Row>
            
            <Form.Row>
                <Form.Group as={Col} md="4" controlId="exampleForm.SelectCustom"> 
                    <Form.Control required id="campoCidade" name="cidade" placeholder="Cidade" as="select" custom>
                        <option value="" disabled selected>Cidade da Escola</option>                          
                        <option value="São Paulo">São Paulo</option>
                    </Form.Control>
                    <Form.Control.Feedback type="invalid">
                        Selecione a cidade da escola!
                    </Form.Control.Feedback>
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group as={Col} md="4" controlId="exampleForm.SelectCustom"> 
                    <Form.Control required id="campoBairro" name="bairro" placeholder="Bairro" as="select" custom>
                        <option value="" disabled selected>Bairro da Escola</option>                         
                        <option value="Vila Carrão">Vila Carrão</option>
                        <option value="Vila Matilde">Vila Matilde</option>
                        <option value="Vila Nova Manchester">Vila Nova Manchester</option>
                        <option value="Chácara Califórnia">Chácara Califórnia</option>
                    </Form.Control>
                    <Form.Control.Feedback type="invalid">
                        Selecione o bairro da escola!
                    </Form.Control.Feedback>
                </Form.Group>
            </Form.Row>  

            <Form.Row>
                <Form.Group as={Col} md="4" controlId="exampleForm.SelectCustom"> 
                    <Form.Control required id="campoEscola" name="escola" placeholder="Escola" as="select" custom>
                        <option value="" disabled selected>Nome da Escola</option>                                             
                    </Form.Control>
                    <Form.Control.Feedback type="invalid">
                        Selecione a escola!
                    </Form.Control.Feedback>
                </Form.Group>
            </Form.Row>       
        
            <Row>
                <Col xs={10}>
                    <h2 className="subtitulo2">Selecione um avatar:</h2>
                </Col>
            </Row>
           
            <button type="button" className="btnAvatar">
                <img src={avatar1} id="avatarUm" alt="Avatar"></img>
            </button>    
            <button type="button" className="btnAvatar">
                <img src={avatar2} alt="Avatar"></img>
            </button>  
            <button type="button" className="btnAvatar" id="avatarUm">
                <img src={avatar3} alt="Avatar"></img>
            </button>             
              
            <Row>
                <Col xs={10}>
                    <h2 className="subtitulo3">Sinta-se à vontade para deixar um recado a quem visualizar sua lista!</h2>
                </Col>
            </Row>

            <Form.Group id="caixaTexto" controlId="exampleForm.ControlTextarea1">                
                <Form.Control placeholder="Digite seu texto" as="textarea" rows={6} />
            </Form.Group>

            
                <Button id="btnEnviar" type="submit">Enviar</Button>  
            
            </div>
        </Form>        
                  
    </Container>
    <Footer /> 
    </div>
  );

  
}


    
export default CadastroAluno;    