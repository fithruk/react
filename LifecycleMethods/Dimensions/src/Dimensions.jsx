import React, { Component } from "react";

class Dimensions extends Component {
  constructor(props) {
    super();
    this.state = {
      innerWidth: null,
      innerHeight: null,
    };

    this.resize = this.resize.bind(this);
  }

  componentDidMount() {
    this.resize();
  }

  resize() {
    const { innerWidth, innerHeight } = window;
    this.setState({
      innerWidth,
      innerHeight,
    });
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.resize);
  }

  render() {
    document.title = `${this.state.innerWidth}px - ${this.state.innerHeight}px`;
    window.addEventListener("resize", this.resize);
    return (
      <div className="dimensions">
        {this.state.innerWidth}px - {this.state.innerHeight}px
      </div>
    );
  }
}

export default Dimensions;
