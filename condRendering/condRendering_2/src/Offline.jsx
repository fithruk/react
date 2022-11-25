import React, { Component } from "react";

class Offline extends Component {
  render() {
    return (
      <div className="status">
        <span className="status__text">Offline</span>
        <button className="status__btn">Reconnect</button>
      </div>
    );
  }
}

export default Offline;
