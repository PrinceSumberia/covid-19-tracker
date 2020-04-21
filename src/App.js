import React, { Component } from "react";
import "./App.css";
import CovidApp from "./components/CovidApp";
import Paper from "./components/Paper";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDarkMode: false,
    };
    this.setDarkMode = this.setDarkMode.bind(this);
  }

  setDarkMode(e) {
    this.setState({ isDarkMode: e.target.checked });
  }

  render() {
    return (
      <Paper isDarkMode={this.state.isDarkMode}>
        <CovidApp
          setDarkMode={this.setDarkMode}
          isDarkMode={this.state.isDarkMode}
        />
      </Paper>
    );
  }
}

export default App;
