
import {
    FETCH_RECOMMEND_MENTOR_BY_MAJOR_ERROR,
    FETCH_RECOMMEND_MENTOR_ERROR,
    FETCH_RECOMMEND_MENTOR,
    FETCH_RECOMMEND_MENTOR_BY_MAJOR,
    FETCH_COURSE_SEARCH
} from '../constants/actionTypes';

const INIT_STATE = {
    searchResults: [],
    error: '',

}

export default (state = INIT_STATE, action) => {
    switch (action.type) {

        case FETCH_COURSE_SEARCH: return { ...state, searchResults: action.payload };
        default: return state;
    }
}

