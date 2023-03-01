import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useDispatch, useSelector} from 'react-redux';
import { useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import './DashboardPage.css'


function DashboardPage () {
  // add-in
  const [runList, setRunList] = useState([]);
  const dispatch = useDispatch();
  const runs = useSelector(store => store.runs);
  const history = useHistory();

  useEffect(() => {
    //dispatch({ type: 'FETCH_RUNS' });
    fetchRuns();
    }, []);

  const fetchRuns = () => {
    axios.get('api/runs')
      .then((response) => {
        setRunList(response.data);
      }).catch(error => {
        console.log('ERROR: Get all runs', error);
        alert('Something is wrong');
      });
  }

  const editRun = () => {
    // get data from reducer
    history.push('/edit-run');
  }


  const deleteRun = (id) => {
    console.log('in deleteRun')
    if (confirm("Are you sure you want to delete this run?")) {
      axios.delete(`/api/runs/${id}`)
        .then(response => {
          console.log('successful delete', response)
          fetchRuns();
        }).catch(err => {
          console.log('error with making delete', err)
    });
    }
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
              <button className="indv-run-btn" onClick={() => editRun(run.id)}>Edit</button>
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