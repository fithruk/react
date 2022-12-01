import React, { Component } from "react";
import UsersList from "./UsersList";

const users = [
  { name: "Vasya", age: 23, key: 1 },
  { name: "Petya", age: 13, key: 2 },
  { name: "Jenya", age: 33, key: 3 },
  { name: "Ivan", age: 43, key: 4 },
  { name: "Adolf", age: 43, key: 5 },
  { name: "Iosif", age: 63, key: 6 },
  { name: "Serenya", age: 31, key: 7 },
  { name: "Vanish", age: 33, key: 8 },
  { name: "Vasiok", age: 23, key: 9 },
];

class Filter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div className="filter">
          <span className="filter__count">{this.props.count}</span>
          <input
            type="text"
            className="filter__input"
            value={this.props.filterText}
            onChange={this.props.onChange}
          />
        </div>
        <UsersList
          users={users}
          text={this.props.filterText}
          getCount={this.props.getCount}
        />
      </>
    );
  }
}

export default Filter;
