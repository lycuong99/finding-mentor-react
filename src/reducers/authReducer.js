
import { SIGN_UP, SIGN_UP_FAIL, SIGN_IN, SIGN_IN_FAIL, SIGN_OUT, RESET_AUTH_FORM } from '../constants/actionTypes';
import history from '../history';
const INIT_STATE = {
    authenticated: false,
    invalidSignIn: false,
    invalidSignUp: false
}

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case SIGN_UP:  return { ...state, authenticated: true, invalidSignUp: false };
        case SIGN_UP_FAIL: return { ...state, authenticated: false, invalidSignUp: true };
        case SIGN_IN: return { ...state, authenticated: true, invalidSignIn: false };
        case SIGN_IN_FAIL: return { ...state, authenticated: false, invalidSignIn: true };
        case SIGN_OUT:
            return { ...state, authenticated: false };
        case RESET_AUTH_FORM: return { ...state, invalidSignIn: false, invalidSignUp: false }
        default: return state;


    }
}

