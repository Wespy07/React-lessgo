import { createContext, useContext, useState } from "react";
import fetchWeatherData from "../api/Index";


const WeatherContext = createContext(null)

export const useWeather = () => {
    return useContext(WeatherContext)
}

export const WeatherProvider = (props) => {
    const [data, setData] = useState(null)
    const [searchCity, setSearchCity] = useState(null)
    const [searchTriggered, setSearchTriggered] = useState(false);

    const fetchData = async () => {
        if (searchCity) {
          const response = await fetchWeatherData(searchCity);
          setData(response);
          setSearchTriggered(true); 
        }
      };

      return (
        <WeatherContext.Provider value={{ searchCity, data, setSearchCity, fetchData, searchTriggered }}>
          {props.children}
        </WeatherContext.Provider>
      );
}