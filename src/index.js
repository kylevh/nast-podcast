import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Frame from './components/Frame';

ReactDOM.render(
  <React.StrictMode>
    <Frame />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
