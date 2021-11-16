
import {
    FETCH_RECOMMEND_MENTOR_BY_MAJOR_ERROR,
    FETCH_RECOMMEND_MENTOR_ERROR,
    UPDATE_MENTOR_PROFILE_CLOSE_SNACKBAR,
    FETCH_MENTOR_BY_ID,
    FETCH_RECOMMEND_MENTOR,
    FETCH_RECOMMEND_MENTOR_BY_MAJOR,
    FETCH_MENTOR_SEARCH,
    UPDATE_MENTOR_PROFILE_SUCCESS,
    UPDATE_MENTOR_PROFILE_FAIL
} from '../constants/actionTypes';

const INIT_STATE = {
    recommendMentor: [],
    recommendMentorByMajor: [],
    searchResults: [],
    currentMentor: null,
    error: false,
    isUpdateSuccess: false,
    message: '',

}

export default (state = INIT_STATE, action) => {

    switch (action.type) {
        case FETCH_RECOMMEND_MENTOR: return { ...state, recommendMentor: action.payload };
        case FETCH_RECOMMEND_MENTOR_BY_MAJOR: 
       
        return { ...state, recommendMentorByMajor: action.payload };

        case FETCH_MENTOR_SEARCH: return { ...state, searchResults: action.payload };

        case FETCH_MENTOR_BY_ID: return { ...state, currentMentor: action.payload };

        case UPDATE_MENTOR_PROFILE_SUCCESS: return { ...state, error: false, isUpdateSuccess: true };
        case UPDATE_MENTOR_PROFILE_FAIL: return { ...state, error: true, isUpdateSuccess: false };

        case UPDATE_MENTOR_PROFILE_CLOSE_SNACKBAR: return { ...state, error: false, isUpdateSuccess: false };
        default: return state;
    }
}

