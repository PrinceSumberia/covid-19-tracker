import React, { Component } from "react";

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleQuery(this.state.location);
    this.setState({ location: "" });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="location"
          type="text"
          value={this.state.location}
          placeholder="Enter any location"
          onChange={this.handleChange}
          required
        />
        <button>Get Help</button>
      </form>
    );
  }
}
