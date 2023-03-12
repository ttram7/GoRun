const monthlyRunList = (state = [], action) => {
    if (action.type === 'SET_MONTHLY_RUN_LIST') {
      return action.payload;
    }
    return state;
  }
  export default monthlyRunList;