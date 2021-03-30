import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./style.css";

function Filho({nome, idade, descricao, lista}) {
  return (
    <>
      <div className="listaAluno">
        <img
          src="https://img.icons8.com/bubbles/2x/user-male.png"
          alt="Foto ilustrativa da criança"
        />
        <div>
          <h2>{nome}, {idade} anos</h2>
          
          {
            lista ? (
              <Link to={`/areaResponsavel/lista/${lista.id}`}>Ver Lista</Link>
            ) : (
              
              <Button>Nova Lista</Button>
            )
          }

        </div>
      </div>
    </>
  );
}

export default Filho;
