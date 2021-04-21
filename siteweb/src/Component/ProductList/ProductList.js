import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import "./ContactCard.css";
import editBtn from "../../Assets/edit.png";
import avatar from "../../Assets/avatar.png";
import deleteBtn from "../../Assets/delete.png";
import { getProduct, deleteProduct, toggleTrue } from "../../JS/action/product";

const ProductList = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="contact-card">
      <img src={avatar} alt="avatar" className="avatar" />
      <h3>{product.title}</h3>
      <span>{product.description}</span>
      <span>{product.details}</span>
      <div className="delete-edit-btns">
        <img
          src={deleteBtn}
          alt="delete-icon"
          onClick={() => dispatch(deleteProduct(product._id))}
        />
        <Link to="/editProduct">
          <img
            src={editBtn}
            alt="edit-icon"
            onClick={() => {
              dispatch(toggleTrue());
              dispatch(getProduct(product._id));
            }}
          />
        </Link>
      </div>
    </div>
  );
};

export default ProductList;
