import React, { Component } from "react";
import Transaction from "./Transaction";

class TransactionsList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const transactionArr = this.props.transactions.slice();
    return (
      <ul className="transactions">
        {transactionArr.map((transaction) => (
          <Transaction {...transaction} key={transaction.id} />
        ))}
      </ul>
    );
  }
}

export default TransactionsList;
