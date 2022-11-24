import React, { Component } from "react";

class GoodButton extends Component {
  showAlert(e) {
    alert(e.target.textContent);
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
