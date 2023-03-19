import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useDispatch, useSelector} from 'react-redux';
import { useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';
import './DashboardPage.css'
import DisplayWeather from '../WeatherSection/WeatherSection';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import BottomNav from '../BottomNav/BottomNav';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import EditIcon from '@mui/icons-material/Edit';
import ClearIcon from '@mui/icons-material/Clear';
import swal from 'sweetalert';
import GoalProgressBar from '../GoalProgressBar/GoalProgressBar';


// displays recent activity
function DashboardPage () {
  const runList = useSelector(store => store.recentActivity);
  const dispatch = useDispatch();
  const history = useHistory();
  // const [progress, setProgress] = useState(0);
  // let progress = 50;

  // shows most recent run data on page load
  useEffect(() => {
    dispatch({type: 'FETCH_RECENT_ACTIVITY'});
    dispatch({type: 'FETCH_WEEKLY_RUN_LIST'});
    dispatch({type: 'FETCH_MONTHLY_RUN_LIST'});
    //dispatch({type: 'FETCH_WEEKLY_TOTAL'})
    }, []);

  // sends run that's being edited to editReducer
  // navigates user to EditPage
  const editRun = (run) => {
    // dispatch data to reducer
    console.log('in editRun:', run);
    dispatch({type: 'SET_EDIT_RUN', payload: run})
    history.push('/edit-run');
  }

  // displays alert message asking if user wants to delete run
  // if click 'cancel' run won't be deleted
  // if click 'ok', run will be deleted from their data
  const deleteRun = (id) => {
    console.log('in deleteRun')
    swal({
      title: "",
      text: "Are you sure you want to delete this run?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        dispatch({type: 'DELETE_RUN', payload: id});
      } else {
          return;
      }
    });
    }

  

  // displays most recent runs in runList
  return (
    <div className="dashboard-container">
      
      <div className='greeting'>
        <div className='circle-bar'>
        
        <CircularProgressbarWithChildren value={66}>
          <div style={{ fontSize: 20, marginTop: -5 }}>
            <strong>14 Days</strong> 
          </div>
        </CircularProgressbarWithChildren>
        </div> 
        {/* <h3>Hello, Tina!</h3> */}
        <div className='weather'>
          <DisplayWeather />
        </div>
      </div>
      {/* <GoalProgressBar />  */}
      {/* <div className='progress-bar'>
        <p>Goal: 5 / 10 miles</p>
        <LinearProgress variant="determinate"style={{padding: "5px"}} value={progress} />
      </div> */}
      <div className='countdown'>
        <h2>14 Days 5 Hours 30 Min</h2>
      </div>
      <div className="run-list">
        <h3>Recent Activity</h3>
        {runList.map(run => {
          return (
            <div className="indv-run-block" key={run.id}>
              <div className='inner-block'>
                <div className='difficulty-icon'>
                  {run.difficulty <= 4 &&
                  <WhatshotIcon fontSize="large" color='primary'/>
                  }
                  {run.difficulty > 4  && run.difficulty < 8 &&
                  <WhatshotIcon fontSize="large" color='secondary'/>
                  }
                  {run.difficulty > 7 &&
                  <WhatshotIcon fontSize="large" color='error'/>
                  }
                </div>
                <div className='inner-text'>
                  <p className='name-text'>{run.name}</p>
                  <p className='date-text'>{new Date(run.date).toLocaleDateString('en-US')}</p>
                  <p className='distance-duration-text'>{run.distance} mi.   {run.duration}:00</p>
                </div>
                <div className='inner-btns'>
                  <EditIcon color="primary" onClick={() => editRun(run)} />
                  <ClearIcon color="primary" onClick={() => deleteRun(run.id)} />
                </div> 
              </div>
            </div>
          );
        })}
      </div> 
      <BottomNav/>
    </div> 
  );
}

// this allows us to use <App /> in index.js
export default DashboardPage;