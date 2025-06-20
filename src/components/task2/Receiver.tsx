"use client";

import { useState } from "react";
import { useSignalR } from "@/hooks/useSignalR";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

import "leaflet/dist/leaflet.css";

delete (L.Icon.Default.prototype as unknown as { _getIconUrl?: () => string })._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "/leaflet/images/marker-icon-2x.png",
  iconUrl: "/leaflet/images/marker-icon.png",
  shadowUrl: "/leaflet/images/marker-shadow.png",
});

export default function Receiver() {
  const [position, setPosition] = useState<[number, number] | null>(null);

  useSignalR({
    userName: "aljoboyer@gmail.com",
    onReceive: (data) => {
      setPosition([data.lat, data.lon]);
    },
  });

  return (
    <div>
      <h2 className="my-4 text-title font-bold">Receiver Map</h2>
      {position ? (
        <MapContainer center={position} zoom={15} style={{ height: "400px", width: "100%" }}>
          <TileLayer
            attribution="&copy; OpenStreetMap contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>Live Location</Popup>
          </Marker>
        </MapContainer>
      ) : (
        <p>Waiting for location updates...</p>
      )}
    </div>
  );
}
