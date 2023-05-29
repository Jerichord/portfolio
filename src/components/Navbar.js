import React from "react";

export default function Navbar() {
  return (
    <div class="mx-auto py-5 sm:pd-20 sticky top-0 z-50 bg-white slideFromTop">
      <nav class="max-w-7xl mx-auto sm:px-12">
        <ul class="flex items-center font-bold">
          <div>
            <li>
              <a href="#intro" class="hover:opacity-50 text-2xl">
                Jericho.Referente
              </a>
            </li>
          </div>
          <div class="flex justify-end ml-auto gap-12 ">
            <li>
              <a href="#about" class="hover:opacity-50">
                About
              </a>
            </li>
            <li>
              <a href="#works" class="hover:opacity-50">
                Works
              </a>
            </li>
            <li>
              <a href="#contact" class="hover:opacity-50">
                Contact
              </a>
            </li>
            <li>
              <a
                href="./resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                class="hover:opacity-50"
              >
                Resume
              </a>
            </li>
          </div>
        </ul>
      </nav>
    </div>
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
