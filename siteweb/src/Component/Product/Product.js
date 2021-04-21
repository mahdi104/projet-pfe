import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProduct } from "../../JS/action/product";
import { ProductList } from "../ProductList/ProductList";
import "./Product.css";

const Product = () => {
  const products = useSelector((state) => state.productReducer.product);
  const loadProduct = useSelector((state) => state.productReducer.loadProduct);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);
  return loadProduct ? (
    <h1>estenaaaaaaa</h1>
  ) : (
    <div className="contacts-content">
      <div className="contacts-list">
        {products.map((product) => (
          <ProductList product={product} key={product._id} />
        ))}
      </div>
    </div>
  );
};

export default Product;
