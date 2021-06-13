//#region ⬇⬇ Document setup below: 
// ⬇ File setup: 
import './Question3.css';
// ⬇ Dependent functionality:
import { useDispatch } from 'react-redux';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, MenuItem, TextField } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
//#endregion ⬆⬆ Document setup above. 


export default function Question3() {
  //#region ⬇⬇ State variables below:
  const dispatch = useDispatch();
  const history = useHistory();
  const [supported, setSupported] = useState();
  //#endregion ⬆⬆ State variables above. 


  //#region ⬇⬇ Event handlers below:
  /** ⬇ handleSubmit:
    * When clicked, this will send the feedback to the feedbackArray reducer and send the user to the next page. 
    */
  const handleSubmit = () => {
    console.log('In Question3 handleSubmit, supported:', supported);
    // ⬇ Bundling feedback into an object key:
    const feedback = { supported: supported }
    // ⬇ Sending user input to the reducer:
    dispatch({
      type: 'ADD_SUPPORTED',
      payload: feedback
    }); // End dispatch
    // ⬇ Sending user to next page: 
    history.push('/question4');
  } // End handleSubmit

  /** ⬇ handleBack:
    * When clicked, this will send the user to the previous page to change an answer. 
    */
  const handleBack = () => {
    history.push('/question2');
  } // End handleBack
  //#endregion ⬆⬆ Event handles above. 


  // ⬇ Rendering:
  return (
    <div className="question-wrapper">
      <h2>How well are you being supported?</h2>
      <p>1 = Bad, 5 = Great</p>


      <div className="question-form">
        <form onSubmit={handleSubmit}>
          <Button onClick={handleBack}>
            <ArrowBackIcon />
          </Button>
          <TextField
            required
            select
            defaultValue=""
            onChange={event => setSupported(event.target.value)}
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
} // End Question3
