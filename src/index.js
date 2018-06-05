import React from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';

/* Material-ui */
import {
  MuiThemeProvider,
  createMuiTheme,
} from '@material-ui/core/styles';
import {
  blue,
  pink,
  red,
} from '@material-ui/core/colors';
import CssBaseline from '@material-ui/core/CssBaseline';

import Allreducer from './reducers';
import App from './components/App/App';

let store = createStore(
  Allreducer,
);

const theme = createMuiTheme({
  palette: {
    primary: blue,
    accent: pink,
    error: red,
  },
});

render(
    <Provider store={store}>
      <BrowserRouter>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <App />
        </MuiThemeProvider>
      </BrowserRouter>
    </Provider>,
  document.getElementById('root')
)
