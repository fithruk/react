import React, { Component } from "react";

class EvenNumbers extends Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.number % 2 === 0 && true;
  }

  render() {
    const { title, number } = this.props;
    return (
      <div className="number">
        <span className="number__title">{title}</span>
        <span className="number__value">{number}</span>
      </div>
    );
  }
}

export default EvenNumbers;
