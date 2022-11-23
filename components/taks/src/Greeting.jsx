import React from "react";

const Greetings = (props) => {
  const { firstName, lastName, birthDate } = props;
  const age = new Date().getFullYear() - new Date(birthDate).getFullYear();
  return (
    <div className="greeting">
      My name is {firstName} {lastName}. I'm {age} years old
    </div>
  );
};

export default Greetings;
