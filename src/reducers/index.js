import { combineReducers } from 'redux';
import { sessionReducer } from 'redux-react-session';

import Login from './login';

/**
 * 全てのリデューサを集約したリデューサ
 * @type {Object}
 */
const reducer = combineReducers({
  session: sessionReducer,
  Login: Login,
});

export default reducer;
