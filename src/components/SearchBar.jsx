import React from "react";

const SearchBar = ({ setQuery }) => {
  return (
    <div className="relative w-full md:max-w-1/2 xl:max-w-1/3 shadow-lg rounded-sm bg-card text-foreground">
      <div className="absolute inset-y-0 left-0 pl-8 flex items-center pointer-events-none">
        <svg
          className="h-5 w-5 text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>

      <input
        type="text"
        placeholder="Search for a country..."
        className="w-full pl-20 pr-4 py-4 bg-inherit border-none rounded-md focus:outline-none placeholder-gray-400 text-sm font-medium"
        onChange={(e) => setQuery(e.target.value.toLowerCase())}
      />
    </div>
  );
};

export default SearchBar;