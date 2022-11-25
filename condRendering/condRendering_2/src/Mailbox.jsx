import React, { Component } from "react";

class Mailbox extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const count = this.props.unreadMessages.length > 0 && (
      <span className="mailbox__count">{this.props.unreadMessages.length}</span>
    );
    return (
      <div className="mailbox">
        <span className="mailbox__text">Messages</span>
        {count}
      </div>
    );
  }
}

export default Mailbox;
