import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ReduxParentComp from './ReduxParentComp';
import { createStore } from 'redux';

import { Provider } from 'react-redux';
import ReduxParentComp1 from './ReduxParentComp1';
import allReducers1 from './reducer1/index1';

const store = createStore(allReducers1,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <React.StrictMode>
    <ReduxParentComp1></ReduxParentComp1>
  </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
