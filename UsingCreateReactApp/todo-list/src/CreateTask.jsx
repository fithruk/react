import React, { Component } from "react";

class CreateTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
    this.onChangetaskValue = this.onChangetaskValue.bind(this);
  }

  onChangetaskValue(e) {
    const value = e.target.value;
    this.setState({
      value,
    });
    this.onChangevalue = this.onChangevalue.bind(this);
  }

  onChangevalue() {
    this.props.addNewTask(this.state.value);
    this.setState({
      value: "",
    });
  }

  render() {
    const { value } = this.state;
    return (
      <div className="create-task">
        <input
          className="create-task__input"
          type="text"
          value={value}
          onChange={this.onChangetaskValue}
        />
        <button className="btn create-task__btn" onClick={this.onChangevalue}>
          Create
        </button>
      </div>
    );
  }
}

export default CreateTask;
