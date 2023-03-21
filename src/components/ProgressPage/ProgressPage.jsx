import React, { useState } from 'react';
import {useSelector} from 'react-redux';
import BottomNav from '../BottomNav/BottomNav';
import StatsGraph from '../StatsGraph/StatsGraph';

function ProgressPage() {
  //const store = useSelector((store) => store);
  //const [heading, setHeading] = useState('Functional Component');
  
  return (
    <div>
      <StatsGraph />
      <BottomNav />
    </div>
  );
}

export default ProgressPage;