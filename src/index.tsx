/** React*/
import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

/** CSS*/
import './scss/index.scss';

/** Components*/
import App from './App';

/** Data information*/
import {state} from "./redux/state";


ReactDOM.render(
  <React.StrictMode>
    <App stateProp={state}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
