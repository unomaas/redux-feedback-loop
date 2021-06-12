//#region ⬇⬇ Document setup below: 
// ⬇ File setup: 
import './Review.css';
// ⬇ Dependent functionality:
import { useSelector } from 'react-redux';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';
import axios from 'axios';
//#endregion ⬆⬆ Document setup above. 


export default function Review() {
  //#region ⬇⬇ State variables below:
  const history = useHistory();
  // ⬇ Importing feedback from store:
  const feedbackArray = useSelector(store => store.feedbackArray);
  //#endregion ⬆⬆ State variables above. 


  //#region ⬇⬇ Event handlers below:
  /** ⬇ handleSubmit:
  * When clicked, this will POST the feedback to the DB and send the user to the /thanks page. 
  */
  const handleSubmit = () => {
    console.log('In Review handleSubmit, feedback:', feedbackArray);
    // ⬇ Sending the feedback to the DB:
    axios.post('/feedback', feedbackArray)
      .then(response => {
        console.log('In /feedback POST, response:', response.data);
        // ⬇ Sending user to next page: 
        history.push('/thanks');
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
        color="primary"
      >
        Submit This Feedback
      </Button>

    </div>
  ) // End return
} // End Review
