const weatherDescription = (state = [], action) => {
    if (action.type === 'SET_WEATHER_DESCRIPTION') {
      return action.payload;
    }
    return state;
  }
  export default weatherDescription;