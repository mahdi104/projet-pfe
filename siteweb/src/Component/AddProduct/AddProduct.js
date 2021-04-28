import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, editProduct } from "../../JS/action/product";
import { Button, Form } from "semantic-ui-react";
import { Link } from "react-router-dom";

const AddProduct = () => {
  const [product, setProduct] = useState({
    title: "",
    description: "",
    details: "",
    categories: "",
  });
  const productReducer = useSelector((state) => state.productReducer.products);
  const edit = useSelector((state) => state.productReducer.isEdit);
  const dispatch = useDispatch();
  useEffect(() => {
    edit
      ? setProduct(productReducer)
      : setProduct({ title: "", description: "", details: "", categories: "" });
  }, [productReducer, edit]);
  const handleProduct = () => {
    if (!edit) {
      dispatch(addProduct(product));
    } else {
      dispatch(editProduct(product._id, product));
    }
  };
  const handleChange = (e) => {
    e.preventDefault();
    setProduct({ ...product, [e.target.name]: e.target.value });
  };
  return (
    <Form>
      <Form.Field>
        <label> Title</label>
        <input
          value={product.title}
          placeholder=" Title"
          name="title"
          onChange={handleChange}
        />
      </Form.Field>
      <Form.Field>
        <label>Description</label>
        <input
          value={product.description}
          placeholder="description"
          name="description"
          onChange={handleChange}
        />
      </Form.Field>
      <Form.Field>
        <label>Details</label>
        <input
          value={product.details}
          placeholder="details"
          name="details"
          onChange={handleChange}
        />
      </Form.Field>
      <Link to="/interfaceadmin">
        <Button type="submit" onClick={handleProduct}>
          {edit ? "Edit" : "Save"}
        </Button>
      </Link>
    </Form>
  );
};

export default AddProduct;
