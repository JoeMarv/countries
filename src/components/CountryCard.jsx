import React from "react";
import { countryDetails } from "../../constants";

const CountryCard = () => {
  return (
    <section className="grid xl:grid-cols-4 gap-8 xl:gap-4 ">
      {countryDetails.map((country) => (
        <button className="bg-card shadow-lg rounded-sm" key={country.name}>
          <img
            src={country.flags.svg}
            alt={country.name}
            loading="lazy"
            className="rounded-t-sm"
          />

          <div className="text-left px-4">
            <h2 className="font-extrabold">{country.name}</h2>

            <div>
              <div className="flex justify-start gap-1">
                <h3 className="font-semibold">Population:{""}</h3>
                <p>{country.population.toLocaleString()}</p>
              </div>

              <div className="flex justify-start gap-1">
                <h3 className="font-semibold">Region:{""} </h3>
                <p>{country.region}</p>
              </div>

              <div className="flex justify-start gap-1">
                <h3 className="font-semibold">Capital:{""}</h3>
                <p>{country.capital}</p>
              </div>
            </div>
          </div>
        </button>
      ))}
    </section>
  );
};

export default CountryCard;
