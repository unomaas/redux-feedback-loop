//#region ⬇⬇ Document setup below: 
// ⬇ File setup: 
import './Question4.css';
// ⬇ Dependent functionality:
import { useDispatch } from 'react-redux';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, TextField } from '@material-ui/core';
//#endregion ⬆⬆ Document setup above. 


export default function Question4() {
  //#region ⬇⬇ State variables below:
  const dispatch = useDispatch();
  const history = useHistory();
  const [feedback, setFeedback] = useState();
  //#endregion ⬆⬆ State variables above. 


  //#region ⬇⬇ Event handlers below:
  /** ⬇ handleSubmit:
  * When clicked, this will send the feedback to the feedbackArray reducer and send the user to the next page. 
  */
  const handleSubmit = () => {
    console.log('In Question4 handleSubmit, comment:', feedback);
    // ⬇ Sending user input to the reducer:
    dispatch({
      type: 'ADD_FEEDBACK',
      payload: feedback
    }); // End dispatch
    // ⬇ Sending user to next page: 
    history.push('/review');
  } // End handleSubmit
  //#endregion ⬆⬆ Event handles above. 


  // ⬇ Rendering:
  return (
    <div className="question-wrapper">
      <h2>Any comments you want to leave?</h2>

      <div className="question-form">
        <form onSubmit={handleSubmit}>
          <TextField
            required
            defaultValue=""
            onChange={event => setFeedback(event.target.value)}
            helperText="Required"
          >
          </TextField>
          <Button type="submit">
            Next
          </Button>
        </form>
      </div>

    </div>
  ) // End return
} // End Question4
