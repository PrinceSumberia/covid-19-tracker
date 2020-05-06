import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import styles from "../styles/HelpStyles";
import Form from "./Form";
import axios from "axios";

class Help extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      data: {},
    };
    this.handleQuery = this.handleQuery.bind(this);
    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    this.fetchResources();
  }

  async fetchResources() {
    try {
      const [response] = await Promise.all([
        axios.get("https://api.covid19india.org/resources/resources.json"),
      ]);
      const hashmap = {};
      response.data.resources.forEach((x) => {
        if (typeof hashmap[x["state"]] === "undefined")
          hashmap[x["state"]] = {};
        if (typeof hashmap[x["state"]][x["city"]] === "undefined")
          hashmap[x["state"]][x["city"]] = {};

        if (
          typeof hashmap[x["state"]][x["city"]][x["category"]] === "undefined"
        )
          hashmap[x["state"]][x["city"]][x["category"]] = [];
        if (Array.isArray(hashmap[x["state"]][x["city"]][x["category"]]))
          hashmap[x["state"]][x["city"]][x["category"]].push(x);
      });
      this.setState({ data: hashmap });
    } catch (err) {}
  }

  handleQuery(query) {
    this.setState({ query: query }, this.getData);
  }

  getData() {
    let resources = {};
    let locationType;
    for (const key of Object.keys(this.state.data)) {
      if (key === this.state.query) {
        resources = this.state.data[key];
        locationType = "multiple";
      } else {
        for (const dist of Object.keys(this.state.data[key])) {
          if (dist === this.state.query) {
            resources = this.state.data[key][dist];
            locationType = "single";
          }
        }
      }
    }
    this.setState({ currentResources: resources, locationType: locationType });
  }

  render() {
    return (
      <div>
        <h1>Help Page</h1>
        <p>For Help Please Contact</p>
        <Form handleQuery={this.handleQuery} />
      </div>
    );
  }
}

export default withStyles(styles)(Help);
