import React from "react";
import { useInView } from "react-intersection-observer";

export default function Project({
  title,
  desc,
  tech,
  image,
  altImage,
  reverse,
  isFirst,
  techColor,
  bgColor,
}) {
  const { ref: projectRef, inView: projectView } = useInView({
    triggerOnce: false,
    threshold: 1,
  });

  return (
    <div ref={projectRef}>
      <div class={`relative mt-20 ${isFirst ? "lg:mt-20" : "lg:mt-52"}`}>
        <div
          class={`container flex flex-col ${
            reverse ? "lg:flex-row-reverse" : "lg:flex-row"
          } items-center justify-center gap-x-24`}
        >
          {/* image */}
          <div
            class={`flex flex-1 justify-center z-10 mb-10 lg:mb-0 ${
              reverse
                ? projectView
                  ? "slideFromRight"
                  : "outScreen"
                : projectView
                ? "slideFromLeft"
                : "outScreen"
            }`}
          >
            <img
              class="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full height:w-full rounded-lg"
              src={image}
              alt={altImage}
            />
          </div>
          {/* Content */}
          <div
            class={`flex flex-1 flex-col items-center lg:items-start ${
              projectView ? "onScreen" : "outScreen"
            }`}
          >
            <h2
              class={`my-4 text-center lg:text-left sm:w-3/4 lg:w-full ${techColor}`}
            >
              {tech}
            </h2>
            <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl ">
              {title}
            </h1>
            <p class="my-4 text-center lg:text-left sm:w-3/4 lg:w-full text-bookmark-grey">
              {desc}
            </p>
          </div>
          {/* rectangle */}
          <div
            class={`hidden lg:block overflow-hidden ${bgColor} absolute h-80 w-2/4 -bottom-28 ${
              reverse ? "-right-36 rounded-l-full" : "-left-36 rounded-r-full"
            } ${
              reverse
                ? projectView
                  ? "slideFromRight"
                  : "outScreen"
                : projectView
                ? "slideFromLeft"
                : "outScreen"
            }`}
          ></div>
          {/* <div id="placeHolder" ref={projectRef}></div> */}
        </div>
      </div>
    </div>
  );
}
