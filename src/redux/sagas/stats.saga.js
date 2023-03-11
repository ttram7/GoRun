import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


// function* fetchWeeklyRuns() {
//   try {
//     const config = {
//       headers: { 'Content-Type': 'application/json' },
//       withCredentials: true,
//     };
//     const response = yield axios.get('/api/week-runs', config);
//     yield put({ type: 'SET_WEEKLY_RUN_LIST', payload: response.data });
//   } catch (error) {
//     console.log('Run list get request failed', error);
//     alert('Something went wrong');
//   }
// }

// function* statsSaga() {
//     // yield takeLatest('FETCH_WEEKLY_RUN_LIST', fetchWeeklyRuns);
//   }
  
//   export default statsSaga;