import React, { Component } from "react";

class Message extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.text) {
      return null;
    }
    return <div className="message">{this.props.text}</div>;
  }
}

export default Message;
