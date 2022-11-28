import React from "react";
import List from "./List";

const numbers = [1, 2, 3, 4, 5, 6, 7];

const App = () => {
  return (
    <div>
      <List numbers={numbers} />
    </div>
  );
};

export default App;
