import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { LatLngTuple } from "leaflet";

interface Props {
  coords: [number, number] | null;
}

// Dynamically import Leaflet components
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

// Default coordinates (fallback)
const DEFAULT_CENTER: LatLngTuple = [51.505, -0.09];

const CLeafletMap = ({ coords }: Props) => {
  const [mounted, setMounted] = useState(false);
  const [position, setPosition] = useState<LatLngTuple>(DEFAULT_CENTER);
  const [map, setMap] = useState<L.Map | null>(null);

  // Define custom marker icon
  const customIcon = L.icon({
    iconUrl: "/pin.svg",
    iconSize: [75, 72],
    iconAnchor: [22, 42],
    popupAnchor: [0, -42],
  });

  // Handle position updates
  useEffect(() => {
    if (coords) {
      setPosition(coords);
      // If map exists, pan to new position
      map?.setView(coords, map.getZoom());
    }
  }, [coords, map]);

  // Handle client-side mounting
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !coords) return null;

  return (
    <div className="relative w-full h-full min-h-[400px] rounded-lg overflow-hidden">
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={true}
        className="h-full w-full"
        style={{ borderRadius: "15px" }}
        ref={setMap}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={customIcon}>
          <Popup>
            <div className="text-sm">
              <p>Current Location</p>
              <p className="text-gray-600">
                {position[0].toFixed(4)}, {position[1].toFixed(4)}
              </p>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default CLeafletMap;


