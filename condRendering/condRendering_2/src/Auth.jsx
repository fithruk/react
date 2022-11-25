import React, { Component } from "react";
import Login from "./Login";
import Logout from "./Logout";
import Spinner from "./Spinner";

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedin: false,
      spinner: false,
    };
  }

  onLogin = () => {
    this.setState({
      isLoggedin: (this.state.isLoggedin = true),
    });
    this.changeSpinner();
  };

  onLogout = () => {
    this.setState({
      isLoggedin: (this.state.isLoggedin = false),
    });
    // this.changeSpinner();
  };

  changeSpinner = () => {
    this.setState({
      spinner: (this.state.spinner = !this.state.spinner),
    });
    setTimeout(() => {
      this.setState({
        spinner: (this.state.spinner = !this.state.spinner),
      });
    }, 2000);
  };

  render() {
    return this.state.isLoggedin ? (
      this.state.spinner ? (
        <Spinner size={"30px"} />
      ) : (
        <Logout onLogout={this.onLogout} />
      )
    ) : (
      <Login onLogin={this.onLogin} />
    );
  }
}

export default Auth;
