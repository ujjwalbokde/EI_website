"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeft, Calendar, Clock, MapPin } from "lucide-react";
import { pastEvents } from "@/data/pastEvents";
import { formatDate } from "@/utils/dateUtils";

const Event = () => {
  const { id } = useParams(); // Use useParams to get dynamic route params
  const router = useRouter();

  const event = pastEvents.find((e) => e.id === Number(id));

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center ">
        <p className="text-2xl text-white">Event not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen mt-[5rem] ">
      <div className="absolute inset-0">
        <div className="absolute inset-0 " />
        <div className="absolute inset-0 " />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 py-4">
        <button
          onClick={() => router.push("/")}
          className="flex items-center gap-2 text-gray-900 mb-8 transition-colors group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Back to Events
        </button>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="relative">
              <div className="absolute inset-0 to-transparent rounded-xl" />
              <img
                src={event.image}
                alt={event.title}
                className="rounded-xl w-full h-[500px] object-cover shadow-xl"
              />
            </div>

            <div className="text-black space-y-6">
              <h1 className="text-4xl font-bold text-[#FF9933]">
                {event.title}
              </h1>

              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 text-gray-600">
                  <Calendar className="w-5 h-5" />
                  <span>{formatDate(event.date)}</span>
                </div>

                <div className="flex items-center gap-3 text-gray-600">
                  <Clock className="w-5 h-5" />
                  <span>{event.time}</span>
                </div>

                <div className="flex items-center gap-3 text-gray-600">
                  <MapPin className="w-5 h-5" />
                  <span>{event.location}</span>
                </div>
              </div>

              <div className="h-px w-full bg-gradient-to-r from-black to-transparent my-6" />

              <div className="prose prose-invert">
                <p className="text-lg leading-relaxed text-gray-600">
                  {event.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
