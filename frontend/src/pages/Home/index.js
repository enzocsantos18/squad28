import React, {useState, useEffect} from "react";
import {Card, Container, Button, Row} from 'react-bootstrap'
import Footer from "../../components/Footer";
import Header from '../../components/Header'
import ListaAluno from "../../components/ListaAluno";
import imagem from './Rectangle2.png'
import './style.css';
import api from '../../services/api';
function Home() {

  const [listaAlunos, setListaAlunos ] = useState([])

  async function buscarListas(){
    const {data} = await api.get('/list');
    setListaAlunos(data);
  }

  useEffect(() => {
    buscarListas();
  }, [])

  return (
    <>
      <Header/> 
      <Container fluid>
        <div id='img_inicio'>
          
        </div>



        <h2 style={{width: "1000px", margin: "10px 0px"}}>
        Aqui você encontra várias crianças e pode escolher uma para ajudar
        </h2>
        <Row >
          {
            listaAlunos.map(lista => {
              return(
                <ListaAluno nome={lista.student.name} idade={lista.student.birthDate} descricao={lista.description}/>
              )
            })
          }
        
        </Row>
      
      </Container>
      <Footer />

    </>
  );
}

export default Home;
