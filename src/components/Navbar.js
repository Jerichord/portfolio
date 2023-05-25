import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav id="bar">
      <div id="name">
        <p id="firstName">Jericho</p>
        <p id="lastName">Referente</p>
      </div>
      <ul id="linkList">
        <li>About</li>
        <li>Works</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}
