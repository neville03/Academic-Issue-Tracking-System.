import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './styles.css'; // Import the CSS here

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
