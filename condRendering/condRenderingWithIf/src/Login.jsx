import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <button className="btn login" onClick={this.props.onLogin}>
        Login
      </button>
    );
  }
}

export default Login;
