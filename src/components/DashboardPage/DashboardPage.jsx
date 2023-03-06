import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useDispatch, useSelector} from 'react-redux';
import { useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';
import './DashboardPage.css'

// displays recent activity
function DashboardPage () {
  const runList = useSelector(store => store.runList);
  const dispatch = useDispatch();
  const history = useHistory();

  // shows most recent run data on page load
  useEffect(() => {
    dispatch({type: 'FETCH_RUN_LIST'});
    }, []);

  // sends run that's being edited to editReducer
  // navigates user to EditPage
  const editRun = (run) => {
    // dispatch data to reducer
    console.log('in editRun:', run);
    dispatch({type: 'SET_EDIT_RUN', payload: run})
    history.push('/edit-run');
  }

  // displays alert message asking if user wants to delete run
  // if click 'cancel' run won't be deleted
  // if click 'ok', run will be deleted from their data
  const deleteRun = (id) => {
    console.log('in deleteRun')
    if (confirm("Are you sure you want to delete this run?")) {
      dispatch({type: 'DELETE_RUN', payload: id});
    };
    }

  // displays most recent runs in runList
  // each run has an 'edit' and 'delete' btn
  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>
      <div className="run-list">
        {runList.map(run => {
          return (
            <div className="indv-run-block" key={run.id}>
              {new Date(run.date).toLocaleDateString('en-US')}
              <br/>
              {run.name}
              <br/>
              {run.distance} mi.
              <br/>
              {run.duration}:00
              <button className="indv-run-btn" onClick={() => deleteRun(run.id)}>Delete</button>
              <button className="indv-run-btn" onClick={() => editRun(run)}>Edit</button>
            </div>
          );
        })}
      </div>
      {/* <LogOutButton className="btn" /> */}
    </div>
  );
}

// this allows us to use <App /> in index.js
export default DashboardPage;