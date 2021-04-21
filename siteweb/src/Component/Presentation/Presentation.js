import React from "react";
import { Card } from "react-bootstrap";
import logo from "../../Assets/image/logo.png";
import "./Presentation.css";

const Presentation = () => {
  return (
    <div>
      <Card className="pos">
        <Card.Img variant="top" src={logo} className="my-logo-style" />
        <Card.Body>
          <Card.Text>
            <p className="style-par">
              Pour chaque Jour vous exigez un environnement propre et sain{" "}
              <span className="style-lo">Brinet</span> conçoit, fabrique et
              distribue des solution et des produits d'entertien innovant
              d'entretien Nous vous proposons une selection de produits et
              services destinés à vous simplifier l'hygiène et dévlopper vos
              Affaires
            </p>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Presentation;
