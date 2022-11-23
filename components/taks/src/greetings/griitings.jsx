import React from "react";

const Greetings = (props) => {
  const { name, sername, birthday } = props;
  const age = new Date().getFullYear() - new Date(birthday).getFullYear();
  return (
    <div className="greeting">
      My name is {name} {sername}. I'm {age} years old
    </div>
  );
};

export default Greetings;
