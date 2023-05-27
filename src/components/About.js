import React from "react";

export default function About() {
  return (
    <section class="relative">
      <div class="container flex flex-col-reverse lg:flex-row items-center gap-12 mt-14 lg:mt-28">
        <div class="flex flex-1 flex-col items-center lg:items-start">
          <h2 class="text-gray-900 font-bold text-3xl md:text-4 lg:text-5xl text-center lg:text-left mb-6">
            About Me
          </h2>
          <p class="text-bookmark-grey text-lg text-center lg:text-left mb-6">
            I started my development journey the summer of my sophmore year in
            undergrad through a web development course, and I have not looked
            back since. I graduated UC Davis with a Degree in Computer
            Engineering, and although I loved the concepts I learned, the more
            classes I took in software after web development, the more I felt
            the joy of concepts clicking, and how deep the iceberg went in terms
            of what applications can contain. Now, I am continuing my journey
            learning through peers and personal endeavors.
          </p>
        </div>
        <div class="flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0 z-10">
          <img
            class="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full rounded-lg"
            src="./images/jeri.jpg"
            alt=""
          />
        </div>
      </div>
      <div
        class="
      hidden
      md:block
      overflow-hidden
      bg-violet-950
      rounded-l-full
      absolute
      h-120
      w-2/4
      top-32
      right-0
      lg:
      -bottom-28
      lg:-right-36
    "
      ></div>
    </section>
  );
}
