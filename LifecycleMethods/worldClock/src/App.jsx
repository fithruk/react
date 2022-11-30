import React, { Component } from "react";
import Clock from "./Clock";

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      visible: true,
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      visible: (this.state.visible = !this.state.visible),
    });
  }

  render() {
    if (this.state.visible) {
      return (
        <>
          <button onClick={this.toggle}>Remove Clocks</button>
          <Clock location={"New york"} offset={-5} />
          <Clock location={"Kiyv"} offset={2} />
          <Clock location={"London"} offset={0} />
        </>
      );
    } else {
      return <button onClick={this.toggle}>Remove Clocks</button>;
    }
  }
}

export default App;
