import React from "react";
import ReactDOM from "react-dom/client";
//import "./styles.css";
//import { HelloWorldApp } from "./Introduction/HelloWorldApp.jsx";
//import { FirstApp } from "./Introduction/FirstApp";
//import { CounterApp } from "./Introduction/CounterApp";
import { GifExpertApp } from "./GifProyect/GifExpertApp";
import "./stylesGif.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GifExpertApp />
  </React.StrictMode>
);
