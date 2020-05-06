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
      currentResources: [],
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
    let resources = [];
    for (const key of Object.keys(this.state.data)) {
      if (key === this.state.query) {
        resources.push({ ...this.state.data[key] });
      } else {
        for (const dist of Object.keys(this.state.data[key])) {
          if (dist === this.state.query) {
            resources.push({ [key]: this.state.data[key][dist] });
          }
        }
      }
    }
    this.setState({ currentResources: resources });
  }

  render() {
    const res = this.state.currentResources.map((object) => {
      for (const key in object) {
        if (object.hasOwnProperty(key)) {
          for (const key2 in object[key]) {
            if (object[key].hasOwnProperty(key2)) {
              const result = object[key][key2].map((resource) => (
                <div>
                  <h3>{resource.category}</h3>
                  <p>Organization: {resource.nameoftheorganisation}</p>
                  <a href={resource.contact}>Link</a>
                  <p>Contact: {resource.phonenumber}</p>
                </div>
              ));
              return result;
            }
          }
        }
      }
      return null;
    });
    return (
      <div>
        <h1>Help Page</h1>
        <p>For Help Please Contact</p>
        <Form handleQuery={this.handleQuery} />
        {res}
      </div>
    );
  }
}

export default withStyles(styles)(Help);

// 0:
// Gangtok:
// CoVID-19 Testing Lab: Array(1)
// 0:
// category: "CoVID-19 Testing Lab"
// city: "Gangtok"
// contact: "https://covid.icmr.org.in/index.php/testing-labs-deatails#"
// descriptionandorserviceprovided: "Collection Site Only"
// nameoftheorganisation: "Sir Thutob Namgyal Memorial (STNM)"
// phonenumber: "9845562399"
// state: "Sikkim"
