import React from "react";
import { Card } from "react-bootstrap";
import Tel from "../../Assets/image/tel.png";
import Email from "../../Assets/image/email.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <Card className="text-center">
        <Card.Header></Card.Header>
        <Card.Body>
          <Card.Title className="typestyle ">Contactez-Nous</Card.Title>
          <Card.Text>
            <img src={Tel} alt="telicon" className="sizeicone" />
            55 457 371
            <br />
            <img src={Email} alt="emailicon" className="sizeicone" />
            mohamedamine.dimassi@planet.tn
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Footer;
