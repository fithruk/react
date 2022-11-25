import React, { Component } from "react";

class Spinner extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <span
        style={{ width: this.props.size, height: this.props.size }}
        className="spinner"
      ></span>
    );
  }
}

export default Spinner;
