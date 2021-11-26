
import {
    FETCH_MY_LEARNING_COURSES,
    ENROLL_COURSE,
    ENROLL_COURSE_FAIL,
    ENROLL_CLEAR_STATUS
} from '../constants/actionTypes';

const INIT_STATE = {
    mylearningCourses: [],
    error: null,
    isEnrollSuccess: false,
    isEnrollFail: false
}

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case FETCH_MY_LEARNING_COURSES: return { ...state, mylearningCourses: action.payload };
        case ENROLL_COURSE: return { ...state, error: null, isEnrollSuccess: true };
        case ENROLL_COURSE_FAIL: return { ...state, error: action.payload, isEnrollFail: true };
        case ENROLL_CLEAR_STATUS: return { ...state, error: null, isEnrollSuccess: false, isEnrollFail: false };
        default: return state;
    }
}

