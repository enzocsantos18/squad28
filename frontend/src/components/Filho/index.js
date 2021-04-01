import React from "react";
import { Link } from "react-router-dom";

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
              <Link className="btn btn-primary" variant="" style={{width: '100%'}} to={`/areaResponsavel/lista/${lista.id}`}>Ver Lista</Link>
            ):
            null
          }

        </div>
      </div>
    </>
  );
}

export default Filho;
