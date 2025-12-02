import React from "react";
import { useParams, Link } from "react-router-dom";
import { countryDetails } from "../../constants";
import { ArrowLeft } from "lucide-react";

const CountryDetail = () => {
  const { countryName } = useParams();
  const decodedName = decodeURIComponent(countryName || "");
  
  const country = countryDetails.find(
    (c) => c.name.toLowerCase() === decodedName.toLowerCase()
  );

  const getCountryNameByCode = (code) => {
    const found = countryDetails.find((c) => c.alpha3Code === code);
    return found ? found.name : code;
  };

  if (!country) {
    return (
      <div className="pt-32 px-6 md:px-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Country not found</h2>
        <Link to="/" className="inline-flex items-center gap-2 bg-card px-6 py-2 rounded shadow">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-24 xl:pt-32 px-6 md:px-16 min-h-screen pb-10">
      <Link
        to="/"
        className="inline-flex items-center gap-2 bg-card text-foreground px-8 py-2 rounded-sm shadow-md hover:opacity-75 transition-opacity mb-16"
      >
        <ArrowLeft className="h-4 w-4" />
        Back
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <img
          src={country.flags.svg}
          alt={`Flag of ${country.name}`}
          className="w-full h-auto object-cover shadow-lg rounded-md"
        />
        <div className="text-foreground">
          <h1 className="text-3xl font-extrabold mb-8">{country.name}</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div className="space-y-2">
              <p><span className="font-semibold">Native Name:</span> {country.nativeName}</p>
              <p><span className="font-semibold">Population:</span> {country.population.toLocaleString()}</p>
              <p><span className="font-semibold">Region:</span> {country.region}</p>
              <p><span className="font-semibold">Sub Region:</span> {country.subregion}</p>
              <p><span className="font-semibold">Capital:</span> {country.capital}</p>
            </div>
            <div className="space-y-2">
              <p><span className="font-semibold">Top Level Domain:</span> {country.topLevelDomain?.join(", ")}</p>
              <p><span className="font-semibold">Currencies:</span> {country.currencies?.map((c) => c.name).join(", ")}</p>
              <p><span className="font-semibold">Languages:</span> {country.languages?.map((l) => l.name).join(", ")}</p>
            </div>
          </div>
          {country.borders && (
            <div className="flex flex-col md:flex-row items-start gap-4">
              <span className="font-semibold text-lg whitespace-nowrap">Border Countries:</span>
              <div className="flex flex-wrap gap-2">
                {country.borders.map((borderCode) => {
                  const borderName = getCountryNameByCode(borderCode);
                  return (
                    <Link 
                      to={`/${borderName}`}
                      key={borderCode} 
                      className="bg-card px-6 py-1 rounded-sm shadow-sm text-sm hover:scale-105 transition-transform duration-300"
                    >
                      {borderName}
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CountryDetail;