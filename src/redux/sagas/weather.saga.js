import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


function* fetchWeatherData() {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };
    console.log('in weather saga')
    const response = yield axios.get('/api/weather', config);
    // console.log('got weather temp', response.data );
    yield put({ type: 'SET_WEATHER_DATA', payload: response.data });
  } catch (error) {
    console.log('Weather data get request failed', error);
    alert('Something went wrong');
  }
}

function* fetchWeatherDescription() {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };
    console.log('in weather description saga')
    const response = yield axios.get('/api/weather/description', config);
    console.log('got weather description', response.data );
    yield put({ type: 'SET_WEATHER_DESCRIPTION', payload: response.data });
  } catch (error) {
    console.log('Weather data get request failed', error);
    alert('Something went wrong');
  }
}

function* weatherSaga() {
    yield takeLatest('FETCH_WEATHER_DATA', fetchWeatherData);
    yield takeLatest('FETCH_WEATHER_DESCRIPTION', fetchWeatherDescription);
  }
  
  export default weatherSaga;