import React from "react";
import Greetings from "./Greeting";
import Profile from "./Profile";
import Counter from "./Counter";

const userData = {
  firstName: "James",
  lastName: "Bond",
  birthDate: "1991-01-17T11:11:11.819Z",
  birthPlace: "London",
};

const App = () => {
  return (
    <>
      <Counter start={17} interval={1000} />
      <Counter start={1} interval={1000} />
      <Counter start={2} interval={1000} />
    </>
  );
};

export default App;
