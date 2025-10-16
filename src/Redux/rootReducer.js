// src/redux/rootReducer.js
import { combineReducers } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import userReducer from "./userSlice";
import shirtReducer from "./shirtsSlice";
import pantsReducer from "./pantsSlice"; 
import jacketReducer from "./jacketSlice";

const rootReducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
  shirts: shirtReducer,
  pants: pantsReducer,
  jackets: jacketReducer
});

export default rootReducer;
