import React from "react";
import ReactDOM from "react-dom";
import "./styles.scss";
import Comment from "./Comments";
const root = document.querySelector("#root");

const user = {
  name: "Vasya",
  avatarUrl: "http://montessoriself.ru/wp-content/uploads/2014/09/STR8.jpg",
};

ReactDOM.render(
  <Comment user={user} text={"text"} date={"2017-01-01"} />,
  root
);
