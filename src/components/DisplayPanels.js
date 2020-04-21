import React, { Component } from "react";

export default class DisplayPanels extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { title, number, dataChange } = this.props;
    return (
      <div>
        <p>{title}</p>
        <p>{number}</p>
        <p>
          {dataChange > 0 ? "+" : ""}
          {dataChange}
        </p>
      </div>
    );
  }
}
