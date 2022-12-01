import React, { Component } from "react";
import User from "./User";

class UsersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.filterArr = this.filterArr.bind(this);
  }

  filterArr(arr, text) {
    if (text === "") {
      return arr.slice();
    } else {
      return arr.filter((user) => user.name.indexOf(text.toLowerCase()) > -1);
    }
  }

  render() {
    const { users, text, getCount } = this.props;
    const newArr = this.filterArr(users, text);

    return (
      <ul className="users">
        {newArr.map(({ name, age, key }) => (
          <User name={name} age={age} key={key} />
        ))}
      </ul>
    );
  }
}

export default UsersList;
