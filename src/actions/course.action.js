import fm from '../apis/fm';
import {
    FETCH_RECOMMEND_MENTOR, FETCH_RECOMMEND_MENTOR_ERROR,
    FETCH_RECOMMEND_MENTOR_BY_MAJOR, FETCH_RECOMMEND_MENTOR_BY_MAJOR_ERROR,
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