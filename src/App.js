import React, { useEffect, useState } from "react";
import Searchbox from "./components/Searchbox";
import Weather from "./components/Weather";
import "./styles.css";
import Forecast from "./components/Forecast";
export default function App() {
  const [city, setCity] = useState("Mumbai");
  const [fetchCity, setfetchCity] = useState("Mumbai");

  const searchcity = (event) => {
    var curr = event.target.value;
    return setCity(curr);
  };
  const search = () => {
    return setfetchCity(city);
  };
  return (
    <div className="App">
      <Searchbox
        searchCity={searchcity}
        Search={search}
        city={city}
        fetchCity={fetchCity}
      />
      <Weather fetchCity={fetchCity} city={city} />
      <Forecast fetchCity={fetchCity} />
    </div>
  );
}
