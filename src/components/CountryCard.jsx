import React from "react";
import { Link } from "react-router-dom";

const CountryCard = ({countries}) => {
  if (countries.length === 0) {
    return (
      <div className="text-center text-xl text-gray-500 mt-10">
        No countries found.
      </div>
    );
  }

  return (
    <section className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-10 md:gap-12 lg:gap-14 xl:gap-16 2xl:gap-18 py-6 relative">
      {countries.map((country) => (
        <Link to={`/${country.name}`} className="bg-card shadow-lg rounded-sm country-card " key={country.name}>
          <img
            src={country.flags.svg}
            alt={`Flag of ${country.name}`}
            loading="lazy"
            className="rounded-t-sm w-full h-40 object-cover "
          />

          <div className="text-left px-6 pt-4 pb-8">
            <h2 className="font-extrabold text-lg py-2">{country.name}</h2>

            <div>
              <div className="flex justify-start gap-1">
                <h3 className="font-semibold">Population:{""}</h3>
                <p className="text-muted-foreground">
                  {country.population.toLocaleString()}
                </p>
              </div>

              <div className="flex justify-start gap-1">
                <h3 className="font-semibold">Region:{""} </h3>
                <p className="text-muted-foreground">{country.region}</p>
              </div>

              <div className="flex justify-start gap-1">
                <h3 className="font-semibold">Capital:{""}</h3>
                <p className="text-muted-foreground">{country.capital}</p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </section>
  );
};

export default CountryCard;
