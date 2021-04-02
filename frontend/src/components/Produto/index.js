import React from "react";

import { Card } from "react-bootstrap";

function Produto({img,nome,valor}) {
  return (
    <Card style={{ width: "18rem", margin: "10px auto" }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{nome}</Card.Title>
        <Card.Text>
         Valor: {valor}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Produto;
