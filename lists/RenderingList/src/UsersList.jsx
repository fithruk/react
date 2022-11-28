import React, { Component } from "react";

import User from "./User";

class UsersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sort: null,
    };
  }

  onSort = () => {
    const newSort = this.state.sort === "asc" ? "dec" : "asc";
    this.setState({
      sort: newSort,
    });
  };

  render() {
    let listItems;
    if (this.state.sort) {
      listItems = this.props.users.slice().sort((a, b) => {
        return this.state.sort === "asc" ? a.age - b.age : b.age - a.age;
      });
    } else {
      listItems = this.props.users;
    }
    const textContent = !this.state.sort ? "-" : this.state.sort;
    return (
      <>
        <button className="btn" onClick={this.onSort}>
          {textContent}
        </button>
        <ul className="users">
          {listItems.map((user) => (
            <User name={user.name} age={user.age} key={user.id} />
          ))}
        </ul>
      </>
    );
  }
}

export default UsersList;
//.map((user) => <User name={user.name} age={user.age} key={user.id} />);
// .slice().sort((a, b) => {
//   this.state.sort === "asc" ? a.age - b.age : b.age - a.age;
// })
