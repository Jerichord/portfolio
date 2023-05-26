import "./App.css";
import React from "react";
import Works from "./components/Works";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="App" class="font-Poppins">
      <About />
      <Works />
      <Footer />
    </div>
  );
}
