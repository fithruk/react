import React, { Component } from "react";

const red = "red";
const blue = "blue";
const green = "green";

class Colors extends Component {
  constructor(props) {
    super(props);
  }

  setBodyColor(color) {
    document.body.style.backgroundColor = color;
  }

  render() {
    return (
      <div className="colors">
        <button
          style={{ backgroundColor: red }}
          className="colors__button"
          onClick={() => this.setBodyColor(red)}
        ></button>
        <button
          style={{ backgroundColor: green }}
          className="colors__button"
          onClick={() => this.setBodyColor(green)}
        ></button>
        <button
          style={{ backgroundColor: blue }}
          className="colors__button"
          onClick={() => this.setBodyColor(blue)}
        ></button>
      </div>
    );
  }
}

export default Colors;
