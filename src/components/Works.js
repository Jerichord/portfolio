import React from "react";
import Project from "./Project";

export default function Works() {
  return (
    <section class=" mt-20 mb-20 lg:mt-60">
      {/* heading */}
      <div class="sm:w-3/4 lg:w-5/12 mx-auto px-2">
        <h1 class="text-5xl font-bold tracking-tight text-gray-900 text-center">
          Works
        </h1>
        <p class="mt-6 text-lg leading-8 text-gray-600 text-center">
          Here are some of the things I have worked on
        </p>
      </div>
      {/* projects */}
      <Project
        title="Protempis"
        desc="Developed code for the GM200 product. Used knowledge of web development to fix issues in Web UI. 
      Using experience in software concepts, took on issues related to CLI and understand networking/ development flow.
      Worked to design testing solution for embedded product."
        tech="Python/C/Jquery/HTML/CSS/JS/PHP/XML"
        altImage="Protempis Logo"
        image="./images/protempis.png"
        isFirst={true}
        reverse={false}
      />
      <Project
        title="Protempis"
        desc="Developed code for the GM200 product. Used knowledge of web development to fix issues in Web UI. 
      Using experience in software concepts, took on issues related to CLI and understand networking/ development flow.
      Worked to design testing solution for embedded product."
        tech="Python/C/Jquery/HTML/CSS/JS/PHP/XML"
        altImage="Protempis Logo"
        image="./images/protempis.png"
        isFirst={false}
        reverse={true}
      />
    </section>
  );
}
