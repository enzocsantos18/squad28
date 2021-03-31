import React, { useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { useHistory } from 'react-router';
import Filho from '../../components/Filho';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import idade from '../../helpers/tratamentoIdade'
import api from '../../services/api';
import Auth from '../../services/auth'
// import { Container } from './styles';

function AreaResponsavel() {
  const history = useHistory();
  
  const [listaFilhos, setListaFilhos] = useState([]);

  async function buscarFilhos() {
    const { data } = await api.get(`/student/parent`);
    setListaFilhos(data.students);
  }


  useEffect(() => {
    buscarFilhos();
  }, []);

  function handleSair(){
    Auth.destroyToken();
    history.push('/')
  }

  return (
    <>
    <Header linkLogo="/areaResponsavel">
      <Button onClick={handleSair}>Sair</Button>
    </Header>
      <Container>
      <Button style={{marginBottom: "20px"}}>Adicionar Filho</Button>

        <h2>Meus Filhos</h2>
        <div className="listagem">

        {
          listaFilhos ? (
            <>
            {
              listaFilhos.map(filho => (
                <Filho key={filho.id} nome={filho.name} lista={filho.list} idade={idade(filho.birthDate)}/>
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