import React, { Component } from "react";

import Componenta from "./Componenta";
class Status extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOnline: true,
    };
  }

  render() {
    return <Componenta isOnline={this.state.isOnline} />;
  }
}

export default Status;
