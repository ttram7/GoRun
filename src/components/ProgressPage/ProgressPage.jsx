import React, { useState } from 'react';
import {useSelector} from 'react-redux';
import StatsGraph from '../StatsGraph/StatsGraph';

function ProgressPage() {
  //const store = useSelector((store) => store);
  //const [heading, setHeading] = useState('Functional Component');
  
  return (
    <div>
      <h2>Progress Page</h2>
      <StatsGraph />
    </div>
  );
}

export default ProgressPage;