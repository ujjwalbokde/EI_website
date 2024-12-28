"use client"
import React from 'react';
import { useRouter } from 'next/router'; 
import { ArrowLeft, Calendar, Clock, MapPin } from 'lucide-react';
import { pastEvents } from '@/data/pastEvents';
import { formatDate } from '@/utils/dateUtils';

export const Events = () => {
  const router = useRouter();
  const { id } = router.query;
  const event = pastEvents.find((e) => e.id === Number(id));

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-950 via-purple-900 to-pink-900">
        <p className="text-2xl text-white">Event not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-700 via-white to-green">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,rgba(0,0,0,0.3)_100%)]" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1501426026826-31c667bdf23d')] bg-cover bg-center opacity-5" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 py-4">
        <button
          onClick={() => router.push('/')}
          className="flex items-center gap-2 text-gray-200 mb-8 hover:text-white transition-colors group"
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
              <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-200 bg-clip-text text-transparent">
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