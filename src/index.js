import React from 'react';
import ReactDOM from 'react-dom';
import Login from './components/Login/index';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Home />, document.getElementById('root'));
serviceWorker.unregister();
