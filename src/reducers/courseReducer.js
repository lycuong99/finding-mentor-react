
import {
    FETCH_COURSE_BY_ID,
    FETCH_COURSE_SEARCH
} from '../constants/actionTypes';

const INIT_STATE = {
    searchResults: [],
    currentCourse: null,
    error: '',

}

export default (state = INIT_STATE, action) => {
    switch (action.type) {

        case FETCH_COURSE_SEARCH: return { ...state, searchResults: action.payload };
        case FETCH_COURSE_BY_ID: return { ...state, currentCourse: action.payload };
        default: return state;
    }
}

