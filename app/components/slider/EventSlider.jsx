"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation"; // Updated for `next/navigation`
import { pastEvents } from "@/data/pastEvents"; // Ensure this file exists in the `data` folder
import { SlideNavigation } from "./SlideNavigation";

export const EventSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust breakpoint as needed
    };

    handleResize(); // Check on initial render
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % pastEvents.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const getVisibleEvents = () => {
    if (isMobile) {
      return [pastEvents[currentIndex]];
    } else {
      const events = [...pastEvents];
      const previous = (currentIndex - 1 + events.length) % events.length;
      const next = (currentIndex + 1) % events.length;
      return [events[previous], events[currentIndex], events[next]];
    }
  };

  const goToEvent = (id) => {
    router.push(`/event/${id}`);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % pastEvents.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + pastEvents.length) % pastEvents.length);
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 " />
        <div className="absolute inset-0 " />
      </div>

      <div className="relative pt-16 pb-20">
        <h1 className="text-center text-3xl sm:text-5xl font-bold mb-8 sm:mb-16 tracking-tight text-[#FF9933]">
          Our Past Events
          <div className="h-1 w-24 sm:w-48 mx-auto mt-4 bg-[#FF9933]" />
        </h1>

        <div className="relative h-[400px] sm:h-[500px] max-w-7xl mx-auto px-4">
          <div className={`flex items-center justify-center h-full ${isMobile ? "" : "gap-8"}`}>
            {getVisibleEvents().map((event, index) => (
              <div
                key={event.id}
                onClick={() => goToEvent(event.id)}
                className={`relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 ${
                  isMobile
                    ? "w-[300px] h-[400px] scale-110 shadow-2xl"
                    : index === 1
                    ? "w-[350px] h-[300px] z-10 scale-110 shadow-2xl"
                    : "w-[250px] h-[200px] opacity-60 scale-90"
                }`}
              >
                <Image
                  src={event.image}
                  alt={event.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
                  <h2 className={`font-bold ${isMobile ? "text-lg" : index === 1 ? "text-2xl" : "text-lg"}`}>
                    {event.title}
                  </h2>
                </div>
              </div>
            ))}
          </div>

          <SlideNavigation onPrevious={prevSlide} onNext={nextSlide} />
        </div>
      </div>
    </div>
  );
};
