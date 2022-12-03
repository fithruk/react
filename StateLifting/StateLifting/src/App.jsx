import React, { Component } from "react";
import UserProfile from "./UserProfile";
import UserMenu from "./UserMenu";

const link = `https://api.github.com/users/`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      location: null,
      avatar_url: null,
    };
  }

  componentDidMount() {
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
    return (
      <div className="page">
        <header className="header">
          <UserMenu userData={this.state} />
        </header>
        <UserProfile userData={this.state} />
      </div>
    );
  }
}
export default App;
