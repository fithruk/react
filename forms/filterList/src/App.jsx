import React, { Component } from "react";
import Filter from "./Filter";

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      value: "",
      count: 0,
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.getCount = this.getCount.bind(this);
  }

  onChangeHandler(e) {
    this.setState({
      value: e.target.value.toLowerCase(),
    });
  }

  getCount(count) {
    console.log(count);
  }

  render() {
    return (
      <Filter
        filterText={this.state.value}
        onChange={this.onChangeHandler}
        getCount={this.getCount}
        count={this.state.count}
      />
    );
  }
}

export default App;
