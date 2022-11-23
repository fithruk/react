import React from "react";
import Greetings from "./Greeting";
import Profile from "./Profile";
import Counter from "./Counter";
import Clock from "./Clock";

const userData = {
  firstName: "James",
  lastName: "Bond",
  birthDate: "1991-01-17T11:11:11.819Z",
  birthPlace: "London",
};

const App = () => {
  return (
    <>
      <Clock location={"New york"} offset={-5} />
      <Clock location={"Kiyv"} offset={2} />
      <Clock location={"London"} offset={0} />
    </>
  );
};

export default App;
