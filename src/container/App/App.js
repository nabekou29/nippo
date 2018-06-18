import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';

import Login from '../Login/LoginContainer';
import {
  AppBar,
  RouteWithAuth,
} from '../../component/App';

/**
 * ルーティングコンポーネント
 * @extends React.Component
 */
class Component extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          {/* ログイン画面 */}
          <RouteWithAuth exact path='/' component={<AppBar Home/>} />
          <Route exact path='/login' component={Login} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Component;
