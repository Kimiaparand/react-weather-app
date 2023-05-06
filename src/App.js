import React from "react";
import Weather from "./Weather";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was codedd by{" "}
          <a
            href="https://github.com/Kimiaparand/react-weather-app"
            target="_balnk"
          >
            Kimia Fatehi
          </a>{" "}
          is{" "}
          <a href="https://github.com/Kimiaparand/react-weather-app">
            opened-source on Github
          </a>
        </footer>
      </div>
    </div>
  );
}
