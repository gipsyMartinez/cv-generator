import React, { Component } from "react";
import SearchForm from "./components/SearchForm";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <p>CV generator</p>
          <SearchForm />
        </header>
      </div>
    );
  }
}

export default App;
