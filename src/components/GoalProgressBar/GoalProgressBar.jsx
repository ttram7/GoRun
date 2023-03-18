import React, { useState } from 'react';
import {useSelector} from 'react-redux';
import LinearProgress from '@mui/material/LinearProgress';
import './GoalProgressBar.css'

function GoalProgressBar(props) {
  const store = useSelector((store) => store);
  const [progress, setProgress] = useState(0);
  
  return (
      <div className='progress-bar'>
        <p>Goal: 5 / 10 miles</p>
        <LinearProgress variant="determinate"style={{padding: "5px"}} value={progress} />
      </div>
  );
}

export default GoalProgressBar;