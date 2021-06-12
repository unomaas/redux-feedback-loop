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

  const [feeling, setFeeling] = useState('');

  const handleSubmit = () => {
    console.log('In handleSubmit, feeling:', feeling);

  }

  return (
    <div className="question1-wrapper">
      <h2>How are you feeling today?</h2>

      <div className="question1-form">
        <FormControl required className="form-control" onSubmit={handleSubmit}>
          <Select onChange={event => setFeeling(event.target.value)}>
            <MenuItem value='1'>1</MenuItem>
            <MenuItem value='2'>2</MenuItem>
            <MenuItem value='3'>3</MenuItem>
            <MenuItem value='4'>4</MenuItem>
            <MenuItem value='5'>5</MenuItem>
          </Select>
          <Button type="submit">
            Next
          </Button>

        </FormControl>
      </div>
      
    </div>
  ) // End return
} // End Question1
