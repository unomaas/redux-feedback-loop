//#region ⬇⬇ Document setup below: 
// ⬇ File setup: 
import './Question4.css';
// ⬇ Dependent functionality:
import { useDispatch } from 'react-redux';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, TextField } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
//#endregion ⬆⬆ Document setup above. 


export default function Question4() {
  //#region ⬇⬇ State variables below:
  const dispatch = useDispatch();
  const history = useHistory();
  const [comment, setComment] = useState();
  //#endregion ⬆⬆ State variables above. 


  //#region ⬇⬇ Event handlers below:
  /** ⬇ handleSubmit:
    * When clicked, this will send the feedback to the feedbackArray reducer and send the user to the next page. 
    */
  const handleSubmit = () => {
    console.log('In Question4 handleSubmit, comment:', comment);
    // ⬇ Bundling feedback into an object key:
    const feedback = { comment: comment }
    // ⬇ Sending user input to the reducer:
    dispatch({
      type: 'ADD_COMMENT',
      payload: feedback
    }); // End dispatch
    // ⬇ Sending user to next page: 
    history.push('/review');
  } // End handleSubmit

  /** ⬇ handleBack:
    * When clicked, this will send the user to the previous page to change an answer. 
    */
  const handleBack = () => {
    history.push('/question3');
  } // End handleBack
  //#endregion ⬆⬆ Event handles above. 


  // ⬇ Rendering:
  return (
    <div className="question-wrapper">
      <h2>Any comments you'd like to leave?</h2>
      <p>It's not required.</p>


      <div className="question-form">
        <form onSubmit={handleSubmit}>
          <Button onClick={handleBack}>
            <ArrowBackIcon />
          </Button>
          <TextField
            defaultValue=""
            onChange={event => setComment(event.target.value)}
          >
          </TextField>
          <Button type="submit">
            <ArrowForwardIcon />
          </Button>
        </form>
      </div>

    </div>
  ) // End return
} // End Question4
