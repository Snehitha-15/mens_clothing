import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./Redux/store"; 
import AppRoutes from "./Router/AppRoutes";
import "bootstrap/dist/css/bootstrap.min.css";

console.log("Redux Store:", store);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
