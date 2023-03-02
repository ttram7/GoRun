const editRun = (state = {}, action) => {
    if (action.type === 'SET_EDIT_RUN') {
      return action.payload;
    }
    return state;
  }
 
export default editRun;