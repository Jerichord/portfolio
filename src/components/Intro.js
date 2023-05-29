import React from "react";
import { useInView } from "react-intersection-observer";

export default function Intro() {
  const { ref: introRef, inView: introView } = useInView({
    triggerOnce: true,
  });

  return (
    <div
      class="relative isolate px-6 pt-14 lg:px-8 bg-bookmark-white"
      id="intro"
    >
      <div
        ref={introRef}
        class={`mx-auto max-w-7xl py-28 sm:py-56 ${
          introView ? "onScreen" : "outScreen"
        }`}
      >
        <div class="text-center">
          <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Aiming to write code that will serve a need, no matter how big or
            small.
          </h1>
          <p class="mt-6 text-lg leading-8 text-bookmark-grey">
            Hi, I am Jericho, an aspiring software engineer with knowledge in
            various disciplines in software ranging from web technologies to
            embedded software. I am currently focused on gaining professional
            experience and developing apps in my freetime in order to get a
            better idea of what good engineering and design is.
          </p>
        </div>
      </div>
      <div id="about"></div>
    </div>
  );
}
