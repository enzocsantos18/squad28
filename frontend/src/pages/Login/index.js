import React, { useState } from "react";
import "./login.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Container, Form, Col, Button, Row } from "react-bootstrap";
import imagemlogin from "./fotologin.png";
import api from "../../services/api";
import { useHistory } from "react-router";
import Auth from "../../services/auth";
import { Link } from "react-router-dom";

function Login() {
  const history = useHistory();
  const [dados, setDados] = useState({
    email: "",
    password: "",
  });

  const [erro, setErro] = useState(false);

  const handleInputChange = (event) => {
    setDados({
      ...dados,
      [event.target.name]: event.target.value,
    });
  };

  async function handleSubmit(event) {
    event.preventDefault();

    try{
      const response = await api.post("/auth/parent", {
        ...dados,
      });

      if (response.status === 200) {
        Auth.setToken({
          id: response.data.id,
          token: response.data.token,
          type: "Parent",
        });
        history.push("/areaResponsavel");
      }
    }
    catch(e){
      try{

        const responseStore = await api.post("/auth/store", {
          ...dados,
        });
  
        if (responseStore.status === 200) {
          Auth.setToken({
            id: responseStore.data.id,
            token: responseStore.data.token,
            type: "Store",
          });
        history.push("/areaLoja");
        } 
      }catch(e){
        setErro(true)
      }
    }
        

  
  }

  return (
    <>
      <Header />
      <Container>
        <Row>
          <Col sm={6}>
            <div className="grid_texto">
              <h1 className="titulo"> 
                Olá, somos a<br /> Lapiseira
              </h1>

              <p>
                Conectamos alunos com necessidades de materiais escolares com
                pessoas com vontade de mudar essa realidade.
              </p>
            </div>
          </Col>

          <Col sm={6}>
            <div className="grid">
              <Row>
                <div>
                  <h2 className="titulo_login">
                    Faça o login <br />e vamos <br />
                    mudar o<br /> mundo!
                  </h2>
                </div>
                <div>
                  <img
                    className="img_login"
                    alt="imagem ilustrativa login"
                    src={imagemlogin}
                  />
                </div>
              </Row>

              <Form id="form" onSubmit={handleSubmit}>
                <Form.Group>
                  <Form.Control
                    id="input"
                    type="email"
                    placeholder="Email"
                    onChange={handleInputChange}
                    name="email"
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Control
                    id="inputsenha"
                    onChange={handleInputChange}
                    name="password"
                    type="password"
                    placeholder="Senha"
                  />
                </Form.Group>
                {erro && <span className="erro">Email e/ou senha inválidos.</span>}
                <Link to="/cadastroResponsavel">Cadastro responsável</Link>
                <Link to="/cadastroLoja">Cadastro Loja</Link>
                <Button id="buttonEntar" type="submit">
                  Login
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default Login;
