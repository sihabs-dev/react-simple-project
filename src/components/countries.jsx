import { use, useState } from "react";
import Country from "./country";

const countries = ({ countriesPromise }) => {
  const countriesData = use(countriesPromise);
  const countries = countriesData.countries;
  const [visitedCountry, setVisitedCountry] = useState([]);
  const handleVisitedCountry = (country) => {
    console.log(country.name.common);
    const isExit = visitedCountry.some(
      (item) => item.name.common === country.name.common,
    );
    if (!isExit) {
      setVisitedCountry((prev) => [...prev, country]);
    }
  };
  return (
    <div>
      <div className="formDiv">
        <form action="" className="form">
          <input type="text" placeholder="search country" />
          <button>Search</button>
        </form>
      </div>
      <h2 className="heading2">
        Countries : {countries.length} &nbsp;&nbsp;&nbsp;&nbsp; Visited :{" "}
        {visitedCountry.length}
        &nbsp;&nbsp;&nbsp;&nbsp; Not-Visited :{" "}
        {countries.length - visitedCountry.length}
      </h2>
      <div className="cardSection">
        {countries.map((country) => (
          <Country
            key={country.ccn3.ccn3}
            handleVisitedCountry={handleVisitedCountry}
            country={country}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default countries;
