//#region ⬇⬇ Document setup below: 
// ⬇ File setup: 
import './Review.css';
// ⬇ Dependent functionality:
import { useDispatch, useSelector } from 'react-redux';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';
import axios from 'axios';
//#endregion ⬆⬆ Document setup above. 


export default function Review() {
  //#region ⬇⬇ State variables below:
  const dispatch = useDispatch();
  const history = useHistory();
  const [feedback, setFeedback] = useState();
  // ⬇ Importing feedback from store:
  const feedbackArray = useSelector(store => store.feedbackArray);
  //#endregion ⬆⬆ State variables above. 


  //#region ⬇⬇ Event handlers below:
  /** ⬇ handleSubmit:
  * When the user clicks SUBMIT, this will send the feedback to the DB, reset the feedbackArray reducer, and send the user to the /thanks page. 
  */
  const handleSubmit = () => {
    console.log('In Review handleSubmit, feedback:', feedbackArray);
    // ⬇ Sending the feedback to the DB:
    axios.post('/feedback', feedbackArray)
      .then(response => {
        console.log('In /feedback POST, response:', response);
        dispatch({ type: 'EMPTY_FEEDBACK' });
        // ⬇ Sending user to next page: 
        // history.push('/thanks');
      }) // End .then
      .catch(error => {
        console.log('In /feedback POST, response:', error);
      }); // End .catch
  } // End handleSubmit
  //#endregion ⬆⬆ Event handles above. 


  // ⬇ Rendering:
  return (
    <div className="question-wrapper">
      <h2>Review Your Feedback:</h2>

      <div className="review-text">
        <p>Feeling: {feedbackArray[0]}</p>
        <p>Understanding: {feedbackArray[1]}</p>
        <p>Support: {feedbackArray[2]}</p>
        <p>Comments: {feedbackArray[3]}</p>
      </div>

      <Button
        onClick={handleSubmit}
        variant="outlined"
      >
        Submit This Feedback
      </Button>

    </div>
  ) // End return
} // End Review
