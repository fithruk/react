import React from "react";
import Clock from "./Clock";

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
