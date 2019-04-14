import React, { Component } from "react";
import CVGenerator from "./components/CVGenerator";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <p>CV generator</p>
          <CVGenerator />
        </header>
      </div>
    );
  }
}

export default App;
