import React, { useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div class="mx-auto px-4 py-5 sm:pd-20 sticky top-0 z-50 bg-white slideFromTop ">
      <nav class="max-w-7xl mx-auto ">
        <ul class="flex items-center font-bold">
          <div>
            <li>
              <a href="#intro" class="hover:opacity-50 text-2xl ">
                Jericho.Referente
              </a>
            </li>
          </div>
          <div class="hidden sm:flex justify-end ml-auto gap-12 ">
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
          {/* mobile x or burger icon */}
          <div class="sm:hidden  justify-end ml-auto mr-2 ">
            {isMobileMenuOpen ? (
              <svg
                onClick={toggleMobileMenu}
                class="cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
              </svg>
            ) : (
              <svg
                onClick={toggleMobileMenu}
                class="cursor-pointer stroke-black "
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fill-rule="evenodd"
                clip-rule="evenodd"
              >
                <path
                  d="M24 18v1h-24v-1h24zm0-6v1h-24v-1h24zm0-6v1h-24v-1h24z"
                  fill="#1040e2"
                />
                <path d="M24 19h-24v-1h24v1zm0-6h-24v-1h24v1zm0-6h-24v-1h24v1z" />
              </svg>
            )}
          </div>
        </ul>
        {/* mobile menu */}
        {isMobileMenuOpen && (
          <div class="sm:hidden items-center font-bold bg-white text-center">
            <ul class="mt-6">
              <li class="pb-4">
                <a
                  href="#about"
                  class="hover:opacity-50"
                  onClick={toggleMobileMenu}
                >
                  About
                </a>
              </li>
              <li class="pb-4">
                <a
                  href="#works"
                  class="hover:opacity-50"
                  onClick={toggleMobileMenu}
                >
                  Works
                </a>
              </li>
              <li class="pb-4">
                <a
                  href="#contact"
                  class="hover:opacity-50"
                  onClick={toggleMobileMenu}
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  onClick={toggleMobileMenu}
                  href="./resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="hover:opacity-50"
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
        )}
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
