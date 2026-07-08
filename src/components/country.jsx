import { useState } from "react";

const country = ({ country, handleVisitedCountry }) => {
  const [visited, setVisited] = useState(false);
  function toggleVisited() {
    setVisited(!visited);
    handleVisitedCountry(country);
  }
  return (
    <div className={`card ${visited && "visited"}`}>
      <img src={country?.flags?.flags?.png} alt={country?.flags?.flags?.alt} />
      <p> {country.name.common}</p>
      <button onClick={toggleVisited}>
        {visited ? "visited" : "not-visited"}
      </button>
    </div>
  );
};

export default country;
