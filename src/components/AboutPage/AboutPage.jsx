import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import BottomNav from '../BottomNav/BottomNav';
import { useHistory } from 'react-router-dom';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  const history = useHistory();
  const logOut = () => {
    history.push('/login');
  }
  return (
    <div className="container">
      <div>
        <h2>About</h2>
        <p>Technologies used:</p>
        <ul>
          <li>React</li>
          <li>Node</li>
          <li>Express</li>
          <li>React Chart js 2</li>
          <li>Material UI</li>
          <li>Sweet Alert</li>
        </ul>
        <br />
        <p>Acknowledgements</p>
        <p>I'd like to thank all the instructors and staff at Prime, my classmates, and my friends and family.</p>
      </div>
      <div>
      {/* <LogOutButton className="navLink" onClick={() => logOut()} /> */}
      </div>
      <BottomNav />
    </div>
  );
}

export default AboutPage;
