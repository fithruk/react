import React from "react";
import Greetings from "./greetings/Griitings";
const App = () => {
  return (
    <Greetings
      name={"John"}
      sername={"Doe"}
      birthday={new Date("2001-01-01T11:11:11.819Z")}
    />
  );
};

export default App;
