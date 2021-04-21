import { combineReducers } from "redux";
import productReducer from "../Reducer/productReducer";
import userReducer from "./user";
import adminReducer from "./admin";

const rootReducer = combineReducers({
  productReducer,
  userReducer,
  adminReducer,
});

export default rootReducer;
