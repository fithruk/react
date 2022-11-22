import React from "react";

import Comment from "./Comment";

const user = {
  name: "Vasya",
  avatarUrl: "http://montessoriself.ru/wp-content/uploads/2014/09/STR8.jpg",
};

const App = () => {
  return <Comment author={user} text={"text"} date={"2017-01-01"} />;
};

export default App;
