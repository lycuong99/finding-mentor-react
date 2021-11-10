import fm from '../apis/fm';
import {
    FETCH_COURSE_BY_ID,
    FETCH_COURSE_BY_ID_FAIL,
    FETCH_COURSE_SEARCH
} from '../constants/actionTypes';
import authHeader from '../ultils/authHeader';

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