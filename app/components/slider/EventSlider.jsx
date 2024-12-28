"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation"; // Updated for `next/navigation`
import { pastEvents } from "@/data/pastEvents"; // Ensure this file exists in the `data` folder
import { SlideNavigation } from "./SlideNavigation";

export const EventSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const router = useRouter();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % pastEvents.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const getVisibleEvents = () => {
    const events = [...pastEvents];
    const previous = (currentIndex - 1 + events.length) % events.length;
    const next = (currentIndex + 1) % events.length;
    return [events[previous], events[currentIndex], events[next]];
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
    <div className="relative min-h-screen bg-gradient-to-br from-amber-600 via-white to-green overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1501426026826-31c667bdf23d')] bg-cover bg-center opacity-5" />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative pt-16 pb-20">
        <h1 className="text-center text-5xl font-bold text-white mb-16 tracking-tight">
          Our Past Events
          <div className="h-1 w-48 bg-gradient-to-r from-amber-600 via-white to-green mx-auto mt-4" />
        </h1>

        <div className="relative h-[500px] max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-center h-full gap-8">
            {getVisibleEvents().map((event, index) => (
              <div
                key={event.id}
                onClick={() => goToEvent(event.id)}
                className={`relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500
                  ${
                    index === 1
                      ? "w-[500px] h-[400px] z-10 scale-110 shadow-2xl"
                      : "w-[300px] h-[300px] opacity-60 scale-90"
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
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h2
                    className={`font-bold transition-all duration-500 ${
                      index === 1 ? "text-2xl" : "text-lg"
                    }`}
                  >
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
