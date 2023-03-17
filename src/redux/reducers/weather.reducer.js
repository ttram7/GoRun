const weatherData = (state = [], action) => {
    if (action.type === 'SET_WEATHER_DATA') {
      return action.payload;
    }
    return state;
  }
  export default weatherData;