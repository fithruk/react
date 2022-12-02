import React, { Component } from "react";

import User from "./User";
import Filter from "./Filter";

class UsersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      text: "",
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({
      text: e.target.value.toLowerCase(),
    });
  }

  componentDidMount() {
    this.setState({
      users: this.props.users,
    });
  }

  render() {
    const arr = this.state.users
      .filter(
        (user) =>
          user.name.toLowerCase().indexOf(this.state.text.toLowerCase()) > -1
      )
      .map(({ name, age, key }) => <User name={name} age={age} key={key} />);
    return (
      <>
        <Filter
          filterText={this.state.text}
          count={arr.length}
          onChange={this.onChange}
        />
        <ul className="users">{arr}</ul>
      </>
    );
  }
}

export default UsersList;
