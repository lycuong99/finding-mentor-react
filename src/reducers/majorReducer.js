
import {
    FETCH_MAJOR_ALL,
    FETCH_SUBJECT_BY_MAJOR
} from '../constants/actionTypes';

const INIT_STATE = {
    majors: [],
    subjectMajors: []
}

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case FETCH_MAJOR_ALL: return { ...state, majors: action.payload };
        case FETCH_SUBJECT_BY_MAJOR: return { ...state, subjectMajors: { ...state.subjectMajors, ...action.payload } };

        default: return state;
    }
}

