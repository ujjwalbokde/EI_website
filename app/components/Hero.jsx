"use client";
import React, { useEffect } from "react";
import Navbar from "./Navbar";

function Hero() {
  useEffect(() => {
    let tl;

    // Dynamically import gsap and initialize animations
    import("gsap")
      .then((gsap) => {
        tl = gsap.timeline();

        // Animate the "ENGINEERING" text
        tl.from("#en", {
          x: 30,
          opacity: 0,
          duration: 1,
        });

        // Animate the "IN", "D", "IA" text blocks
        tl.from(["#IN", "#D", "#IA"], {
          x: 30,
          opacity: 0,
          stagger: 0.4,
          duration: 1,
        });
      })
      .catch((err) => {
        console.error("Failed to load GSAP:", err);
      });

    // Clean up GSAP timeline on unmount
    return () => {
      if (tl) tl.kill();
    };
  }, []);

  return (
    <div className="w-full h-screen -mt-8 flex items-center justify-center relative">
      
      {/* Video background container */}
      <div className="h-4/5 w-11/12 relative rounded-2xl overflow-hidden opacity-85">
        <video
          className="h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          src="/vedio/hero.mp4"
          aria-label="Indian flag background video"
        >
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Text content container */}
      <div className="flex items-center justify-center flex-col absolute p-2">
        <div className="font-bold flex lg:gap-8 gap-2 flex-col md:flex-row items-center">
          {/* "ENGINEERING" text */}
          <h1
            id="en"
            className="text-4xl md:text-5xl lg:text-8xl text-[#211467] mt-1 lg:mt-2"
          >
            ENGINEERING
          </h1>

          {/* "IN", "D", "IA" text blocks */}
          <div className="flex">
            <div
              id="IN"
              className="h-10 lg:h-full flex items-center justify-center lg:text-7xl w-10 lg:w-[100px] lg:p-3 lg:py-5 bg-[#D86710] text-white"
            >
              <h1>IN</h1>
            </div>
            <div
              id="D"
              className="h-10 lg:h-full flex items-center justify-center lg:text-7xl w-10 lg:w-[100px] lg:p-3 lg:py-5 bg-white text-[#661C75] border-t-2 border-b-2"
            >
              <h1>D</h1>
            </div>
            <div
              id="IA"
              className="h-10 lg:h-full flex items-center justify-center lg:text-7xl w-10 lg:w-[100px] lg:p-3 lg:py-5 bg-[#009439] text-white"
            >
              <h1>IA</h1>
            </div>
          </div>

        </div>

        {/* "YCCE" text */}
        <h3 className="text-5xl md:text-8xl font-bold">YCCE</h3>
      </div>
    </div>
  );
}

export default Hero;