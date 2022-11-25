import React, { Component } from "react";
import Message from "./Message";

const text1 = "Hello, world!";
const text2 = "Another exciting text.";
const text3 = "";

class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: null,
    };
  }

  onClickHandler = (text) => {
    this.setState({
      text: (this.state.text = text),
    });
  };

  render() {
    return (
      <div className="page">
        <Message text={this.state.text} />
        <div className="actions">
          <button className="btn" onClick={() => this.onClickHandler(text1)}>
            Text1
          </button>
          <button className="btn" onClick={() => this.onClickHandler(text2)}>
            Text2
          </button>
          <button className="btn" onClick={() => this.onClickHandler(text3)}>
            Clear
          </button>
        </div>
      </div>
    );
  }
}

export default Page;
