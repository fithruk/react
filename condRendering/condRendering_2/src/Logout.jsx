import React, { Component } from "react";

class Logout extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <button onClick={this.props.onLogout} className="btn logout">
        Logout
      </button>
    );
  }
}

export default Logout;
