import React, { useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';
import './AddRunPage.css'
import BottomNav from '../BottomNav/BottomNav';
import { AutoFixNormalOutlined } from '@mui/icons-material';

function AddRunPage() {
  const history = useHistory();
  const dispatch = useDispatch();

  const [runName, setRunName] = useState('');
  const [runDate, setRunDate] = useState('');
  const [runTime, setRunTime] = useState('');
  const [runDistance, setRunDistance] = useState('');
  const [runDuration, setRunDuration] = useState('');
  const [runDifficulty, setRunDifficulty] = useState('');
  const [runNotes, setRunNotes] = useState('');

  // dispatch user inputs to post saga
  // when post request complete, navigate user to DashboardPage 
  const addNewRun = (event) => {
    event.preventDefault();
    
    dispatch({type: 'ADD_RUN', payload: 
      {name: runName,
      date: runDate,
      time: runTime,
      distance: runDistance,
      duration: runDuration,
      difficulty: runDifficulty,
      notes: runNotes}});
    history.push('/dashboard');
  }

  const autoFill = () => {
    console.log('in autofill onclick function');
    setRunName('Easy Jog');
    setRunDate('2023-03-15');
    setRunTime('11:00');
    setRunDistance('2');
    setRunDuration('25');
    setRunDifficulty('3');
    setRunNotes('slippery outside');
  }

  return (
    <>
    <h2 onClick = {() => autoFill()}>Add Run</h2>
      <div className='add-run-container'>
      
      <form onSubmit={addNewRun}>
        <div>
          <label htmlFor="name">Name:</label> 
          <input value={runName} onChange={(event) => setRunName(event.target.value)} type="text"/>
        </div>
        <div>
          <label htmlFor="date">Date:</label> 
          <input value={runDate} onChange={(event) => setRunDate(event.target.value)} type="date"/>
        </div>
        <div>
          <label htmlFor="time">Time:</label> 
          <input value={runTime} onChange={(event) => setRunTime(event.target.value)} type="time"/>
        </div>
        <div>
          <label htmlFor="distance">Distance (mi):</label> 
          <input value={runDistance} onChange={(event) => setRunDistance(event.target.value)} type="number"/>
        </div>
        <div>
          <label htmlFor="duration">Duration (min):</label> 
          <input value={runDuration} onChange={(event) => setRunDuration(event.target.value)} type="number"/>
        </div>
        <div>
          {/* dynamic slider */}
          <label htmlFor="difficulty">Difficulty:</label> 
          <input value={runDifficulty} onChange={(event) => setRunDifficulty(event.target.value)} type="range" min="1" max="10"/>
          {runDifficulty}
        </div>
        <div>
          <label htmlFor="notes">Notes (optional):</label> 
          <input value={runNotes} onChange={(event) => setRunNotes(event.target.value)} type="text"/>
        </div>
        <input className="btn" type="submit" value="Save" />
      </form>
    </div>
    <BottomNav/>
    </>
  );
}

export default AddRunPage;