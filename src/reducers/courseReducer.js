
import {
    FETCH_COURSE_BY_ID,
    FETCH_COURSE_SEARCH,
    FETCH_COURSES_BY_MENTOR_ID,
    FETCH_RECOMMEND_COURSES_BY_MAJOR,
    FETCH_MY_LEARNING_COURSES,
    CREATE_COURSE,
    DELETE_COURSE,
    UPDATE_COURSE
} from '../constants/actionTypes';

const INIT_STATE = {
    searchResults: [],
    currentCourse: null,
    mentorCourses: null,
    recommendCoursesByMajor: [],
    mylearningCourses: [],
    error: '',

}

export default (state = INIT_STATE, action) => {
    switch (action.type) {

        case FETCH_COURSE_SEARCH: return { ...state, searchResults: action.payload };
        case FETCH_COURSE_BY_ID: return { ...state, currentCourse: action.payload };
        case FETCH_COURSES_BY_MENTOR_ID: return { ...state, mentorCourses: { id: action.payload.id, courses: action.payload.courses } };
        case FETCH_RECOMMEND_COURSES_BY_MAJOR: return { ...state, recommendCoursesByMajor: action.payload };
        case FETCH_MY_LEARNING_COURSES: return { ...state, mylearningCourses: action.payload };

        case DELETE_COURSE:

            {
                let newMentorCourses = {
                    id: state.mentorCourses.id,
                    courses: state.mentorCourses.courses.filter(c => c.id !== action.payload)
                }
                return { ...state, mentorCourses: newMentorCourses };
            }
        case CREATE_COURSE:
            console.log(action.type);
            console.log(action.payload);

            const newMentorCourses1 = {
                id: state.mentorCourses.id,
                courses: [...state.mentorCourses.courses, { ...action.payload }]
            }

            console.log(newMentorCourses1);

            let newState = { ...state, mentorCourses: newMentorCourses1 };
            console.log(newState.mentorCourses);
            return { ...state, mentorCourses: newMentorCourses1 };
        case UPDATE_COURSE:
            {
                let newMentorCourses = {
                    id: state.mentorCourses.id,
                    courses: state.mentorCourses.courses.filter(c => c.id !== action.payload.id).push(action.payload)
                }

                return { ...state, mentorCourses: newMentorCourses, currentCourse: action.payload };
            }
        default: return state;
    }
}

