import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


function* fetchWeatherData() {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };
    const response = yield axios.get('/api/weather', config);
    yield put({ type: 'SET_WEATHER_DATA', payload: response.data });
  } catch (error) {
    console.log('Weather data get request failed', error);
    alert('Something went wrong');
  }
}

function* weatherSaga() {
    yield takeLatest('FETCH_WEATHER_DATA', fetchWeatherData);
  }
  
  export default weatherSaga;