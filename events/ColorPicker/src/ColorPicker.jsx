import React, { Component } from "react";

class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
    this.onMouseMoveHandle = this.onMouseMoveHandle.bind(this);
  }

  onMouseMoveHandle(e) {
    if (e.target.closest(".picker__button")) {
      this.setState({
        text: (this.state.text = e.target.dataset.color),
      });
    } else {
      this.setState({
        text: (this.state.text = ""),
      });
    }
  }
  render() {
    return (
      <div onMouseMove={this.onMouseMoveHandle}>
        <div className="picker__title">{this.state.text}</div>
        <div>
          <button
            data-color="Coral"
            className="picker__button picker__button_coral"
          ></button>
          <button
            data-color="Aqua"
            className="picker__button picker__button_aqua"
          ></button>
          <button
            data-color="Bisque"
            className="picker__button picker__button_bisque"
          ></button>
        </div>
      </div>
    );
  }
}

export default ColorPicker;
