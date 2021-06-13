//#region ⬇⬇ Document setup below: 
// ⬇ File setup: 
import './Question2.css';
// ⬇ Dependent functionality:
import { useDispatch } from 'react-redux';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, MenuItem, TextField } from '@material-ui/core';
//#endregion ⬆⬆ Document setup above. 


export default function Question2() {
  //#region ⬇⬇ State variables below:
  const dispatch = useDispatch();
  const history = useHistory();
  const [understanding, setUnderstanding] = useState('');
  //#endregion ⬆⬆ State variables above. 


  //#region ⬇⬇ Event handlers below:
  /** ⬇ handleSubmit:
    * When clicked, this will send the feedback to the reducer and send the user to the next page. 
    */
  const handleSubmit = () => {
    console.log('In Question2 handleSubmit, understanding:', understanding);
    // ⬇ Bundling feedback into an object key:
    const feedback = { understanding: understanding }
    // ⬇ Sending user input to the reducer:
    dispatch({
      type: 'ADD_UNDERSTANDING',
      payload: feedback
    }); // End dispatch
    // ⬇ Sending user to next page: 
    history.push('/question3');
  } // End handleSubmit

  /** ⬇ handleBack:
    * When clicked, this will send the user to the previous page to change an answer. 
    */
  const handleBack = () => {
    history.push('/');
  } // End handleBack
  //#endregion ⬆⬆ Event handles above. 


  // ⬇ Rendering:
  return (
    <div className="question-wrapper">
      <h2>How well are you understanding the content?</h2>

      <div className="question-form">
        <form onSubmit={handleSubmit}>
          <Button onClick={handleBack}>
            Back
          </Button>
          <TextField
            required
            select
            defaultValue=""
            onChange={event => setUnderstanding(event.target.value)}
            helperText="Required"
          >
            <MenuItem value='1'>1</MenuItem>
            <MenuItem value='2'>2</MenuItem>
            <MenuItem value='3'>3</MenuItem>
            <MenuItem value='4'>4</MenuItem>
            <MenuItem value='5'>5</MenuItem>
          </TextField>
          <Button type="submit">
            Next
          </Button>

        </form>
      </div>

    </div>
  ) // End return
} // End Question2
