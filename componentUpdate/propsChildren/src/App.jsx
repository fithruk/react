import React, { Component } from "react";

import Dialog from "./Dialog";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };

    this.toggleDialog = this.toggleDialog.bind(this);
  }

  toggleDialog() {
    this.setState({
      isOpen: (this.state.isOpen = !this.state.isOpen),
    });
  }

  render() {
    const { isOpen } = this.state;
    const btnContent = !isOpen ? "Show dialog" : "Close dialog";
    return (
      <div class="app">
        <button class="btn" onClick={this.toggleDialog}>
          {btnContent}
        </button>
        <Dialog
          title={"Recommendation"}
          isOpen={isOpen}
          onClose={this.toggleDialog}
        >
          <p>
            Use immutable array methods to work with data. It will help to avoid
            bugs
          </p>
        </Dialog>
      </div>
    );
  }
}

export default App;
