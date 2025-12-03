import React, { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

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
        className="flex items-center justify-between w-full bg-card text-foreground px-5 py-4 shadow-md rounded-md md:rounded-sm hover:opacity-80 transition-opacity"
      >
        {selected}
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute top-full left-0 w-full mt-1 bg-card text-foreground shadow-lg rounded-md md:rounded-sm z-10 overflow-hidden"
          >
            <div className="py-2">
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
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FilterBar;