import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import CartItemsState from "./Context/CartContext/CartItemsState";
import { ToastProvider } from "react-toast-notifications";
import AuthState from "./Context/AuthContext/AuthState";


ReactDOM.render(
  <ToastProvider>
    <AuthState>
      <CartItemsState>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CartItemsState>
    </AuthState>
  </ToastProvider>,
  document.getElementById("root")
);
