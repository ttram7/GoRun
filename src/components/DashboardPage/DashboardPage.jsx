import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useDispatch, useSelector} from 'react-redux';
import { useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import './DashboardPage.css'


function DashboardPage () {
  const runList = useSelector(store => store.runList);
  //const [runList, setRunList] = useState([]);
  const dispatch = useDispatch();
  
  const history = useHistory();

  useEffect(() => {
    //dispatch({ type: 'FETCH_RUNS' });
    fetchRuns();
    }, []);

  const fetchRuns = () => {
    dispatch({type: 'FETCH_RUN_LIST'});
    // axios.get('api/runs')
    //   .then((response) => {
    //     dispatch({type: 'SET_RUN_LIST', payload: response})
    //     //setRunList(response.data);
    //   }).catch(error => {
    //     console.log('ERROR: Get all runs', error);
    //     alert('Something is wrong');
    //   });
  }

  const editRun = (run) => {
    // dispatch data to reducer
    console.log('in editRun:', run);
    dispatch({type: 'SET_EDIT_RUN', payload: run})
    history.push('/edit-run');
  }


  const deleteRun = (id) => {
    console.log('in deleteRun')
    if (confirm("Are you sure you want to delete this run?")) {
      dispatch({type: 'DELETE_RUN', payload: id});
    };
    }


  return (
    <div className="container">
      <h2>Dashboard</h2>
      <div className="run-list">
        {runList.map(run => {
          return (
            <div className="indv-run" key={run.id}>
              {new Date(run.date).toLocaleDateString('en-US')}
              <br/>
              {run.name}
              <br/>
              {run.distance} miles
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