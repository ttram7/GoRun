const editRun = (state = {}, action) => {
    if (action.type === 'SET_EDIT_RUN') {
      return action.payload;
    } else if (action.type === 'EDIT_ONCHANGE') {
      return {...state, [action.payload.property]:action.payload.value}
    }
    return state;
  }
 
export default editRun;