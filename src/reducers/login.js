import * as Action from '../actions/login';
import { sessionService } from 'redux-react-session';
import * as sessionApi from '../api/sessionApi';

/**
 * ステータスの初期値を返します
 * @return {Object}     初期値
 */
const initialState = () => {
  return {
    message: '',
  };
};

/**
 * ログイン画面のリデューサ
 * @param  {Object} [state=initialState] ログイン画面の状態
 * @param  {Object} action               アクション
 * @return {Object}                      ログイン画面の状態
 */
export default function reducer(state = initialState(), action) {
  let { type, payload } = action;
  let status;
  switch (type) {
  case Action.LOGIN:
    status = login(payload.user, payload.history);
    return {
      ...state,
      message: status === 'NG' ? 'IDまたはパスワードが正しくありません。' : '',
    };
  default:
    return state;
  }
}

/**
 * ログイン処理
 * @param  {Object} user    ユーザ
 * @param  {Object} history RouterのHistory
 * @return {string}         レスポンスのステータス
 */
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
