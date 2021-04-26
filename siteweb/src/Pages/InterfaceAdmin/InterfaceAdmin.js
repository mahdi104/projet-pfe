import React from "react";
import AddProduct from "../../Component/AddProduct";
import "./InterfaceAdmin.css";
const InterfaceAdmin = () => {
  return (
    <div>
      <div className="sideBar">
        <a href="/AddProduct">Ajouter Produit</a>

        <a href="#">Mise à Jour Produit</a>

        <a href="#">Supprimer produit</a>

        <a href="#">Liste Des Produits</a>
      </div>
      {/* <Navbar bg="light" className="stylenavad">
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
      </Navbar> */}
    </div>
  );
};

export default InterfaceAdmin;
