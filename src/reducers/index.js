import { combineReducers } from 'redux';
import { sessionReducer } from 'redux-react-session';

import Login from './login';

const reducer = combineReducers({
  session: sessionReducer,
  Login: Login,
});

export default reducer;
