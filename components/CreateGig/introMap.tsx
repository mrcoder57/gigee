"use client";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import { Separator } from "@/components/ui/separator";
import axios from "axios";

const LeafletMap = dynamic(() => import("../map/leafletMap"), { ssr: false });
const CLeafletMap = dynamic(() => import("../map/coordinatedMap"), { ssr: false });

const IntroMap = () => {
  const [location, setLocation] = useState<string>("");
  const [coords, setCoords] = useState<[number, number] | null>(null);

  // Function to handle search input
  const handleSearch = async () => {
    if (location) {
      const encodedLocation = encodeURIComponent(location);
      const response = await axios.get(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodedLocation}`
      );
      const data = await response.data;
      if (data && data.length > 0) {
        const { lat, lon } = data[0];
        setCoords([parseFloat(lat), parseFloat(lon)]);
      } else {
        alert("Location not found");
      }
    }
  };

  return (
    <div className="flex flex-col gap-y-4 justify-center w-full h-full lg:px-0 px-2 py-4">
      {/* <div className="flex flex-col items-center justify-center">
        <h1 className="font-semibold text-[22px] text-[#222222]">
          Search for a location
        </h1>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="h-[35px] w-[340px] border border-[#D9D9D9] rounded-lg px-3 py-2 text-sm"
          placeholder="Enter location"
        />
        <button
          onClick={handleSearch}
          className="mt-2 py-2 px-4 bg-blue-600 text-white rounded-lg"
        >
          Search
        </button>
      </div> */}

      <div className="flex lg:w-full max-w-2xl w-[337px] justify-center items-center mx-auto lg:h-[597px] h-[257px] sm:w-[550px] sm:h-[266px] md:w-[833px] md:h-[310px] mt-2 rounded-lg shadow-lg z-10">
        {coords ? (
          <CLeafletMap key={coords.join(",")} coords={coords} />
        ) : (
          <LeafletMap />
        )}
      </div>
    </div>
  );
};

export default IntroMap;
