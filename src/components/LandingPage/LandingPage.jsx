import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';
import Button from '@mui/material/Button';


// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';
import MUIButton from '../MUIButton/MUIButton';

function LandingPage() {
  const [heading, setHeading] = useState('Welcome');
  const history = useHistory();

  const onLogin = (event) => {
    history.push('/login');
  };

  return (
    <div className="container">
      <h2>{heading}</h2>
      {/* <RegisterForm /> */}
      <div className='inner-container'>
        <div className='landing-btns'>
          {/* <div className='register-btn'>
            <Button variant="primary" size="lg">Register</Button>

          </div>
          <Button variant="primary" onClick={onLogin}>Login</Button> */}
          <button className="btn btn_sizeFull" onClick={onLogin}>
            Login
          </button>

        </div>

      
      </div>
        
       
        </div>
  );
}

export default LandingPage;
