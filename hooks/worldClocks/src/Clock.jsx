import React, { useState, useEffect } from "react";
import moment from "moment";

import "./Clock.scss";

const getTimeWithOffset = (offset) => {
  const currentTime = new Date();
  const utcOffset = currentTime.getTimezoneOffset() / 60;
  return new Date(
    currentTime.setHours(currentTime.getHours() + offset + utcOffset)
  );
};

const Clock = (props) => {
  const [{ location, time }, setState] = useState({
    location: props.location,
    time: moment(getTimeWithOffset(props.offset)).format("LTS"),
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setState({
        ...location,
        time: moment(getTimeWithOffset(props.offset)).format("LTS"),
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [props]);

  return (
    <div className="clock">
      <div className="clock__location">{location}</div>
      <div className="clock__time">{time}</div>
    </div>
  );
};
export default Clock;
