import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";

const element = (
  <div className="greeting">
    <div className="greeting__title">Hello, world!</div>
    <div className="greeting__text">I'm learning React</div>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(element);
