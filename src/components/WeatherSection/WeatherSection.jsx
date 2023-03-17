import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import './WeatherSection.css'

function DisplayWeather() {
  const weather = useSelector((store) => store.weatherData);
  const [heading, setHeading] = useState('Functional Component');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({type:'FETCH_WEATHER_DATA'})
    }, []);
  
  
  return (
    <div className='weather-box'>
      <h2>Weather</h2>
      {JSON.stringify(weather)}
    </div>
  );
}

export default DisplayWeather;