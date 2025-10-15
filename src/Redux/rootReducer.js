// src/redux/rootReducer.js
import { combineReducers } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import userReducer from "./userSlice";
import shirtReducer from "./shirtsSlice"

const rootReducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
  shirts: shirtReducer
});

export default rootReducer;
