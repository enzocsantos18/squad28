import React from "react";
import "./style.css";

function ListaAluno({nome, idade, descricao}) {
  return (
    <>
      <div className="listaAluno">
        <img
          src="https://img.icons8.com/bubbles/2x/user-male.png"
          alt="Foto ilustrativa da criança"
        />
        <div>
          <h2>{nome}, {idade} anos</h2>
          <p>
           {descricao.substring(1,80)}...
          </p>
        </div>
      </div>
    </>
  );
}

export default ListaAluno;
