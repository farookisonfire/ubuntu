import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import Programs from './features/programs/Programs';
import configureStore from './store/configureStore';
import './index.css';

window.store = configureStore();

render(
  <Provider store={window.store}>
    <Programs />
  </Provider>,
  document.getElementById('app')
);
