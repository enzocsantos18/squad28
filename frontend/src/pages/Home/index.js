import React, {useState, useEffect} from "react";
import {Container, Row} from 'react-bootstrap'
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from '../../components/Header'
import ListaAluno from "../../components/ListaAluno";
import idade from "../../helpers/tratamentoIdade";
import './styles.css'
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
      <Container>
        <h2>
        Aqui você encontra várias crianças e pode escolher uma para ajudar
        </h2>
        <div className="listagem">
       
       
          {
            listaAlunos.map(lista => {
              return(
                <Link key={lista.id} to={`/lista/${lista.id}`} >
                  <ListaAluno nome={lista.student.name} idade={idade(lista.student.birthDate)} descricao={lista.description}/>
                </Link>
              )
            })
          }
        
        </div>
      
      </Container>
      <Footer />

    </>
  );
}

export default Home;
