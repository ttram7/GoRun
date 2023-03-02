import React, { useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';

function EditRunPage() {
  const editRun = useSelector((store) => store.editRun)
  const dispatch = useDispatch();
  const history = useHistory();
  

  const [editRunName, setEditRunName] = useState(editRun.name)
  const [editRunDate, setEditRunDate] = useState(editRun.date);
  // const [editRunTime, setEditRunTime] = useState(editRun.time);
  // const [editRunDistance, setEditRunDistance] = useState(editRun.distance);
  // const [editRunDuration, setEditRunDuration] = useState(editRun.duration);
  // const [editRunDifficulty, setEditRunDifficulty] = useState(editRun.difficulty);
  // const [editRunNotes, setEditRunNotes] = useState(editRun.notes);

  const [state, setState] = useState()

  const id = editRun.id;
  console.log(id);

  // const handleOnChange = (event) => {
  //   dispatch({type: 'EDIT_ONCHANGE', payload: {property: 'name', value: event.target.value}})
  // }

  const handleSubmit = (event) => {
    // const updateRun =
    //   {name: editRunName,
    //   date: editRunDate,
    //   time: editRunTime,
    //   distance: editRunDistance,
    //   duration: editRunDuration,
    //   difficulty: editRunDifficulty,
    //   notes: editRunNotes}
    console.log(editRunName, editRunDate, id)
    dispatch({type:'UPDATE_RUN', payload:
      {name: editRunName, id, history}});
    history.push('/dashboard');
  }

  return (
    <div>
      <h2>Edit Run</h2>
      <div className="edited-run" key={editRun.id}>
              {new Date(editRun.date).toLocaleDateString('en-US')}
              <br/>
              {editRun.name}
              <br/>
              {editRun.distance} miles
              <br/>
              {editRun.duration}:00
    </div>
    <form onSubmit={handleSubmit}>
        {/* <div>
          <label htmlFor="name">Name:</label> 
          <input name="name"value={editRun.name} onChange={(event) => handleOnChange(event)} type="text"/>
        </div> */}
        <div>
          <label for="name">Name:</label> 
          <input value={editRunName} onChange={(event) => setEditRunName(event.target.value)} type="text"/>
        </div>
        {/* <div>
          <label htmlFor="date">Date:</label> 
          <input name="date" value={editRun.date} onChange={(event) => handleOnChange(event)} type="date"/>
        </div> */}
        <div>
          <label for="date">Date:</label> 
          <input value={editRunDate} onChange={(event) => setEditRunDate(event.target.value)} type="date"/>
        </div>
        {/*}
        <div>
          <label for="time">Time:</label> 
          <input value={editRunTime} onChange={(event) => setEditRunTime(event.target.value)} type="time"/>
        </div>
        <div>
          <label for="distance">Distance (mi):</label> 
          <input value={editRunDistance} onChange={(event) => setEditRunDistance(event.target.value)} type="number"/>
        </div>
        <div>
          <label for="duration">Duration (min):</label> 
          <input value={editRunDuration} onChange={(event) => setEditRunDuration(event.target.value)} type="number"/>
        </div>
        <div>
          {/* <label for="difficulty">Difficulty:</label> 
          <input value={editRunDifficulty} onChange={(event) => setEditRunDifficulty(event.target.value)} type="range" min="1" max="10"/>
          {editRunDifficulty}
        </div>
        <div>
          <label for="notes">Notes (optional):</label> 
          <input value={editRunNotes} onChange={(event) => setEditRunNotes(event.target.value)} type="text"/>
      </div> */}
        <input type="submit"/> 
      </form>
    </div>
  );
}

export default EditRunPage;