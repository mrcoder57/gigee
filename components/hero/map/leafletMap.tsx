"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";
import L from "leaflet"; // Import Leaflet for creating the custom marker

// Dynamically import Leaflet components
const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import('react-leaflet').then(mod => mod.Marker), { ssr: false });
const Popup = dynamic(() => import('react-leaflet').then(mod => mod.Popup), { ssr: false });

const LeafletMap = () => {
  const [mounted, setMounted] = useState(false);
  const position: [number, number] = [28.7041, 77.1025]; // Typed as a tuple

  // Define custom marker icon
  const customIcon = L.icon({
    iconUrl: '/location.svg', // Change this to your icon's path
    iconSize: [45, 42], // Size of the icon
    iconAnchor: [19, 38], // Point of the icon which will correspond to marker's location
    popupAnchor: [0, -38], // Point where the popup should open relative to the iconAnchor
  });

  // Ensure MapContainer is rendered only on the client side
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Prevent rendering on the server or during initial mount

  return (
    <div className="flex w-full h-full">
      <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{ height: "100%", width: "100%", borderRadius: "15px" }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* Use the custom icon in Marker */}
        <Marker position={position} icon={customIcon}>
          <Popup>
            You&#39;ll be here
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default LeafletMap;