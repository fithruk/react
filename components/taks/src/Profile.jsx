import React from "react";
import moment from "moment";

const Profile = (props) => {
  const { firstName, lastName, birthDate, birthPlace } = props.userData;

  return (
    <div className="profile__birth">
      <span className="profile__name">
        {firstName} {lastName}
      </span>
      Was born {moment(birthDate).format("DD MMM YY")} in {birthPlace}
    </div>
  );
};

export default Profile;
