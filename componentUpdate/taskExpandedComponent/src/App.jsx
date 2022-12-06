import React, { Component } from "react";

import Expand from "./Expand";

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     isOpen: false,
  //   };

  //   this.toggleContent = this.toggleContent.bind(this);
  // }

  // toggleContent() {
  //   this.setState({
  //     isOpen: (this.state.isOpen = !this.state.isOpen),
  //   });
  // }
  render() {
    // const { isOpen } = this.state;
    return (
      <div className="app">
        <Expand title={"Some title"}>
          <p>
            Hooks are a new addition in React 16.8. They let you use state and
            other React features without writing a class.
          </p>
        </Expand>
      </div>
    );
  }
}

export default App;
