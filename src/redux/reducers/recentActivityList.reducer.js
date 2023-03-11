const recentActivityList = (state = [], action) => {
  if (action.type === 'SET_RECENT_ACTIVITY_LIST') {
    return action.payload;
  }
  return state;
}
export default recentActivityList;