import React from "react";
import { Navbar } from "react-bootstrap";
import "./InterfaceAdmin.css";
const InterfaceAdmin = () => {
  return (
    <div>
      <h2>Dashboard Admin</h2>

      <Navbar bg="light" className="stylenavad">
        <Navbar.Brand href="#home">
          <span className="text-style">Ajouter Produit</span>
        </Navbar.Brand>
      </Navbar>
      <br />
      <Navbar bg="light" className="stylenavad">
        <Navbar.Brand href="#home">
          <span className="text-style">Mise à Jour Produit</span>
        </Navbar.Brand>
      </Navbar>
      <br />
      <Navbar bg="dark" className="stylenavad">
        <Navbar.Brand href="#home">
          <span className="text-style">Supprimer produit</span>
        </Navbar.Brand>
      </Navbar>
      <br />
      <Navbar bg="dark" variant="dark" className="stylenavad">
        <Navbar.Brand href="#home" className="stylenavad">
          <span className="text-style">Liste Des Produits</span>
        </Navbar.Brand>
      </Navbar>
    </div>
  );
};

export default InterfaceAdmin;
