import React, { Component } from "react";

class Search extends Component {
  constructor(props) {
    super();
    this.state = {
      value: "",
    };
    this.onChangeInput = this.onChangeInput.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChangeInput(e) {
    this.setState({
      value: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    alert(`Search text: ${this.state.value}`);
  }
  render() {
    return (
      <form className="search" onSubmit={this.onSubmit}>
        <input
          type="text"
          className="search__input"
          onChange={this.onChangeInput}
          value={this.state.value}
        />
        <button className="search__button" type="submit">
          Search
        </button>
      </form>
    );
  }
}

export default Search;
