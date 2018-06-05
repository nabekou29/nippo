import React from 'react';
import {
  // BrowserRouter,
  Route,
  // Switch,
} from 'react-router-dom';

import Login from '../Login/LoginContainer'


export default class Component extends React.Component {
  render() {
    return (
        <div>
          {/* ログイン画面 */}
          <Route exact path='/login' component={Login} />
        </div>
      );
  }
};
