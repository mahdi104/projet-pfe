import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./productList.css";

import { getProduct } from "../../JS/action/product";
import Product from "../Product/Product";

const ProductList = () => {
  const products = useSelector((state) => state.productReducer.products);
  console.log(products);
  const loadProducts = useSelector(
    (state) => state.productReducer.loadProducts
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProduct());
  }, []);
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        {loadProducts ? (
          <h2>loading</h2>
        ) : products.length == 0 ? (
          <h2>there is no data show</h2>
        ) : (
          products.map((el) => <Product key={el._id} products={el} />)
        )}
      </div>
    </div>
  );
};

export default ProductList;