"use client";
import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react"; // Correct import for useGSAP
import Cursor from "./cursor";

// Function to handle mouse movement and animate the image
const change = (e, imageRef) => {
  const { clientX, clientY } = e;

  const offsetX = (clientX / window.innerWidth) * 25;
  const offsetY = (clientY / window.innerHeight) * 25;

  gsap.to(imageRef.current, {
    x: Math.min(Math.max(offsetX, 0), 50),
    y: Math.min(Math.max(offsetY, 0), 50),
    duration: 1.5,
    ease: "power3",
  });
};

// Array of red divs with their positions and dimensions
const redDivs = [
  { id: 1, top: 110, left: 110, h: 24, w: 4 },
  { id: 2, top: 110, left: 180, h: 24, w: 4 },
  { id: 3, top: 110, left: 260, h: 20, w: 3 },
  { id: 4, top: 110, left: 310, h: 20, w: 4 },
  { id: 5, top: 110, left: 390, h: 21, w: 4 },
  { id: 6, top: 110, left: 460, h: 18, w: 5 },
  { id: 7, top: 110, left: 546, h: 20, w: 5 },
  { id: 8, top: 150, left: 635, h: 14, w: 4 },
  { id: 9, top: 80, left: 660, h: 12, w: 3 },
  { id: 10, top: 50, left: 600, h: 10 },
  { id: 11, top: 60, left: 380, h: 7 },
  { id: 12, top: 50, left: 480, h: 6 },
  { id: 13, top: 80, left: 720, h: 12, w: 5 },
  { id: 14, top: 90, left: 820, h: 20, w: 4 },
  { id: 15, top: 80, left: 890, h: 15, w: 4 },
  { id: 16, top: 70, left: 985, h: 20, w: 3 },
  { id: 17, top: 100, left: 1040, h: 20, w: 4 },
  { id: 18, top: 80, left: 1110, h: 20, w: 4 },
  { id: 19, top: 80, left: 1170, h: 20, w: 3 },
  { id: 20, top: 80, left: 1220, h: 20, w: 3 },
  { id: 21, top: 50, left: 1280, h: 24, w: 4 },
  { id: 22, top: 40, left: 1350, h: 28, w: 4 },
  { id: 23, top: 300, left: 210, h: 16, w: 3 },
  { id: 24, top: 300, left: 275, h: 20, w: 6 },
  { id: 25, top: 250, left: 350, h: 7, w: 3 },
  { id: 26, top: 300, left: 370, h: 20, w: 5 },
  { id: 27, top: 300, left: 450, h: 20, w: 4 },
  { id: 28, top: 350, left: 440, h: 0, w: 0 },
  { id: 29, top: 240, left: 510, h: 20, w: 3 },
  { id: 30, top: 310, left: 555, h: 24, w: 6 },
  { id: 31, top: 245, left: 580, h: 10, w: 4 },
  { id: 32, top: 250, left: 660, h: 20, w: 4 },
  { id: 33, top: 330, left: 690, h: 24, w: 6 },
  { id: 34, top: 260, left: 750, w: 4, h: 12 },
  { id: 35, top: 300, left: 860, w: 6, h: 24 },
  { id: 36, top: 230, left: 800, w: 4, h: 20 },
  { id: 37, top: 170, left: 740, h: 12, w: 5 },
  { id: 38, top: 230, left: 890, w: 4, h: 10 },
  { id: 39, top: 150, left: 950, w: 4, h: 20 },
  { id: 40, top: 300, left: 960, w: 10, h: 24 },
  { id: 41, top: 230, left: 1000, w: 6, h: 10 },
  { id: 42, top: 260, left: 1130, w: 7, h: 20 },
];

function AboutOurTeam() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const imageRef = useRef(null);

  // GSAP animation for the bar
  useGSAP(() => {
    gsap.to(".bar", {
      width: 1380,
      duration: 15,
      repeat: -1,
      ease: "linear",
    });
  }, []);

  // Function to handle mouse move event and animate the cursor
  const mouseMoveEvent = (e) => {
    const { clientX, clientY } = e;

    gsap.to(".cursor", {
      x: clientX,
      y: clientY,
      duration: 0.5,
      ease: "power3",
    });
  };

  return (
    <div>
      <Cursor hoveredIndex={hoveredIndex} />

      <div
        onMouseMove={(e) => mouseMoveEvent(e)}
        className="md:w-full md:h-screen  flex items-center justify-center"
      >
        <div className="fixed top-0 left-0 bg-blue-500 opacity-3 rounded-md pointer-events-none z-50 px-3 py-1 opacity-0 overflow-hidden">
          <h1 className="font-bold text-white">Muchkund Thote</h1>
        </div>

        <div
          className="md:w-[90em] h-[590px] flex overflow-hidden rounded-3xl relative"
          onMouseMove={(e) => change(e, imageRef)}
        >
          <img
            ref={imageRef} // Attach the ref to the image
            className="slide h-full w-full object-cover rounded-3xl"
            src="/team.JPG"
            alt=""
          />

          <div>
            {redDivs.map((pos, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index + 1)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="h-[5%] w-[2%] bg-red-600 absolute z-10 hidden xl:block opacity-0" // Make divs visible for testing
                style={{
                  top: `${pos.top}px`,
                  left: `${pos.left}px`,
                  height: `${pos.h}%`,
                  width: `${pos.w}%`,
                }}
              >
                {pos.id}
              </div>
            ))}
          </div>

          <div className="w-full h-full bg-black opacity-40 absolute top-0 left-0 pointer-events-none text-white">
            <h4 className="font-bold text-[2vw] absolute bottom-[150px] p-[0.2] ml-3">
              Meet
            </h4>
            <h1 className="nice font-bold text-[4vw] absolute bottom-[60px] p-[0.2] px-2 bg-white text-black rounded-lg ml-3">
              Engineering India Ycce
            </h1>
            <p className="font-bold absolute bottom-0 p-7 leading-[1] ml-[-10px] mt-2">
              India is a global hub for engineering, with a rich tradition of
              innovation and a rapidly evolving technological landscape. The
              country produces millions of engineers every year, contributing
              significantly to its economy and global technological
              advancements.
            </p>
            <div className="bar h-[15px] w-[0px] bg-blue-300 absolute bottom-0"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutOurTeam;