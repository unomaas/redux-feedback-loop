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

//#endregion ⬆⬆ All reducers above. 


//#region ⬇⬇ Store & render below: 
// ⬇ Store: 
const store = createStore(
  combineReducers({

  }), applyMiddleware(
    logger
  )
);

// ⬇ Render:
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
//#endregion ⬆⬆ Store * render above.
