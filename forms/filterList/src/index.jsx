import React from "react";
import ReactDom from "react-dom";
import "./index.scss";

import UsersList from "./UsersList";

const root = document.querySelector("#root");

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

ReactDom.render(<UsersList users={users} />, root);
