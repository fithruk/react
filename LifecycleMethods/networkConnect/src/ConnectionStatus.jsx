import React, { Component } from "react";

class ConnectionStatus extends Component {
  constructor(props) {
    super();
    this.state = {
      status: "online",
    };

    this.onCheckStatus = this.onCheckStatus.bind(this);
    this.setOnline = this.setOnline.bind(this);
    this.setOffline = this.setOffline.bind(this);
  }

  componentDidMount() {
    this.onCheckStatus();
  }

  setOnline() {
    if (navigator.onLine) {
      this.setState({
        status: "online",
      });
    }
  }

  setOffline() {
    if (!navigator.onLine) {
      this.setState({
        status: "offline",
      });
    }
  }

  onCheckStatus() {
    window.addEventListener("online", this.setOnline);
    window.addEventListener("offline", this.setOffline);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.status !== nextState;
  }

  componentWillUnmount() {
    window.removeEventListener("online", this.setOnline);
    window.removeEventListener("Offline", this.setOffline);
  }
  render() {
    const classNames =
      this.state.status === "online" ? "status" : "status status_offline";
    return <div className={classNames}>{this.state.status}</div>;
  }
}

export default ConnectionStatus;
