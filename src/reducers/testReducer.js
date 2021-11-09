
import {
    TEST_ADD_COURSE,
    TEST_FETCH_COURSES,
    TEST_DELETE_COURSE,
    TEST_UPDATE_COURSE,
    TEST_FETCH_COURSE
} from '../constants/actionTypes';
import { getCourses } from '../database';
const INIT_STATE = {
    courses: getCourses(),
    searchResults: getCourses(),
    currentCourse: null
}

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case TEST_ADD_COURSE: return { ...state, courses: [...state.courses, action.payload] };
        case TEST_FETCH_COURSES:
            console.log()
            let newCourse = state.courses.filter(course => course.name.includes(action.payload) && course.mentor.id == '111-222-333-444');
            return { ...state, searchResults: newCourse };
        case TEST_UPDATE_COURSE:
            let UpdateCourse = action.payload;
            let newCourses = state.courses.map(course => course.id !== UpdateCourse.id ? course : UpdateCourse);
            return { ...state, courses: newCourses };
        case TEST_FETCH_COURSE: return { ...state, currentCourse: state.courses.find(course => course.id == action.payload) };
        default: return state;
    }
}
