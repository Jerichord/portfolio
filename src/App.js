import "./App.css";
import React from "react";
import Works from "./components/Works";
import Navbar from "./components/Navbar";
import About from "./components/About";

export default function App() {
  return (
    <div className="App" class="font-Poppins">
      <About />
      <Works />
    </div>
  );
}
