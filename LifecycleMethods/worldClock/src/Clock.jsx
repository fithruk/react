import React, { Component } from "react";
import moment from "moment";

import "./Clock.scss";

const getTimeWithOffset = (offset) => {
  const currentTime = new Date();
  const utcOffset = currentTime.getTimezoneOffset() / 60;
  return new Date(
    currentTime.setHours(currentTime.getHours() + offset + utcOffset)
  );
};

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: props.location,
      time: moment(getTimeWithOffset(this.props.offset)).format("LTS"),
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        time: moment(getTimeWithOffset(this.props.offset)).format("LTS"),
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="clock">
        <div className="clock__location">{this.state.location}</div>
        <div className="clock__time">{this.state.time}</div>
      </div>
    );
  }
}

export default Clock;
