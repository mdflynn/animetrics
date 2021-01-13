import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { MemoryRouter } from "react-router-dom";

const router = (
  <MemoryRouter>
    <App />
  </MemoryRouter>
);

ReactDOM.render(router, document.getElementById("root"));
