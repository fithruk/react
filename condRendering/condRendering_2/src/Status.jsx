import React, { Component } from "react";

import Offline from "./Offline";
import Online from "./Online";

class Status extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOnline: false,
    };
  }

  render() {
    return this.state.isOnline ? <Online /> : <Offline />;
  }
}

export default Status;
