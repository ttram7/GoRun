const runList = (state = [], action) => {
  if (action.type === 'SET_RUN_LIST') {
    return action.payload;
  }
  return state;
}



// const runsReducer = (state = [], action) => {
//     switch (action.type) {
//       case 'SET_RUNS':
//         return action.payload;
//       default:
//         return state;
//     }
//   };
  
  // user will be on the redux state at:
  // state.user
  export default runList;