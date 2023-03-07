import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import BottomNav from '../BottomNav/BottomNav';
import './Nav.css';
import { useSelector } from 'react-redux';

// import { BottomNavigation, BottomNavigationAction } from '@mui/material';
// import AddIcon from '@mui/icons-material/Add';

function Nav() {
  const user = useSelector((store) => store.user);

  return (
    <>
    <div className="top-nav">
      <Link to="/dashboard">
        <h2 className="top-nav-title">Go Run</h2>
      </Link>
      <div>
        {/* If no user is logged in, show these links */}
        {!user.id && (
          // If there's no user, show login/registration links
          <Link className="navLink" to="/login">
            Login / Register
          </Link>
        )}

        {/* If a user is logged in, show these links */}
        {user.id && (
          <>
            {/* <Link className="navLink" to="/dashboard">
              Home
            </Link>

            <Link className="navLink" to="/add-run">
              Add Run
            </Link>

            <Link className="navLink" to="/info">
              Info Page
            </Link> */}

            <LogOutButton className="navLink" />
          </>
        )}

        {/* <Link className="navLink" to="/about">
          About
        </Link> */}
      </div>
    </div>
    <div className="bottom-nav">
      {/* <Link className="navLink" to="/dashboard">
        Home
      </Link> */}
      <BottomNav/>
      {/* <BottomNavigation sx={{width:'100%'}}>
            <BottomNavigationAction label="Add" icon={<AddIcon />} />
        </BottomNavigation> */}
    </div>
    </>
  );
}

export default Nav;
