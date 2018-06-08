import React from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import Allreducer from './reducers';
import App from './components/App/App';

let store = createStore(
  Allreducer,
);

render(
    <Provider store={store}>
      <App />
    </Provider>,
  document.getElementById('root')
)
