import React, { Component } from "react";

class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      student: "",
      occupation: "",
      about: "",
    };

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(e) {
    const { type, value, name, checked } = e.target;

    const val = type === "checkbox" ? checked : value;
    this.setState({
      [name]: val,
    });
  }

  render() {
    return (
      <form
        className="login-form"
        onSubmit={(e) => {
          e.preventDefault();
          this.props.onSubmit(this.state);
        }}
      >
        <h1 className="form-title">Profile</h1>
        <div className="form-control">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input
            onChange={this.onInputChange}
            className="form-input"
            type="text"
            id="name"
            name="name"
            value={this.state.name}
          />
        </div>
        <div className="form-control">
          <label className="form-label" htmlFor="student">
            Student
          </label>
          <input
            onChange={this.onInputChange}
            className="form-input"
            type="checkbox"
            id="student"
            name="student"
            value={this.state.student}
          />
        </div>
        <div className="form-control">
          <label className="form-label" id="occupation" htmlFor="occupation">
            Occupation
          </label>
          <select
            name="occupation"
            className="form-input"
            value={this.state.occupation}
            onChange={this.onInputChange}
          >
            <option value="london">London</option>
            <option value="new-york">New York</option>
            <option value="Sidney">Sidney</option>
            <option value="Berlin">Berlin</option>
          </select>
        </div>
        <div className="form-control">
          <label className="form-label" id="about" htmlFor="about">
            About
          </label>
          <textarea
            name="about"
            className="form-input"
            value={this.state.about}
            onChange={this.onInputChange}
          ></textarea>
        </div>
        <button className="submit-button" type="submit">
          Submit
        </button>
      </form>
    );
  }
}

export default UserForm;
