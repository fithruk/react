import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
const root = document.querySelector("#root");

const element = (
  <div className="greeting">
    <div className="greeting__title">Hello, world!</div>
    <div className="greeting__text">I'm learning react</div>
  </div>
);

ReactDOM.render(element, root);
