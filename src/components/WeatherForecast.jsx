import React from "react";
import {
  formatToLocalTime,
  iconUrlFromCode,
} from "../services/WeatherServices";
import { TbTemperature } from "react-icons/tb";
import { FaWind } from "react-icons/fa";
import { IoWaterOutline } from "react-icons/io5";
import { BsSunrise, BsSunset, BsSun } from "react-icons/bs";

const WeatherForecast = ({
  weather: {
    formattedCurrentWeather: {
      name,
      country,
      details,
      timezone,
      dt,
      icon,
      temp,
      feels_like,
      humidity,
      speed,
      sunrise,
      sunset,
      temp_max,
      temp_min,
    },
  },
}) => {
  return (
    <div className="flex flex-col justify-center mx-auto">
      <h1 className="flex justify-center items-center text-center text-5xl font-bold text-white capitalize underline">
        {name}
        <span className="text-sm text-white bg-orange-400 p-2 font-medium ml-3 rounded-full">
          {country}
        </span>
      </h1>
      <div>
        <div className="flex items-center justify-center my-6">
          <p className="text-white text-xl font-extralight">
            {formatToLocalTime(dt, timezone)}
          </p>
        </div>
      </div>
      <div className="py-4 text-white text-3xl font-medium mx-auto">
        {details}
      </div>
      <div className="flex flex-row items-center justify-between text-white py-3">
        <img src={iconUrlFromCode(icon)} alt="/" className="w-20" />
        <p className="text-5xl">{`${temp.toFixed()}º`}</p>
        <div className="flex flex-col space-y-2">
          <div className="flex font-light text-sm items-center justify-center">
            <TbTemperature size={18} className="mr-1" />
            Real feel:
            <span className="font-medium ml-1">{`${feels_like.toFixed()}º`}</span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <IoWaterOutline size={18} className="mr-1" />
            Humidity:
            <span className="font-medium ml-1">{`${humidity.toFixed()}%`}</span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <FaWind size={18} className="mr-1" />
            wind:
            <span className="font-medium ml-1">{`${speed.toFixed()} km/h`}</span>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center space-x-2 text-white text-sm py-3">
        <BsSunrise />
        <p className="font-light">
          Rise:{" "}
          <span className="font-medium ml-1">
            {formatToLocalTime(sunrise, timezone, "hh:mm a")}
          </span>
        </p>
        <p className="font-light">|</p>
        <BsSunset />
        <p className="font-light">
          Set:{" "}
          <span className="font-medium ml-1">
            {formatToLocalTime(sunset, timezone, "hh:mm a")}
          </span>
        </p>
        <p className="font-light">|</p>
        <BsSun />
        <p className="font-light">
          Max:{" "}
          <span className="font-medium ml-1">{`${temp_max.toFixed()}º`}</span>
        </p>
        <p className="font-light">|</p>
        <BsSun />
        <p className="font-light">
          Min:{" "}
          <span className="font-medium ml-1">{`${temp_min.toFixed()}º`}</span>
        </p>
      </div>
    </div>
  );
};

export default WeatherForecast;
