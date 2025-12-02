import React from "react";
import { countryDetails } from "../../constants";
import { Link } from "react-router-dom";

const CountryCard = () => {
  return (
    <section className="grid xl:grid-cols-4 gap-10 xl:gap-16 py-6 relative z-20">
      {countryDetails.map((country) => (
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
