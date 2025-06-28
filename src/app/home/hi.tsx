"use client";
import React, { useState } from "react";

const Hi = () => {
  const [activeCategory] = useState<string>('all'); // Şu an kullanılmıyor ama içinde olmalı
  const [searchTerm, setSearchTerm] = useState<string>('');

  return (
    <section className="bg-gradient-to-r from-indigo-600 to-purple-800 text-white py-20 ">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Profesyonel Randevu Sistemi</h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          Doktor, avukat, berber ve daha fazlası için kolay randevu alımı
        </p>

        <div className="max-w-2xl mx-auto relative">
          <input
            type="text"
            placeholder="Uzman ara... (örn: Kardiyolog, Avukat)"
            className="w-full pl-12 pr-4 py-3 rounded-xl bg-white text-gray-800 shadow-md focus:outline-none focus:ring-2 focus:ring-primary focus:bg-gray-50 transition duration-200"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <svg
            className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hi;
