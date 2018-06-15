/**
 * アクションタイプ: ログイン
 * @type {String}
 */
export const LOGIN = 'LOGIN';

/**
 * ログインアクションの生成
 * @param  {string} id       ユーザID
 * @param  {string} password ユーザパスワード
 * @param  {Object} history  ルーティングヒストリ
 * @return {Object}          ログインアクション
 */
export function login(id, password, history) {
  return {
    type: LOGIN,
    payload: {
      user: {
        id,
        password,
      },
      history: history,
    },
    meta: {},
  };
}
