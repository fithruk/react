import React, { Component } from "react";

class Numbers extends Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps) {
    if (
      this.props.number === nextProps.number &&
      this.props.title === nextProps.number
    ) {
      return false;
    } else {
      return true;
    }
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

export default Numbers;
