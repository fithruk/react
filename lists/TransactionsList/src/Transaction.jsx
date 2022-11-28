import React, { Component } from "react";
import moment from "moment";

const numFormat = (num) => {
  return new Intl.NumberFormat("en-GB").format(num);
};

class Transaction extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { from, to, amount, rate, time } = this.props;

    return (
      <li className="transaction">
        <span className="transaction__date">
          {moment(new Date(time)).format("D MMM")}
        </span>
        <span className="transaction__time">
          {moment(new Date(time)).format("H : mm")}
        </span>
        <span className="transaction__assets">
          {from} → {to}
        </span>
        <span className="transaction__rate">{numFormat(rate)}</span>
        <span className="transaction__amount">{numFormat(amount)}</span>
      </li>
    );
  }
}

export default Transaction;
