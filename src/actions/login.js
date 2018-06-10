// ログイン
export const LOGIN = 'LOGIN';

export function login(id, password) {
    return {
        type: LOGIN,
        payload: {},
        meta: {
            id: id,
            password: password,
        },
    };
}
