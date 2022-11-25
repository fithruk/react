import React, { Component } from "react";
import Spinner from "./Spinner";

class Logout extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return this.props.spinner ? (
      <Spinner size={"30px"} />
    ) : (
      <button onClick={this.props.onLogout} className="btn logout">
        Logout
      </button>
    );
  }
}

export default Logout;
