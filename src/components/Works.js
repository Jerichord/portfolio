import React from "react";
import Project from "./Project";
import { useInView } from "react-intersection-observer";

export default function Works() {
  const { ref: workRef, inView: workView } = useInView({
    triggerOnce: true,
    threshold: 1,
  });

  return (
    <section class="bg-bookmark-white py-20 mb-20 lg:mt-40" id="works">
      {/* heading */}
      <div ref={workRef} class="sm:w-3/4 lg:w-5/12 mx-auto px-2">
        <h1
          class={`text-5xl font-bold tracking-tight text-gray-900 text-center ${
            workView ? "onScreen" : "outScreen"
          }`}
        >
          Works
        </h1>
        <p class="mt-6 text-lg leading-8 text-bookmark-grey text-center">
          Here are things I have worked on {workView ? "yes" : "no"}
        </p>
      </div>
      {/* projects */}
      <Project
        title="Protempis"
        desc="Developed code for the GM200 product. Used knowledge of web development to fix issues in Web UI. 
      Using experience in software concepts, took on issues related to CLI and understand networking/ development flow.
      Worked to design testing solution for embedded product."
        tech="Python/C/Jquery/HTML/CSS/JS/PHP/XML/JIRA/git"
        altImage="Protempis Logo"
        image="./images/protempis.png"
        isFirst={true}
        reverse={false}
        techColor="text-sky-500"
        bgColor="bg-sky-500"
      />
      <Project
        title="Fereidouni Lab"
        desc="Developed code for the SciCam App and Thorlabs Machine. Took a nonfunctioning focus feature
        and implemented a working version using Euclidean Distance. Further optimized code to use less than 1/4 of
        the original iterations by debugging code and finding bottleneck. Read SDK of thorlabs to transfer DLLs so that new machine
        could be operated with visual basic. First chance at working on a large codebase and realizing communication is key in reaching desired product."
        tech="Visual Basic/DSA/Image Processing/OOP/git"
        altImage="App showing scan of cell"
        image="./images/pathology.png"
        isFirst={false}
        reverse={true}
        techColor="text-indigo-500"
        bgColor="bg-indigo-500"
      />
      <Project
        title="DaviScout"
        desc="CRUD application allowing user to make an account, leave reviews, and find restaurants within Davis using Mapbox API. First 
        application that traversed full-stack and understanding of protocols and web technologies, so styling is bad and app is very limited. 
        In future, may convert EJS to JSX and refactor styles so that website looks nicer. Also may add a cloud service or containerize application."
        tech="MongoDB/Mongoose/Express/Node/HTML/CSS/EJS/Bootstrap/git"
        altImage="daviScout website"
        image="./images/daviscout.png"
        isFirst={false}
        reverse={false}
        techColor="text-gray-800"
        bgColor="bg-gray-800"
      />
      <Project
        title="CC3200 Security Camera"
        desc="Simple security system using the CC3200 sensors and OpenMV Camera. Communicated between devices
        with UART protocol and triggered built in facial detection code when accelerometer data reaches threshhold. 
        With device registered as an AWS shadow, set up an email with POST request whenever CC3200 updates AWS with picture.
        Built website using bootstrap"
        tech="C/AWS Shadow/Bootstrap/HTML/CSS/Python"
        altImage="Website for Security Camera"
        image="./images/CC3200.png"
        isFirst={false}
        reverse={true}
        techColor="text-violet-700"
        bgColor="bg-violet-700"
      />
      <Project
        title="This Portfolio"
        desc="Aimed to make a more modern looking application using modern frameworks that I have been learning on the side. 
        Gave experience using another front end styling framework and experience with React."
        tech="React/Tailwind/HTML/CSS/JS"
        altImage="portfolio website"
        image="./images/portfolio_filler.png"
        isFirst={false}
        reverse={false}
        techColor="text-cyan-800"
        bgColor="bg-cyan-800"
      />
      <Project
        title="Guest Form Component"
        desc="Completed exercise aiming to use Ruby on Rails and React to make a modern-looking
        component that succesfully validated and sent to SQL server. Helped me understand different tech stack
        and a chance at developing a decent looking component."
        tech="Ruby on Rails/SQL/React"
        altImage="Guest component with Username and email field"
        image="./images/guest.png"
        isFirst={false}
        reverse={true}
        techColor="text-emerald-800"
        bgColor="bg-emerald-800"
      />
      <Project
        title="Autonomous Vehicle Code"
        desc="For different autonomous vehicle projects, developed code including line-tracking,
        object detection and sound detection. Gave experience with embedded devices and setting 
        up code that communicates between devices."
        tech="Python/C/Circuits/Oscilloscope"
        altImage="mini car with breadboard containing sound system"
        image="./images/vehicle.jpg"
        isFirst={false}
        reverse={false}
        techColor="text-rose-950"
        bgColor="bg-rose-950"
      />
      <Project
        title="UDP Congestion Control"
        desc="Project which solidified networking concepts and reliable delivery service through using different methods
        to send/receive packets using UDP sockets. Important since this was a project which I had to whiteboard out since
        there was nothing to visualize the whole process except data and book knowledge."
        tech="Python/UDP/TCP"
        altImage="diagram showing"
        image="./images/data_transfer.png"
        isFirst={false}
        reverse={true}
        techColor="text-black"
        bgColor="bg-black"
      />
    </section>
  );
}
