import React from 'react'
import { useWeather } from '../context/Weather'

function Input() {

    const weather = useWeather()
    // console.log(weather) 


    return (
        <input type="text" 
        placeholder='Search here'
        className='input-field'
        value={weather.searchCity || ''} 
        onChange={(e) => weather.setSearchCity(e.target.value)} />
    )
}

export default Input