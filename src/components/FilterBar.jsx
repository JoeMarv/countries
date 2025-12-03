import React, { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";

const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

const FilterBar = ({ setRegion }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Filter by Region");
  const dropdownRef = useRef(null);

  const handleSelect = (region) => {
    setSelected(region);
    setRegion(region);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative w-48 font-semibold text-sm" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full bg-card text-foreground px-5 py-4 shadow-md rounded-md hover:opacity-80 transition-opacity"
      >
        {selected}
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 w-full mt-1 bg-card text-foreground shadow-lg rounded-md z-10 py-2">
          {/* Option to clear filter */}
          <button
            onClick={() => handleSelect("Filter by Region")}
            className="block w-full text-left px-5 py-2 hover:bg-background/50 transition-colors"
          >
            All Regions
          </button>
          
          {regions.map((region) => (
            <button
              key={region}
              onClick={() => handleSelect(region)}
              className="block w-full text-left px-5 py-2 hover:bg-background/50 transition-colors"
            >
              {region}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterBar;