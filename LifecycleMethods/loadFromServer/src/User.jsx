import React, { Component } from "react";

const link = `https://api.github.com/users/`;

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      location: null,
      avatar_url: null,
    };
  }

  componentDidMount() {
    console.log(this.props.userId);
    this.fetchData(this.props.userId);
  }

  fetchData(name) {
    fetch(`${link}${name}`)
      .then((user) => user.json())
      .then(({ name, location, avatar_url }) =>
        this.setState({
          name,
          location,
          avatar_url,
        })
      );
  }

  render() {
    if (!this.state.name) {
      return null;
    } else {
      return (
        <div className="user">
          <img
            alt="User Avatar"
            src={this.state.avatar_url}
            className="user__avatar"
          />
          <div className="user__info">
            <span className="user__name">{this.state.name}</span>
            <span className="user__location">{this.state.location}</span>
          </div>
        </div>
      );
    }
  }
}

export default User;
