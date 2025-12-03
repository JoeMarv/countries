import React, { useState } from "react";
import CountryCard from "./CountryCard";
import SearchBar from "./SearchBar";
import FilterBar from "./FilterBar";
import { countryDetails } from "../../constants";

const CountryContainer = () => {
  const [query, setQuery] = useState("");
  const [region, setRegion] = useState(""); // State for region filter

  const filteredCountries = countryDetails.filter((country) => {
    const search = query.toLowerCase();

    const matchesSearch = country.name.toLowerCase().includes(search);

    const matchesRegion =
      !region || region === "Filter by Region" || country.region === region;

    // Both must be true
    return matchesSearch && matchesRegion;
  });

  return (
    <section className="pt-22 xl:pt-26 px-10 md:px-12 lg:px-14 xl:px-16 2xl:px-18">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
        <SearchBar setQuery={setQuery} />
        <FilterBar setRegion={setRegion} className='z-40'/>
      </div>

      <CountryCard countries={filteredCountries} />
    </section>
  );
};

export default CountryContainer;
