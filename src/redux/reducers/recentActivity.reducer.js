const recentActivity = (state = [], action) => {
  if (action.type === 'SET_RECENT_ACTIVITY') {
    return action.payload;
  }
  return state;
}
export default recentActivity;