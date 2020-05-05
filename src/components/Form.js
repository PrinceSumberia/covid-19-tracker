import React, { Component } from "react";

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      area: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ area: "" });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <p>{this.state.area}</p>
        <input
          name="area"
          type="text"
          value={this.state.area}
          placeholder="Enter any area"
          onChange={this.handleChange}
        />
        <button>Get Help</button>
      </form>
    );
  }
}
