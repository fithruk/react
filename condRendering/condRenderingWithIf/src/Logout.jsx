import React, { Component } from "react";

class Logout extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <button className="btn logout" onClick={this.props.onLogout}>
        Logout
      </button>
    );
  }
}

export default Logout;
