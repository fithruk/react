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
    window.addEventListener("resize", this.resize);
    document.title = `${innerWidth}px - ${innerHeight}px`;
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.resize);
  }

  render() {
    return (
      <div className="dimensions">
        {this.state.innerWidth}px - {this.state.innerHeight}px
      </div>
    );
  }
}

export default Dimensions;
