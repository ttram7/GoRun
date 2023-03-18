import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import BottomNav from '../BottomNav/BottomNav';
import './Nav.css';
import { useEffect, useState} from 'react';
import { useSelector } from 'react-redux';

// import { BottomNavigation, BottomNavigationAction } from '@mui/material';
// import AddIcon from '@mui/icons-material/Add';

function Nav() {
  const user = useSelector((store) => store.user);
  const location = useLocation();
  console.log('location:', location)

  return (
    <>
      <div className="top-nav">
        {location.pathname === '/dashboard' &&
          <h2 className="top-nav-title">Home</h2>
        }
        {location.pathname === '/add-run' &&
          <h2 className="top-nav-title">Add Run</h2>
        }
        {location.pathname === '/stats' &&
          <h2 className="top-nav-title">Progress</h2>
        }
        {location.pathname === '/about' &&
          <h2 className="top-nav-title">About</h2>
        }
      <div>
        {/* If no user is logged in, show these links */}
        {/* {!user.id && (
          // If there's no user, show login/registration links
          <Link className="navLink" to="/login">
            Login / Register
          </Link>
        )} */}

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
      {/* <BottomNav/> */}
      {/* <BottomNavigation sx={{width:'100%'}}>
            <BottomNavigationAction label="Add" icon={<AddIcon />} />
        </BottomNavigation> */}
    </div>
    </>
  );
}

export default Nav;
