import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { sessionService } from 'redux-react-session';

import Allreducer from './reducers';
import App from './container/App/App';

const store = createStore(Allreducer);

// Init the session service
sessionService.initSessionService(store);

/* global document */
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
