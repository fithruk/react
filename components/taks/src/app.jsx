import React from "react";
import Greetings from "./Greeting";
const App = () => {
  return (
    <Greetings
      firstName={"John"}
      lastName={"Doe"}
      birthDate={new Date("2001-01-01T11:11:11.819Z")}
    />
  );
};

export default App;
