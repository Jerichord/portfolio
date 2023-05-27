import "./App.css";
import React from "react";
import Works from "./components/Works";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import About from "./components/About";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="App" class="font-Poppins">
      <Navbar />
      <Intro />
      <About />
      <Works />
      <Footer />
    </div>
  );
}
