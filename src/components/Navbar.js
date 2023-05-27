import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <div>
          <li>Jericho</li>
          <li>Referente</li>
        </div>
        <div>
          <li>About</li>
          <li>Works</li>
          <li>Contact</li>
          <li>
            {" "}
            <a href="./resume.pdf" target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          </li>
        </div>
      </ul>
    </nav>
  );
}

{
  /* <header>
      <nav class="container flex items-center py-4 mt-4 sm:mt-12">
        <div class=" text-xs">Jericho Referente</div>
        <ul class="hidden sm:flex flex-1 justify-end items-center gap-12 text-bookmark-blue uppercase text-xs">
          <li class="cursor-pointer">About</li>
          <li class="cursor-pointer">Works</li>
          <li class="cursor-pointer">Contact</li>
          <li class="cursor-pointer">Resume</li>
        </ul>
        <div class="flex sm:hidden flex-1 justify-end">
          <i class="text-2xl fas fa-bars"></i>
        </div>
      </nav>
    </header> */
}
{
  /* <nav id="bar">
      <div id="name">
        <p id="firstName">Jericho</p>
        <p id="lastName">Referente</p>
      </div>
      <ul id="linkList">
        <li>About</li>
        <li>Works</li>
        <li>Contact</li>
      </ul>
    </nav> */
}
