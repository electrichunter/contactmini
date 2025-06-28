"use client";

import React, { useState } from "react";

const Profile = () => {
  const [name, setName] = useState("Ayşe Demir");
  const [email, setEmail] = useState("ayse.demir@example.com");
  const [phone, setPhone] = useState("+90 555 123 4567");
  const [address, setAddress] = useState("Atatürk Mah. No:12, Ankara");
  const [category, setCategory] = useState("Doktor");
  const [location, setLocation] = useState("Ankara");
  const [profileImage, setProfileImage] = useState(
    "https://randomuser.me/api/portraits/women/44.jpg"
  );

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md mt-10 mb-20">
      <h1 className="text-2xl font-bold mb-6 text-center">Profilim</h1>

      <div className="flex flex-col items-center">
        <img
          src={profileImage}
          alt="Profil Resmi"
          className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-indigo-600"
        />
        <button className="text-indigo-600 underline mb-6">
          Profil Resmini Değiştir
        </button>
      </div>

      <form className="space-y-4">
        <div>
          <label className="block text-gray-700 font-semibold mb-1" htmlFor="name">
            İsim
          </label>
          <input
            id="name"
            type="text"
            className="w-full border border-gray-300 rounded px-3 py-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-1" htmlFor="email">
            E-posta
          </label>
          <input
            id="email"
            type="email"
            className="w-full border border-gray-300 rounded px-3 py-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-1" htmlFor="phone">
            Telefon
          </label>
          <input
            id="phone"
            type="tel"
            className="w-full border border-gray-300 rounded px-3 py-2"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-1" htmlFor="address">
            Adres
          </label>
          <textarea
            id="address"
            className="w-full border border-gray-300 rounded px-3 py-2"
            rows={3}
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-1" htmlFor="category">
            Kategori
          </label>
          <select
            id="category"
            className="w-full border border-gray-300 rounded px-3 py-2"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option>Doktor</option>
            <option>Avukat</option>
            <option>Berber</option>
            <option>Diyetisyen</option>
            <option>Kişisel Antrenör</option>
            <option>Terapist</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-1" htmlFor="location">
            Konum
          </label>
          <input
            id="location"
            type="text"
            className="w-full border border-gray-300 rounded px-3 py-2"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-3 rounded font-semibold hover:bg-indigo-700 transition"
          onClick={(e) => {
            e.preventDefault();
            alert("Profil bilgileri kaydedildi!");
          }}
        >
          Kaydet
        </button>
      </form>
    </div>
  );
};

export default Profile;
