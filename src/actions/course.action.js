import fm from '../apis/fm';
import {
    FETCH_COURSE_BY_ID,
    FETCH_COURSE_BY_ID_FAIL,
    FETCH_COURSES_BY_MENTOR_ID,
    FETCH_COURSE_SEARCH,
    FETCH_RECOMMEND_COURSES_BY_MAJOR,
    FETCH_MY_LEARNING_COURSES
} from '../constants/actionTypes';
import authHeader from '../ultils/authHeader';
import UserStorage from '../ultils/UserStorage';

export const fetchCourses = (key) => async (dispatch) => {
    try {

        const response = await fm.get(`/Course/Name/${key}`, {
            headers: authHeader(),
        });

        dispatch({ type: FETCH_COURSE_SEARCH, payload: response.data });
    } catch (error) {
        // dispatch({ type: FETCH_RECOMMEND_MENTOR_ERROR, payload: { error: "ERROR" } });
    }

}

export const fetchRecommendCoursesByUserMajor = () => async (dispatch) => {
    try {

        const response = await fm.get(`/Course/RecommendCourse`, {
            headers: authHeader(),
        });

        dispatch({ type: FETCH_RECOMMEND_COURSES_BY_MAJOR, payload: response.data });
    } catch (error) {
        // dispatch({ type: FETCH_RECOMMEND_MENTOR_ERROR, payload: { error: "ERROR" } });
    }

}

export const fetchMyLearningCourses = () => async (dispatch) => {
    let userId = UserStorage.getUserId();
    if (!userId) return;

    try {

        const response = await fm.get(`/Course/courseOfStudent/${userId}`, {
            headers: authHeader(),
        });

        dispatch({ type: FETCH_MY_LEARNING_COURSES, payload: response.data });
    } catch (error) {
        // dispatch({ type: FETCH_RECOMMEND_MENTOR_ERROR, payload: { error: "ERROR" } });
    }

}



export const fetchCourse = (id) => async (dispatch) => {
    try {

        const response = await fm.get(`/Course/${id}`, {
            headers: authHeader(),
        });

        dispatch({ type: FETCH_COURSE_BY_ID, payload: response.data });
    } catch (error) {
        // dispatch({ type: FETCH_COURSE_BY_ID_FAIL, payload: { error: "ERROR" } });
    }

}

export const fetchCoursesOfMentor = (mentorId) => async (dispatch) => {
    try {
        const response = await fm.get(`/Course/courseOfMentor/${mentorId}`, {
            headers: authHeader(),
        });

        dispatch({ type: FETCH_COURSES_BY_MENTOR_ID, payload: { id: mentorId, courses: response.data } });
    } catch (error) {
        // dispatch({ type: FETCH_RECOMMEND_MENTOR_ERROR, payload: { error: "ERROR" } });
    }

}