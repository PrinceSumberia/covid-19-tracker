import React, { Component } from "react";

export default class DisplayPanels extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { dataTitle, patientCount, precentChange } = this.props;
    return (
      <div>
        <p>{dataTitle}</p>
        <p>{patientCount}</p>
        <p>{precentChange}</p>
      </div>
    );
  }
}
