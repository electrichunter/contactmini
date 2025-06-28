"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const slides = [
  {
    title: "Track Your Clients Easily",
    description: "Manage all your customer contacts and details in one place.",
    image: "/cm.png",
  },
  {
    title: "Never Miss an Appointment",
    description: "Schedule and view your daily or weekly appointments with ease.",
    image: "/slider/calendar.png",
  },
  {
    title: "Keep Personal Notes",
    description: "Add notes to each client to remember key details.",
    image: "/slider/notes.png",
  },
];

export default function FeatureSlider() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="w-full max-w-4xl mx-auto p-6 rounded-xl shadow-md bg-blue-50  ">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slide, i) => (
            <div key={i} className="min-w-full flex flex-col items-center text-center px-4 py-6">
              <img src={slide.image} alt={slide.title} className="w-40 h-40 mb-4" />
              <h2 className="text-xl font-semibold">{slide.title}</h2>
              <p className="text-gray-600">{slide.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center mt-4">
        <button onClick={prev} className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
          <ArrowLeft size={20} />
        </button>

        <div className="flex space-x-2">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full ${
                current === i ? "bg-blue-500" : "bg-gray-300"
              }`}
            />
          ))}
        </div>

        <button onClick={next} className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
          <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
}
