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
 */
function Component() {
  return (
    <BrowserRouter>
      <Switch>
        {/* ホーム画面 */}
        <RouteWithAuth exact path="/" component={<AppBar Home />} />
        {/* ログイン画面 */}
        <Route exact path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  );
}

export default Component;
