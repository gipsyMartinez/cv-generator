import React, { Component } from "react";
import CVGenerator from "./components/CVGenerator";
import style from "./App.module.css";

class App extends Component {
  render() {
    return (
      <div className={style.app}>
        <header className={style.appHeader}>
          <p>CV generator</p>
        </header>
        <div className={style.appWrapper}>
          <CVGenerator />
        </div>
      </div>
    );
  }
}

export default App;
