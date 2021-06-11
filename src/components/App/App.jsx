//#region ⬇⬇ Document setup below: 
// ⬇ React/Redux functionality:
import { Route, HashRouter as Router } from 'react-router-dom';
import React from 'react';
import axios from 'axios';
// ⬇ File setup: 
import './App.css';
import Header from '../Header/Header';
import Question1 from '../Question1/Question1';
import Question2 from '../Question2/Question2';
import Question3 from '../Question3/Question3';
import Question4 from '../Question4/Question4';
import Review from '../Review/Review';
import Thanks from '../Thanks/Thanks';
//#endregion ⬆⬆ Document setup above. 


function App() {

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
  );
}

export default App;
