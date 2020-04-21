import React, { Component } from "react";
import DisplayPanels from "./DisplayPanels";
import axios from "axios";

export default class Overview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataTitle: "Recov",
      patientCount: "1",
      precentChange: "34",
    };
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <DisplayPanels {...this.state} />
      </div>
    );
  }
}
