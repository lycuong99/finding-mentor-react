
import {
    FETCH_MAJOR_ALL
} from '../constants/actionTypes';

const INIT_STATE = {
    majors: []

}

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case FETCH_MAJOR_ALL: return { ...state, majors: action.payload };
       

        default: return state;
    }
}

