import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";

import styles from "../styles/FormStyles";

class Form extends Component {
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
    this.setState({ location: "" }, this.props.handleLoading);
  }

  render() {
    const { classes } = this.props;
    return (
      <form onSubmit={this.handleSubmit} className={classes.form}>
        <input
          className={classes.input}
          name="location"
          type="text"
          value={this.state.location}
          placeholder="Enter any location"
          onChange={this.handleChange}
          required
        />
        <button className={classes.btn}>Search</button>
      </form>
    );
  }
}

export default withStyles(styles)(Form);
