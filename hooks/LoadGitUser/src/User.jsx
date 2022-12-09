import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users";

const User = ({ match: { params } }) => {
  const [user, setUser] = useState(null);

  const fetchUser = async (url, user) => {
    const res = await fetch(`${url}/${user}`);
    return res.ok && (await res.json());
  };

  const getUser = async () => {
    try {
      const userData = await fetchUser(url, params.USER_ID);
      setUser(userData);
    } catch (error) {
      throw new Error(error);
    }
  };

  useEffect(() => {
    getUser();
  }, [params.USER_ID]);

  if (!user) return null;
  const { avatar_url, name, location } = user;
  return (
    <div className="user">
      <img alt="User Avatar" src={avatar_url} className="user__avatar" />
      <div className="user__info">
        <span className="user__name">{name}</span>
        <span className="user__location">{location}</span>
      </div>
    </div>
  );
};

export default User;
