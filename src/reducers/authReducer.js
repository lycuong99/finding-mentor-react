
import { SIGN_UP, SIGN_UP_FAIL, SIGN_IN, SIGN_IN_FAIL, SIGN_OUT } from '../constants/actionTypes';


const INIT_STATE = {
    authenticated: false
}

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case SIGN_UP: return { ...state, authenticated: true, invalid: false };
        case SIGN_UP_FAIL: return { ...state, authenticated: false, invalid: true };
        case SIGN_IN: return { ...state, authenticated: true, invalid: false };
        case SIGN_IN_FAIL: return { ...state, authenticated: false, invalid: true };
        case SIGN_OUT: return { ...state, authenticated: false };
        default: return state;
    }
}

