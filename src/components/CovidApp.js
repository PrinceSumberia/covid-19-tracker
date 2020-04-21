import React, { Component } from "react";
import Overview from "./Overview";

export default class CovidApp extends Component {
  render() {
    return (
      <div>
        <h1>Covid-19 India Trend</h1>
        <Overview />
      </div>
    );
  }
}
