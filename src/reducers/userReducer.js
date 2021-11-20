
import { FETCH_USER } from '../constants/actionTypes';

const INIT_STATE = {
    userInfo: {}
}

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case FETCH_USER: return { ...state, userInfo: action.payload };
        default: return state;
    }
}

