import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './components/home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/css/import.css'

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Router>
    <Home />
  </Router>
  , document.getElementById('root'));

serviceWorker.unregister();
