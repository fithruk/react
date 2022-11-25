import React, { Component } from "react";

import Offline from "./Offline";
import Online from "./Online";

class Componenta extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return this.props.isOnline ? <Online /> : <Offline />;
  }
}

export default Componenta;
