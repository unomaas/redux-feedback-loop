//#region ⬇⬇ Document setup below: 
// ⬇ index.js & App.js setup: 
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
// ⬇ Font setup:
import './fonts/OpenDyslexia/opendyslexic-regular-webfont.woff'
import './fonts/OpenDyslexia/opendyslexic-regular-webfont.woff2'
import './fonts/OpenDyslexia/opendyslexic-bold-webfont.woff'
import './fonts/OpenDyslexia/opendyslexic-bold-webfont.woff2'
import './fonts/OpenDyslexia/opendyslexic-italic-webfont.woff'
import './fonts/OpenDyslexia/opendyslexic-italic-webfont.woff2'
import './fonts/OpenDyslexia/opendyslexic-bolditalic-webfont.woff'
import './fonts/OpenDyslexia/opendyslexic-bolditalic-webfont.woff2'
// ⬇ React/Redux functionality:
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
//#endregion ⬆⬆ Document setup above. 


//#region ⬇⬇ All reducers below: 
// ⬇ feelingObject reducer:
const feelingObject = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_FEELING':
      return action.payload;
    case 'EMPTY_FEEDBACK':
      return [];
    default:
      return state;
  } // End switch
} // End feelingObject reducer

// ⬇ understandingObject reducer:
const understandingObject = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_UNDERSTANDING':
      return action.payload;
    case 'EMPTY_FEEDBACK':
      return [];
    default:
      return state;
  } // End switch
} // End understandingObject reducer

// ⬇ supportedObject reducer:
const supportedObject = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_SUPPORTED':
      return action.payload;
    case 'EMPTY_FEEDBACK':
      return [];
    default:
      return state;
  } // End switch
} // End supportedObject reducer

// ⬇ commentObject reducer:
const commentObject = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_COMMENT':
      return action.payload;
    case 'EMPTY_FEEDBACK':
      return [];
    default:
      return state;
  } // End switch
} // End commentObject reducer
//#endregion ⬆⬆ All reducers above. 


//#region ⬇⬇ Store & render below: 
// ⬇ Store: 
const store = createStore(
  combineReducers({
    feelingObject, understandingObject, supportedObject, commentObject
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
