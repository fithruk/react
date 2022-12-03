import React, { Component } from "react";

import ShoppingCart from "./ShoppingCart";
import Profile from "./Profile";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: {
        firstName: "Vasya",
        lastName: "Pupkin",
      },
    };

    this.onChangeNameHandler = this.onChangeNameHandler.bind(this);
  }

  onChangeNameHandler(e) {
    console.log(e.target.value);
    const { name, value } = e.target;
    this.setState({
      userData: {
        ...this.state.userData,
        [name]: value,
      },
    });
  }

  render() {
    return (
      <div className="page">
        <main className="content">
          <ShoppingCart userName={this.state.userData} />
          <Profile
            userData={this.state.userData}
            onChange={this.onChangeNameHandler}
          />
        </main>
      </div>
    );
  }
}

export default App;
