//#region ⬇⬇ Document setup below: 
// ⬇ File setup: 
import './Question1.css';
// ⬇ Dependent functionality:
import { useSelector, useDispatch } from 'react-redux';
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Select, InputLabel, MenuItem, FormControl, FormHelperText } from '@material-ui/core';
//#endregion ⬆⬆ Document setup above. 


export default function Question1() {
  //#region ⬇⬇ State variables below:
  const dispatch = useDispatch();
  const history = useHistory();
  const [feeling, setFeeling] = useState('');
  //#endregion ⬆⬆ State variables above. 


  //#region ⬇⬇ Event handlers below:
  const handleSubmit = () => {
    console.log('In handleSubmit, feeling:', feeling);

  } // End handleSubmit
  //#endregion ⬆⬆ Event handles above. 

  
  // ⬇ Rendering:
  return (
    <div className="question1-wrapper">
      <h2>How are you feeling today?</h2>

      <div className="question1-form">
        <FormControl required >
          <Select
            required
            defaultValue=""
            onChange={event => setFeeling(event.target.value)}
          >
            <MenuItem value='1'>1</MenuItem>
            <MenuItem value='2'>2</MenuItem>
            <MenuItem value='3'>3</MenuItem>
            <MenuItem value='4'>4</MenuItem>
            <MenuItem value='5'>5</MenuItem>
          </Select>
          <FormHelperText>Required</FormHelperText>
        </FormControl>
        <Button onClick={handleSubmit}>
          Next
        </Button>
      </div>

    </div>
  ) // End return
} // End Question1
