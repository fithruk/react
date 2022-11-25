import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <button onClick={this.props.onLogin} className="btn login">
        Login
      </button>
    );
  }
}

export default Login;
