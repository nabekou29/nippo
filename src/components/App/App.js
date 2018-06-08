import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';

import Login from '../Login/LoginContainer'
import {
  AppBar,
} from '../common';

export default class Component extends React.Component {
  render() {
    return (
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={() => (<AppBar Home/>)} />
            {/* ログイン画面 */}
            <Route exact path='/login' component={Login} />
          </Switch>
        </BrowserRouter>
      );
  }
};
