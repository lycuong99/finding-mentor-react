
import {
    FETCH_RECOMMEND_MENTOR_BY_MAJOR_ERROR,
    FETCH_RECOMMEND_MENTOR_ERROR,
    FETCH_MENTOR_BY_ID,
    FETCH_RECOMMEND_MENTOR,
    FETCH_RECOMMEND_MENTOR_BY_MAJOR,
    FETCH_MENTOR_SEARCH
} from '../constants/actionTypes';

const INIT_STATE = {
    recommendMentor: [],
    recommendMentorByMajor: [],
    searchResults: [],
    currentMentor: null,
    error: '',

}

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case FETCH_RECOMMEND_MENTOR: return { ...state, recommendMentor: action.payload };
        case FETCH_RECOMMEND_MENTOR_BY_MAJOR: return { ...state, recommendMentorByMajor: action.payload };

        case FETCH_MENTOR_SEARCH: return { ...state, searchResults: action.payload };

        case FETCH_MENTOR_BY_ID: return { ...state, currentMentor: action.payload };
        default: return state;
    }
}

