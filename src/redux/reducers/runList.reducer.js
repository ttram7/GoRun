const runList = (state = [], action) => {
  if (action.type === 'SET_RUN_LIST') {
    return action.payload;
  }
  return state;
}
export default runList;