import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Frame from './components/Frame';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Frame />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
