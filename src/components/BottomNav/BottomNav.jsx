import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import AddIcon from '@mui/icons-material/Add';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';
import './BottomNav.css'


function BottomNav() {
    return(
        <div className='bottom-nav'>
        <BottomNavigation sx={{width:'100%'}}>
            <Link className='bottom-nav-icon' to="/dashboard">
                <BottomNavigationAction label="Home" icon={<HomeIcon color="primary"/>} />
            </Link>
            <Link className='bottom-nav-icon' to="/add-run">
                <BottomNavigationAction label="Add" icon={<AddIcon color="primary"/>} />
            </Link>
            <Link className='bottom-nav-icon' to="/stats">
                <BottomNavigationAction label="Progress" icon={<LeaderboardIcon color="primary"/>} />
            </Link>
            <Link className='bottom-nav-icon' to="/about">
                <BottomNavigationAction label="Account" icon={<AccountCircleIcon color="primary"/>} />
            </Link>
        </BottomNavigation>
        </div>
       
    )
}

export default BottomNav;