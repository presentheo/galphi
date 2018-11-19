import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './reset.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
