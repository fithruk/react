import React, { Component } from "react";

class UserMenu extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (!this.props.userData) {
      return null;
    } else {
      return (
        <div className="menu">
          <span className="menu__greeting">
            Hello, {this.props.userData.name}
          </span>
          <img
            alt="User Avatar"
            src={this.props.userData.avatar_url}
            className="menu__avatar"
          />
        </div>
      );
    }
  }
}

export default UserMenu;
