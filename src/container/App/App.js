import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';

import Login from '../Login/LoginContainer';
import {
  AppBar,
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
          <Route exact path='/login' component={Login} />
          <Route exact path='/' component={() => (<AppBar Home/>)} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Component;
