import axios from 'axios';
import React, { useState } from 'react';
import {useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';


function AddRunPage() {
  //const store = useSelector((store) => store);
  const history = useHistory();
  const [runName, setRunName] = useState('');
  const [runDate, setRunDate] = useState('');
  const [runTime, setRunTime] = useState('');
  const [runDistance, setRunDistance] = useState('');
  const [runDuration, setRunDuration] = useState('');
  const [runDifficulty, setRunDifficulty] = useState('');
  const [runNotes, setRunNotes] = useState('');

  const addNewRun = (event) => {
    event.preventDefault();
    axios.post('/api/runs', 
      {name: runName,
      date: runDate,
      time: runTime,
      distance: runDistance,
      duration: runDuration,
      difficulty: runDifficulty,
      notes: runNotes})
    .then(() => {
        history.push('/homepage');
        //edit later to be summary page
    }).catch((error) => {
        console.log(error);
        alert('Something went wrong')
    })
  }

  return (
    <div>
      <h2>Add Run</h2>
      <form onSubmit={addNewRun}>
        <div>
          <label for="name">Name:</label> 
          <input value={runName} onChange={(event) => setRunName(event.target.value)} type="text"/>
        </div>
        <div>
          <label for="date">Date:</label> 
          <input value={runDate} onChange={(event) => setRunDate(event.target.value)} type="date"/>
        </div>
        <div>
          <label for="time">Time:</label> 
          <input value={runTime} onChange={(event) => setRunTime(event.target.value)} type="time"/>
        </div>
        <div>
          <label for="distance">Distance (mi):</label> 
          <input value={runDistance} onChange={(event) => setRunDistance(event.target.value)} type="number"/>
        </div>
        <div>
          <label for="duration">Duration (min):</label> 
          <input value={runDuration} onChange={(event) => setRunDuration(event.target.value)} type="number"/>
        </div>
        <div>
          {/* dynamic slider */}
          <label for="difficulty">Difficulty:</label> 
          <input value={runDifficulty} onChange={(event) => setRunDifficulty(event.target.value)} type="range" min="1" max="10"/>
          {runDifficulty}
        </div>
        <div>
          <label for="notes">Notes (optional):</label> 
          <input value={runNotes} onChange={(event) => setRunNotes(event.target.value)} type="text"/>
        </div>
        <input type="submit"/>
      </form>
    </div>
  );
}

export default AddRunPage;