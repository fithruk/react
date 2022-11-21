import "./styles.css";
import React from "react";
import RactDOM from "react-dom";

const root = document.querySelector("#root");

const renderSeconds = (time) => {
  const seconds = new Date(time).getSeconds();

  const backgroundColor = seconds % 2 === 0 ? "white" : "black";
  const textColor = seconds % 2 !== 0 ? "white" : "black";

  const styles = {
    color: textColor,
    backgroundColor,
  };

  const element = (
    <div className="seconds" style={styles}>
      {seconds}
    </div>
  );

  ReactDOM.render(element, root);
};

renderSeconds(new Date());

setInterval(renderSeconds(new Date()), 1000);
