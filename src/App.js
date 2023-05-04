import React, { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import ModalChildren from "./components/ModalChildren";
import getFormattedWeatherData from "./services/WeatherServices";

const App = () => {
  const [query, setQuery] = useState({ q: "lisbon" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData({ ...query, units }).then((data) => {
        setWeather(data);
      });
    };

    fetchWeather();
  }, [query, units]);

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="">
        <h1 className="text-5xl font-light underline text-white m-5">
          Weather App
        </h1>
      </div>
      <SearchBar
        setQuery={setQuery}
        units={units}
        setUnits={setUnits}
        weather={weather}
      />
      {weather && <ModalChildren />}
    </div>
  );
};

export default App;
