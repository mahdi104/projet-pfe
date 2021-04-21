import React from "react";
import { Card, Button } from "react-bootstrap";
import netdoux from "../../../Assets/image/netdoux.png";
import "./NetDouxMain.css";

const NetDouxMain = () => {
  return (
    <div>
      <Card className="description">
        <Card.Img variant="top" src={netdoux} />
        <Card.Body>
          <Card.Title>NetDouxMain</Card.Title>
          <Card.Text>
            <h3>
              Gel Nettoyant pour le lavage fréquent des mains "spécial douceur"
            </h3>
            <ul>
              <li>Nettoie et dégraisse parfaitement</li>
              <li>Laisse la peau douce et délicatement parfumée</li>
              <li>Respecte les peaux les plus délicates</li>
              <li>Spécial Professionnel</li>
            </ul>
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default NetDouxMain;
