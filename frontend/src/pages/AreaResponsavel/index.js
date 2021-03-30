import React, { useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import Filho from '../../components/Filho';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import idade from '../../helpers/tratamentoIdade'
import api from '../../services/api';

// import { Container } from './styles';

function AreaResponsavel() {

  
  const [listaFilhos, setListaFilhos] = useState([]);

  async function buscarFilhos(bairro = "") {
    const { data } = await api.get(`/student/parent/7`, {
      headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NywidHlwZSI6InBhcmVudCIsImlhdCI6MTYxNjk0OTE2NSwiZXhwIjoxNjE3NTUzOTY1fQ.Q7F5sGVo4hQqkaJGCjzq4ocJAf4Zbh2wGvcLrvFkxsg"

      }
    });
    setListaFilhos(data.students);

    console.log(data.students)
  }


  useEffect(() => {
    buscarFilhos();
  }, []);



  return (
    <>
    <Header/>
      <Container>
      <Button>Adicionar Filho</Button>

        <h2>Meus Filhos</h2>
        <div className="listagem">

        {
          listaFilhos ? (
            <>
            {
              listaFilhos.map(filho => (
                <Filho nome={filho.name} lista={filho.list} idade={idade(filho.birthDate)}/>
              ))
            }
            
          </>
          ) : (
            <p>Carregando...</p>
          )
        }
        </div>
       
      </Container>
    <Footer/>
    </>
  );
}

export default AreaResponsavel;