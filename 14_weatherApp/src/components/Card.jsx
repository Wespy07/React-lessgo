import React from 'react'
import { useWeather } from '../context/Weather'

function Card() {
    const weather = useWeather()
    // console.log(weather)

    if (!weather.searchTriggered) {
        return null;
    }

    return (
        <>
            {weather.data === null ? (
                <div className='card'>Loading...</div>
            ) : (
                <div className='card'>
                    <img src={weather?.data?.condition?.icon_url} alt="Weather Icon" />
                    <h2>{weather?.data?.temperature?.current}°C</h2>
                    <h3>{weather?.data?.city}, {weather?.data?.country}</h3>
                </div>
            )}
        </>
    );
}


export default Card