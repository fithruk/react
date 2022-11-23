import React from "react";
import moment from "moment";

const Profile = (props) => {
  const { firstName, lastName, birthDate, birthPlace } = props.userData;

  return (
    <div className="wrapper">
      <span className="profile__name">
        {firstName} {lastName}
      </span>
      <div className="profile__birth">
        Was born {moment(birthDate).format("DD MMM YY")} in {birthPlace}
      </div>
    </div>
  );
};

export default Profile;
