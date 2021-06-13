//#region ⬇⬇ Document setup below: 
// ⬇ File setup: 
import './Thanks.css';
// ⬇ Dependent functionality:
import { useDispatch } from 'react-redux';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';
import LoopIcon from '@material-ui/icons/Loop';
//#endregion ⬆⬆ Document setup above. 


export default function Thanks() {
  //#region ⬇⬇ State variables below:
  const dispatch = useDispatch();
  const history = useHistory();
  //#endregion ⬆⬆ State variables above. 


  //#region ⬇⬇ Event handlers below:
  /** ⬇ handleSubmit:
  * When clicked, this will reset the feedbackArray reducer and send the user to the home page. 
  */
  const handleSubmit = () => {
    console.log('In Thanks handleSubmit');
    // ⬇ Clearing the feedbackArray reducer:
    dispatch({ type: 'EMPTY_FEEDBACK' });
    // ⬇ Sending user to home page: 
    history.push('/');
  } // End handleSubmit
  //#endregion ⬆⬆ Event handles above. 


  // ⬇ Rendering:
  return (
    <div>
      <h2>Thank you for submitting your feedback!</h2>

      <div>
        <Button
          onClick={handleSubmit}
          variant="contained"
          color="primary"
        >
          <LoopIcon /> &nbsp; Start Over
      </Button>
      </div>

    </div>
  ) // End return
} // End Thanks
