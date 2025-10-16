// src/Redux/rootReducer.js
import { combineReducers } from "@reduxjs/toolkit"; // ✅ Import combineReducers

// ✅ Import all your slice reducers
import cartReducer from "./cartSlice";
import userReducer from "./userSlice";

import shirtReducer from "./shirtsSlice";
import pantsReducer from "./pantsSlice"; 
import jacketReducer from "./jacketSlice";

import shirtsReducer from "./shirtsSlice";
import pantsReducer from "./pantsSlice";
import tshirtsReducer from "./tshirtsSlice";
import sweatersReducer from "./sweaterSlice";
import shortsReducer from "./shortsSlice";
import jeansReducer from "./jeansSlice"; // If you added jeansSlice


// ✅ Combine reducers
const rootReducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
  shirts: shirtsReducer,
  pants: pantsReducer,
  jackets: jacketReducer,
  tshirts: tshirtsReducer,
  sweaters: sweatersReducer,
  shorts: shortsReducer,
  jeans: jeansReducer, // If using jeans
});

export default rootReducer;
