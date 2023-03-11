const weeklyRunList = (state = [], action) => {
    if (action.type === 'SET_WEEKLY_RUN_LIST') {
      return action.payload;
    }
    return state;
  }
  export default weeklyRunList;