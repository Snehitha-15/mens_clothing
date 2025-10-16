// src/Redux/rootReducer.js
import { combineReducers } from "@reduxjs/toolkit";

import cartReducer from "./cartSlice";
import userReducer from "./userSlice";

import shirtsReducer from "./shirtsSlice";
import pantsReducer from "./pantsSlice";
import jacketsReducer from "./jacketSlice";
import tshirtsReducer from "./tshirtsSlice";
import sweatersReducer from "./sweaterSlice";
import shortsReducer from "./shortsSlice";
import jeansReducer from "./jeansSlice";
import sweatshirtsReducer from "./sweatshirtSlice";
import suitsReducer from "./suitSlice"; // ✅ new

const rootReducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
  shirts: shirtsReducer,
  pants: pantsReducer,
  jackets: jacketsReducer,
  tshirts: tshirtsReducer,
  sweaters: sweatersReducer,
  shorts: shortsReducer,
  jeans: jeansReducer,
  sweatshirts: sweatshirtsReducer,
  suits: suitsReducer, // ✅ new
});

export default rootReducer;
