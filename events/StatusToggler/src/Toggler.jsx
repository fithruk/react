import React, { Component } from "react";

class Toggler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: false,
    };

    this.toggleBtn = this.toggleBtn.bind(this);
  }

  toggleBtn() {
    this.setState({
      text: (this.state.text = !this.state.text),
    });
  }

  render() {
    const toggle = this.state.text === true ? "On" : "Off";
    return (
      <button className="toggler" onClick={this.toggleBtn}>
        {toggle}
      </button>
    );
  }
}

export default Toggler;
