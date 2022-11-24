import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };

    this.dec = this.dec.bind(this);
  }

  inc = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  dec() {
    this.setState({
      counter: this.state.counter - 1,
    });
  }

  res = () => {
    this.setState({
      counter: 0,
    });
  };

  render() {
    return (
      <div className="counter">
        <button
          data-action="decrease"
          className="counter__button"
          onClick={this.dec}
        >
          -
        </button>
        <span className="counter__value" onClick={() => this.res()}>
          {this.state.counter}
        </span>
        <button
          data-action="increase"
          className="counter__button"
          onClick={this.inc}
        >
          +
        </button>
      </div>
    );
  }
}

export default Counter;
