import React, { Component } from "react";

class GoodButton extends Component {
  showAlert() {
    alert("Good job!");
  }
  render() {
    return (
      <button onClick={this.showAlert} className="fancy-button">
        Click Me!
      </button>
    );
  }
}

export default GoodButton;
