//#region ⬇⬇ Document setup below: 
// ⬇ File setup: 
import './Question1.css';
// ⬇ Dependent functionality:
import { useDispatch } from 'react-redux';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, MenuItem, TextField } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
//#endregion ⬆⬆ Document setup above. 


export default function Question1() {
  //#region ⬇⬇ State variables below:
  const dispatch = useDispatch();
  const history = useHistory();
  const [feeling, setFeeling] = useState('');
  //#endregion ⬆⬆ State variables above. 


  //#region ⬇⬇ Event handlers below:
  /** ⬇ handleSubmit:
    * When clicked, this will send the feedback to the reducer and send the user to the next page. 
    */
  const handleSubmit = () => {
    console.log('In Question1 handleSubmit, feeling:', feeling);
    // ⬇ Bundling feedback into an object key:
    const feedback = { feeling: feeling }
    // ⬇ Sending user input to the reducer:
    dispatch({
      type: 'ADD_FEELING',
      payload: feedback
    }); // End dispatch
    // ⬇ Sending user to next page: 
    history.push('/question2');
  } // End handleSubmit
  //#endregion ⬆⬆ Event handles above. 


  // ⬇ Rendering:
  return (
    <div className="question-wrapper">
      <h2>How are you feeling today?</h2>
      <p>1 = Bad, 5 = Great</p>

      <div className="question-form">
        <form onSubmit={handleSubmit}>
          <Button disabled>
            <ArrowBackIcon />
          </Button>
          <TextField
            required
            select
            defaultValue=""
            onChange={event => setFeeling(event.target.value)}
            helperText="Required"
          >
            <MenuItem value='1'>1</MenuItem>
            <MenuItem value='2'>2</MenuItem>
            <MenuItem value='3'>3</MenuItem>
            <MenuItem value='4'>4</MenuItem>
            <MenuItem value='5'>5</MenuItem>
          </TextField>
          <Button type="submit">
            <ArrowForwardIcon />
          </Button>
        </form>
      </div>

    </div>
  ) // End return
} // End Question1
