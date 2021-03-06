import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App/App";
import {BrowserRouter} from "react-router-dom";

jest.mock("react-dom", () => ({ render: jest.fn() }));

describe("Application root", () => {
  it("should render without crashing", () => {
    const div = document.createElement("div");
    div.id = "root";
    document.body.appendChild(div);
    require("./index.js");
    const router = <BrowserRouter><App /></BrowserRouter>
    expect(ReactDOM.render).toHaveBeenCalledWith(router, div);
  });
});