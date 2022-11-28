import React, { Component } from "react";

class List extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul>
        {this.props.numbers.map((num) => (
          <li key={num + 1}>{num}</li>
        ))}
      </ul>
    );
  }
}

export default List;
