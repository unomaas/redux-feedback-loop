//#region ⬇⬇ Document setup below: 
// ⬇ File setup: 
import './QuestionForm.css';
// ⬇ Dependent functionality:
import { useDispatch } from 'react-redux';
import React, { useState } from 'react';
import { Button, MenuItem, TextField } from '@material-ui/core';
//#endregion ⬆⬆ Document setup above. 


export default function QuestionForm() {
  //#region ⬇⬇ State variables below:
  const dispatch = useDispatch();
  const [feedback, setFeedback] = useState('');
  //#endregion ⬆⬆ State variables above. 


  //#region ⬇⬇ Event handlers below:
  const handleSubmit = () => {
    console.log('In handleSubmit, feedback:', feedback);
    // ⬇ Sending user input to the reducer:
    dispatch({
      type: 'ADD_FEEDBACK',
      payload: feedback
    }); // End dispatch
  } // End handleSubmit
  //#endregion ⬆⬆ Event handles above. 


  // ⬇ Rendering:
  return (
    <div className="question-form">
      <form onSubmit={handleSubmit}>
        <TextField
          required
          select
          defaultValue=""
          onChange={event => setFeedback(event.target.value)}
          helperText="Required"
        >
          <MenuItem value='1'>1</MenuItem>
          <MenuItem value='2'>2</MenuItem>
          <MenuItem value='3'>3</MenuItem>
          <MenuItem value='4'>4</MenuItem>
          <MenuItem value='5'>5</MenuItem>
        </TextField>
        <Button type="submit">
          Submit
      </Button>
      </form>
    </div>
  ) // End return
} // End QuestionForm
