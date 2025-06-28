"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";

// Leaflet CSS'i import et
import "leaflet/dist/leaflet.css";

const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(
  () => import("react-leaflet").then((mod) => mod.Popup),
  { ssr: false }
);

// Leaflet ikonlarını ayarla
import L from "leaflet";
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
});

interface Location {
  lat: number;
  lon: number;
  display_name: string;
}

export default function MapPage() {
  const [query, setQuery] = useState("Ankara");
  const [locations, setLocations] = useState<Location[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Nominatim API'den konum ara
  const fetchLocations = async (searchTerm: string) => {
    if (!searchTerm) return;

    setLoading(true);
    setError(null);

    try {
      // Direkt Nominatim API çağrısı (CORS sorun olabilir)
      const res = await fetch(
        `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
          searchTerm
        )}&format=json&limit=5`,
        {
          headers: {
            "User-Agent": "contactmini-app (ouysal155@gmail.com)", // zorunlu
          },
        }
      );
      if (!res.ok) throw new Error("API hatası");
      const data = await res.json();

      const filtered = data
        .filter(
          (item: any) =>
            !isNaN(parseFloat(item.lat)) && !isNaN(parseFloat(item.lon))
        )
        .map((item: any) => ({
          lat: parseFloat(item.lat),
          lon: parseFloat(item.lon),
          display_name: item.display_name,
        }));

      setLocations(filtered);
    } catch (err) {
      setError("Konum verisi alınamadı veya CORS hatası var.");
      setLocations([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLocations(query);
  }, []);

  // Harita merkezi ilk bulunan konum veya Ankara koordinatı
  const center =
    locations.length > 0 ? [locations[0].lat, locations[0].lon] : [39.9334, 32.8597];

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Tek Dosyada Nominatim & Leaflet Harita</h1>

      <input
        type="text"
        placeholder="Konum ara..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border rounded px-3 py-2 w-full mb-4"
      />
      <button
        onClick={() => fetchLocations(query)}
        disabled={loading}
        className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 disabled:opacity-50"
      >
        {loading ? "Yükleniyor..." : "Ara"}
      </button>

      {error && <p className="text-red-500 mt-4">{error}</p>}

      <div className="mt-6" style={{ height: "500px" }}>
        <MapContainer center={center as [number, number]} zoom={13} scrollWheelZoom style={{ height: "100%", width: "100%" }}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {locations.map((loc, idx) => (
            <Marker key={idx} position={[loc.lat, loc.lon]}>
              <Popup>{loc.display_name}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </main>
  );
}
