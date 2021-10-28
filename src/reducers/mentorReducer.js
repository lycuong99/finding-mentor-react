
import {
    FETCH_RECOMMEND_MENTOR_BY_MAJOR_ERROR,
    FETCH_RECOMMEND_MENTOR_ERROR,
    FETCH_RECOMMEND_MENTOR,
    FETCH_RECOMMEND_MENTOR_BY_MAJOR
} from '../constants/actionTypes';

const INIT_STATE = {
    recommendMentor: [],
    recommendMentorByMajor: [],
    searchResults: [],
    error: '',

}

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case FETCH_RECOMMEND_MENTOR: return { ...state, recommendMentor: action.payload };
        case FETCH_RECOMMEND_MENTOR_BY_MAJOR: return { ...state, recommendMentorByMajor: action.payload };

        default: return state;
    }
}

