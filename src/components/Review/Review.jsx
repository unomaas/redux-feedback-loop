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
  // ⬇ Importing all feedback from store:
  const feelingObject = useSelector(store => store.feelingObject);
  const understandingObject = useSelector(store => store.understandingObject);
  const supportedObject = useSelector(store => store.supportedObject);
  const commentObject = useSelector(store => store.commentObject);
  // ⬇ Bundling all feedback into one object to send to DB:
  const feedback = {
    feeling: feelingObject.feeling,
    understanding: understandingObject.understanding,
    supported: supportedObject.supported,
    comment: commentObject.comment
  } // End feedback
  //#endregion ⬆⬆ State variables above. 


  //#region ⬇⬇ Event handlers below:
  /** ⬇ handleSubmit:
    * When clicked, this will POST the feedback to the DB and send the user to the /thanks page. 
    */
  const handleSubmit = () => {
    console.log('In Review handleSubmit, feedback:', feedback);
    // ⬇ Sending the feedback to the DB:
    axios.post('/feedback', feedback)
      .then(response => {
        console.log('In /feedback POST, response:', response.data);
        // ⬇ Sending user to next page: 
        history.push('/thanks');
      }) // End .then
      .catch(error => {
        console.log('In /feedback POST, response:', error);
      }); // End .catch
  } // End handleSubmit

  /** ⬇ handleBack:
    * When clicked, this will send the user to the previous page to change an answer. 
    */
  const handleBack = () => {
    history.push('/question4');
  } // End handleBack
  //#endregion ⬆⬆ Event handles above. 


  // ⬇ Rendering:
  return (
    <div className="question-wrapper">
      <h2>Review Your Feedback:</h2>

      <div className="review-text">
        <p>Feeling: {feelingObject.feeling}</p>
        <p>Understanding: {understandingObject.understanding}</p>
        <p>Supported: {supportedObject.supported}</p>
        <p>Comments: {commentObject.comment}</p>
      </div>

      <div>
      <Button
        onClick={handleBack}
        variant="outlined"
        color="secondary"
      >
        ⬅ Change Your Feedback
      </Button>
      &nbsp;
      <Button
        onClick={handleSubmit}
        variant="outlined"
        color="primary"
      >
        Submit This Feedback ✔
      </Button>
      </div>

      <br /><br />


    </div>
  ) // End return
} // End Review
