// ログイン
export const LOGIN = 'LOGIN';

export function login(user, history) {
  return {
    type: LOGIN,
    payload: {},
    meta: {
      user: user,
      history: history,
    },
  };
}
