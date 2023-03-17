import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import './WeatherSection.css'
import WbSunnyIcon from '@mui/icons-material/WbSunny';

function DisplayWeather() {
    const tempData = useSelector((store) => store.weatherData.main);
    const dispatch = useDispatch();
    const date = new Date().toDateString();
    
    useEffect(() => {
        dispatch({type:'FETCH_WEATHER_DATA'})
    }, []);
    
    const convertToFahrenheit = (temp) => {
        let tempFahrenheit = Math.round((temp - 273.15) * 1.8 + 32);
        return tempFahrenheit
    }
    console.log(tempData)
    
  return (
    <div className='weather-box'>
        <div className='weather-icon'>
            <WbSunnyIcon />
        </div>
        <div className='info-text'>
            <p>{date}</p>
            <p>Temp: {convertToFahrenheit(tempData.temp)}°F</p>
            <p>Feels like: {convertToFahrenheit(tempData.feels_like)}°F</p>
        </div>
      
    </div>
  );
}

export default DisplayWeather;