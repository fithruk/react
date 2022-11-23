import React from "react";
import Greetings from "./Greeting";
import Profile from "./Profile";

const userData = {
  firstName: "James",
  lastName: "Bond",
  birthDate: "1991-01-17T11:11:11.819Z",
  birthPlace: "London",
};

const App = () => {
  return <Profile userData={userData} />;
};

export default App;
