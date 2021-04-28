import React from "react";
import { Link } from "react-router-dom";
import "./InterfaceAdmin.css";
const InterfaceAdmin = () => {
  return (
    <div>
      <div className="sideBar">
        <Link to="/AddProduct">Ajouter Produit</Link>
        <Link to="/Update">Mise à Jour Produit</Link>
        <Link to="/Delete">Supprimer produit</Link>
        <Link to="/Get">Liste Des Produits</Link>
      </div>
    </div>
  );
};

export default InterfaceAdmin;
