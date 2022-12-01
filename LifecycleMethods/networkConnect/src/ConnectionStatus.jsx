import React, { Component } from "react";

class ConnectionStatus extends Component {
  constructor(props) {
    super();
    this.state = {
      status: "online",
    };

    // this.onCheckStatus = this.onCheckStatus.bind(this);
    // this.setOnline = this.setOnline.bind(this);
  }

  componentDidMount() {}

  setOnline() {
    this.setState({
      status: "online",
    });
  }

  setOffline() {
    this.setState({
      status: "Offline",
    });
  }

  onCheckStatus() {
    window.addEventListener("online", this.setOnline);
    window.addEventListener("Offline", this.setOffline);
  }

  componentWillUnmount() {
    window.removeEventListener("online", this.setOnline);
    window.removeEventListener("Offline", this.setOffline);
  }
  render() {
    const classNames =
      this.state.status === "online" ? "status" : "status_offline";
    return <div className={classNames}>{this.state.status}</div>;
  }
}

export default ConnectionStatus;
