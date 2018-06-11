import * as Action from '../actions/login';
import { sessionService } from 'redux-react-session';
import * as sessionApi from '../api/sessionApi';

const INITIAL_STATE = {
  message: '',
};

export default function Reducer(state = INITIAL_STATE, action) {
  let { /*payload,*/ meta } = action;
  let status;
  switch (action.type) {
  case Action.LOGIN:
    status = login(meta.user, meta.history);
    return {
      ...state,
      message: status === 'NG' ? 'IDまたはパスワードが正しくありません。' : '',
    };
  default:
    return state;
  }
}

function login(user, history) {
  let response = sessionApi.login(user);
  const { status, token } = response;

  if (status === 'OK') {
    sessionService.saveSession({ token })
      .then(() => {
        sessionService.saveUser(response.data)
          .then(() => {
            history.push('/');
          }).catch(err => console.error(err));
      }).catch(err => console.error(err));
  }
  return status;
}
