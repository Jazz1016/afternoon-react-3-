import React from "react";
import logo from "./logo.svg";
import "./App.css";
import StateComponent from "./Components/StateComponent";

function App() {
  return (
    <div className="App">
      <header className="header">
        <p className="home-box">Home</p>
      </header>
      <div className="frame">
        <StateComponent />
      </div>
    </div>
  );
}

export default App;
