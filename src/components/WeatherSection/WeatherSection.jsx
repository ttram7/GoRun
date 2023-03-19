import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import './WeatherSection.css'
import WbSunnyIcon from '@mui/icons-material/WbSunny';

function DisplayWeather() {
    const dispatch = useDispatch();
    const tempData = useSelector((store) => store.weatherData);
    const weatherDescription = useSelector((store) => store.weatherDescription);
    const date = new Date().toDateString();
    
    useEffect(() => {
        dispatch({type:'FETCH_WEATHER_DATA'});
        dispatch({type:'FETCH_WEATHER_DESCRIPTION'})
        // setWeather();
    }, []);
    
    // const setWeather = () => {
    //     dispatch({type:'FETCH_WEATHER_DESCRIPTION'});

    // }
    
    const convertToFahrenheit = (temp) => {
        let tempFahrenheit = Math.round((temp - 273.15) * 1.8 + 32);
        return tempFahrenheit
    }
    // console.log(weatherDescription[0].icon)
    
  return (
    <div className='weather-box'>
        <div className='info-text'>
            {tempData.temp && <p>{date}</p>}
        </div>
        <div className='lower-portion'>
            <div className='weather-icon'>
                {/* <WbSunnyIcon /> */}
                {weatherDescription.map(weather => {
                    return (
                        // weather.icon,
                        <img src ={`http://openweathermap.org/img/w/${weather.icon}.png`} alt="wthr img" />
                    )})}
            </div>
            <div>
                {tempData.temp && <p>Temp: {convertToFahrenheit(tempData.temp)}°F</p>}
              
                {weatherDescription.map(weather => {
                    return (
                        // weather.icon,
                        <img src ={`http://openweathermap.org/img/w/${weather.icon}.png`} alt="wthr img" />,
                        <p>{weather.main}</p>
                    )})}

                {/* <p>{weatherDescription[0].main}</p> */}
                {/* {JSON.stringify(weatherDescription[0].description)} */}
            </div>
        </div>
    </div>
  );
}

export default DisplayWeather;