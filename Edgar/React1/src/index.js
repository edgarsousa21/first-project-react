/*
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
ReactDOM.render(<App />, document.getElementById("root"));
 */

// index.js:=======>

import React from 'react';
import ReactDOM from 'react-dom/client';
import Routes from './routes';
import GlobalStyle from './styles/globalStyle';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<><Routes /> <GlobalStyle /></>);
 

// ReactDOM.render(<>
// <App /> <GlobalStyle />
// </>, 
// document.getElementById("root"));

