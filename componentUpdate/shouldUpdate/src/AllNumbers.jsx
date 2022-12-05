import React, { Component } from "react";

class AllNumbers extends Component {
  constructor(props) {
    super(props);
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

export default AllNumbers;
