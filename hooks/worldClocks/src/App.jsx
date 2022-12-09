import React, { useState } from "react";
import Clock from "./Clock";

const App = () => {
  const [visible, setVisible] = useState(true);

  const toggle = () => {
    setVisible((visible) => (visible = !visible));
  };

  if (visible) {
    return (
      <>
        <button onClick={toggle}>Remove Clocks</button>
        <Clock location={"New york"} offset={-5} />
        <Clock location={"Kiyv"} offset={2} />
        <Clock location={"London"} offset={0} />
      </>
    );
  } else {
    return <button onClick={toggle}>Remove Clocks</button>;
  }
};

export default App;
