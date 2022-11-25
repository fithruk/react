import React, { Component } from "react";

class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
    this.onMouseMoveHandle = this.onMouseMoveHandle.bind(this);
    this.reset = this.reset.bind(this);
  }

  onMouseMoveHandle(color) {
    this.setState({
      text: (this.state.text = color),
    });
  }

  reset() {
    this.setState({
      text: (this.state.text = ""),
    });
  }
  render() {
    return (
      <div>
        <div className="picker__title">{this.state.text}</div>
        <div>
          <button
            onMouseEnter={() => this.onMouseMoveHandle("Coral")}
            onMouseLeave={this.reset}
            data-color="Coral"
            className="picker__button picker__button_coral"
          ></button>
          <button
            onMouseEnter={() => this.onMouseMoveHandle("Aqua")}
            onMouseLeave={this.reset}
            data-color="Aqua"
            className="picker__button picker__button_aqua"
          ></button>
          <button
            onMouseEnter={() => this.onMouseMoveHandle("Bisque")}
            onMouseLeave={this.reset}
            data-color="Bisque"
            className="picker__button picker__button_bisque"
          ></button>
        </div>
      </div>
    );
  }
}

export default ColorPicker;
