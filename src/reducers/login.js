import * as Action from '../actions/login';

const INITIAL_STATE = {
    sessionId: '',
    message: '',
};

function Reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
    case Action.LOGIN:
        return ({
            ...state,
            ...action.payload,
        });
    default:
        return state;
    }
}

export default Reducer;
