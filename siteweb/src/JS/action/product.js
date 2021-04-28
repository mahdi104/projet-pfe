import axios from "axios";

import {
  GET_PRODUCT_LOAD,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAIL,
  TOGGLE_TRUE,
  TOGGLE_FALSE,
  GET_PRODUCT,
} from "../actionTypes/product";

//Get Product

export const getProduct = () => async (dispatch) => {
  dispatch({ type: GET_PRODUCT_LOAD });
  try {
    const res = await axios.get("/api/product");
    dispatch({
      type: GET_PRODUCT_SUCCESS,
      payload: res.data.listProduct,
    });
  } catch (error) {
    dispatch({
      type: GET_PRODUCT_FAIL,
      payload: error,
    });
    console.log(error);
  }
};

//Delete Product

export const deleteProduct = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/product/${id}`);
    dispatch(getProduct());
  } catch (error) {
    console.log(error);
  }
};

//Add Product
export const addProduct = (newProduct) => async (dispatch) => {
  try {
    await axios.post("/api/product/", newProduct);
    dispatch(getProduct());
  } catch (error) {
    console.log(error);
  }
};

//edit Product

export const editProduct = (id, newProduct) => async (dispatch) => {
  try {
    await axios.put(`/api/product/${id}`, newProduct);
    dispatch(getProduct());
  } catch (error) {
    console.log(error);
  }
};

// Toggle true
export const toggleTrue = () => {
  return {
    type: TOGGLE_TRUE,
  };
};

// Toggle false
export const toggleFalse = () => {
  return {
    type: TOGGLE_FALSE,
  };
};
// Get Product By Categories
export const getProductByCategories = (categories) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/product/categorie/${categories}`);
    dispatch({
      type: GET_PRODUCT,
      payload: res.data.productToFind,
    });
  } catch (error) {
    console.log(error);
  }
};
