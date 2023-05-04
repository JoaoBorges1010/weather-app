import React, { useState } from "react";
import { GoSearch } from "react-icons/go";
import ModalChildren from "./ModalChildren";

const SearchBar = ({ weather, setQuery, units, setUnits }) => {
  const [city, setCity] = useState("");

  const handleSearchClick = () => {
    if (city !== "") setQuery({ q: city });
  };

  return (
    <div className="flex flex-row w-3/4 items-center justify-center space-x-1">
      <input
        value={city}
        onChange={(e) => setCity(e.currentTarget.value)}
        placeholder="search for city..."
        className="placeholder:text-white backdrop-blur-sm text-center rounded bg-transparent border-2 text-white h-10 text-2xl w-full font-light shadow-xl focus:outline-none capitalize"
      />
      <ModalChildren weather={weather}>
        <GoSearch
          onClick={handleSearchClick}
          size={40}
          className="text-white hover:scale-110 ease-in duration-200"
        />
      </ModalChildren>
    </div>
  );
};

export default SearchBar;
