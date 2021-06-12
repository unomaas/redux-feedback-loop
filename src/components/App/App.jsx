//#region ⬇⬇ Document setup below: 
// ⬇ File setup: 
import './App.css';
import Header from '../Header/Header';
import Question1 from '../Question1/Question1';
import Question2 from '../Question2/Question2';
import Question3 from '../Question3/Question3';
import Question4 from '../Question4/Question4';
import Review from '../Review/Review';
import Thanks from '../Thanks/Thanks';

// ⬇ Dependent functionality:
import React from 'react';
import { Route, HashRouter as Router } from 'react-router-dom';
import axios from 'axios';
//#endregion ⬆⬆ Document setup above. 


export default function App() {
  return (
    <Router>
      <div className='App'>

        <Header />

        <main>
          <Route path='/' exact>
            <Question1 />
          </Route>

          <Route path='question2'>
            <Question2 />
          </Route>

          <Route path='question3'>
            <Question3 />
          </Route>

          <Route path='question4'>
            <Question4 />
          </Route>

          <Route path='review'>
            <Review />
          </Route>

          <Route path='thanks'>
            <Thanks />
          </Route>
        </main>

      </div>
    </Router>
  ); // End return
} // End App