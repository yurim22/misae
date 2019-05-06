import React from 'react';
import ReactDom from 'react-dom'
// import 'semantic-ui-css/semantic.min.css';
import {createStore} from 'redux';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import reducers from './reducers';

import * as serviceWorker from './serviceWorker';

ReactDom.render(
  <Provider store={createStore(reducers)}>
    <App/>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();