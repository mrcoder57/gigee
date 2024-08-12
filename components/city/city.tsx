// components/CityList.tsx
import React from "react";

interface City {
  name: string;
  state: string;
}

interface CityListProps {
  cities: City[];
  onSelectCity: (city: City) => void;
  isOpen: boolean; 
}

const CityList: React.FC<CityListProps> = ({ cities, onSelectCity, isOpen }) => {
  if (!isOpen) return null; 

  return (
    <div className=" flex flex-row items-end justify-end">
    <div className="bg-white border rounded shadow-lg max-h-48 w-84 overflow-y-auto">
      {cities.length > 0 ? (
        cities.map((city, index) => (
          <div
            key={index}
            onClick={() => onSelectCity(city)}
            className="p-2 cursor-pointer hover:bg-gray-100"
          >
            {city.name}, {city.state}
          </div>
        ))
      ) : (
        <div className="p-2 text-gray-500">No cities found</div>
      )}
    </div>
    </div>
  );
};

export default CityList;
