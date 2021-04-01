import React, {useState} from "react";

import { Button, Container, Form } from "react-bootstrap";
import api from '../../services/api'
import Footer from "../../components/Footer";
import Header from "../../components/Header";

function CriacaoLista() {

  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value
    })
    // Check and see if errors exist, and remove them from the error object:
    if ( !!errors[field] ) setErrors({
      ...errors,
      [field]: null
    })
  }

  const acharErros = () => {
    const { descricao } = form;
    const novosErros = {};
  

    return novosErros;
  };

  function handleClick(e){
    e.preventDefault();

    // try{

    //   await api.post('/list', )
    // }
    


  }
  return (
    <>
      <Header />
      {JSON.stringify(form)}
      <Container>
        <h2 style={{ width: "334px" }}>Criação da lista</h2>
        <h4>
          Sinta-se à vontade para deixar um recado a quem visualizar sua lista!
        </h4>
        <Form onSubmit={handleClick}>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Mensagem:</Form.Label>
            <Form.Control onChange={(e) => setField("descricao", e.target.value)} style={{resize: 'none'}} as="textarea" rows={3} />
          </Form.Group>
          <Button>Continuar</Button>
        </Form>
      </Container>
      <Footer />
    </>
  );
}

export default CriacaoLista;
