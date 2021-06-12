//#region ⬇⬇ Document setup below: 
// ⬇ index.js & App.js setup: 
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

// ⬇ React/Redux functionality:
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
//#endregion ⬆⬆ Document setup above. 


//#region ⬇⬇ All reducers below: 
const feedbackReducer = (state = [], action) => {
  console.log('In feedbackReducer, state:', state);
  switch (action.type) {
    case 'ADD_FEEDBACK':
      console.log('In ADD_FEEDBACK, payload:', action.payload);
      return [...state, action.payload];
    default:
      return state;
  } // End switch
} // End feedbackReducer reducer
//#endregion ⬆⬆ All reducers above. 


//#region ⬇⬇ Store & render below: 
// ⬇ Store: 
const store = createStore(
  combineReducers({
    feedbackReducer
  }), applyMiddleware(
    logger
  )
); // End store

// ⬇ Render:
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));
registerServiceWorker(); // End render.
//#endregion ⬆⬆ Store & render above.
