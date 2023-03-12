import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
// READ
function* fetchRecentActivity() {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };

    // config allow the server session to recognize the user
    // If a user is logged in, this will return their information
    // from the server session (req.user)
    const response = yield axios.get('/api/runs', config);

    // now that the session has given us a user object
    // with an id and username set the client-side user object to let
    // the client-side code know the user is logged in
    yield put({ type: 'SET_RECENT_ACTIVITY', payload: response.data });
  } catch (error) {
    console.log('Run list get request failed', error);
    alert('Something went wrong');
  }
}

function* fetchWeeklyRuns() {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };
    const response = yield axios.get('/api/runs/weekly', config);
    yield put({ type: 'SET_WEEKLY_RUN_LIST', payload: response.data });
  } catch (error) {
    console.log('Run list get request failed', error);
    alert('Something went wrong');
  }
}

function* addRun(action) {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };
    const response = yield axios.post('/api/runs', action.payload, config);
    yield put({ type: 'FETCH_RECENT_ACTIVITY'});
    yield put({ type: 'FETCH_WEEKLY_RUN_LIST'});
  } catch (error) {
    console.log('Add run failed', error);
    alert('Something went wrong');
  }
}

function* deleteRun(action) {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };
    const response = yield axios.delete(`/api/runs/${action.payload}`, config);
    yield put({ type: 'FETCH_RECENT_ACTIVITY'});
    yield put({ type: 'FETCH_WEEKLY_RUN_LIST'});
  } catch (error) {
    console.log('Delete run failed', error);
    alert('Something went wrong');
  }
}

function* updateRun(action) {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };
    console.log('in updateRun', action.payload, action.payload.id)
    const response = yield axios.put(`/api/runs/${action.payload.id}`, action.payload, config)
      console.log('put request success');
    yield put({ type: 'FETCH_RECENT_ACTIVITY'});
    yield put({ type: 'FETCH_WEEKLY_RUN_LIST'});
  } catch (error) {
    console.log('Set edit run failed', error);
    alert('Something went wrong');
  }
}


function* runSaga() {
  yield takeLatest('FETCH_RECENT_ACTIVITY', fetchRecentActivity);
  yield takeLatest('ADD_RUN', addRun);
  yield takeLatest('DELETE_RUN', deleteRun);
  yield takeLatest('UPDATE_RUN', updateRun);
  yield takeLatest('FETCH_WEEKLY_RUN_LIST', fetchWeeklyRuns);
}

export default runSaga;