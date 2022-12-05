import React, { Component } from "react";
import Numbers from "./Numbers";
import EvenNumbers from "./EvenNumbers";
import OddNumbers from "./OddNumbers";
import AllNumbers from "./AllNumbers";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
    };

    this.increaseCounter = this.increaseCounter.bind(this);
  }

  increaseCounter() {
    this.interval = setInterval(() => {
      this.setState({
        number: this.state.number + 1,
      });
    }, 1000);
  }

  componentDidMount() {
    this.increaseCounter();
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { number } = this.state;
    console.log(number);
    return (
      <div className="app">
        <OddNumbers title={"Odd numbers"} number={number} />
        <EvenNumbers title={"Even numbers"} number={number} />
        <AllNumbers title={"All numbers"} number={number} />
        <Numbers title={"Just 17"} number={17} />
      </div>
    );
  }
}

export default App;
