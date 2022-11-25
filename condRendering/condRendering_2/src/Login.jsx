import React, { Component } from "react";
import Spinner from "./Spinner";
class Login extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props.spinner);
    return this.props.spinner ? (
      <Spinner size={"30px"} />
    ) : (
      <button onClick={this.props.onLogin} className="btn login">
        Login
      </button>
    );
  }
}

export default Login;
