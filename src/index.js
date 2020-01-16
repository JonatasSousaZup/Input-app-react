import React from 'react';
import ReactDOM from 'react-dom';
import Input from './components/app'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Input />, document.getElementById('root'));
serviceWorker.unregister();
