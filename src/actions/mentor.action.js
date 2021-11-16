import fm from '../apis/fm';
import {
    FETCH_RECOMMEND_MENTOR, FETCH_RECOMMEND_MENTOR_ERROR,
    FETCH_RECOMMEND_MENTOR_BY_MAJOR,
    FETCH_RECOMMEND_MENTOR_BY_MAJOR_ERROR,
    FETCH_MENTOR_SEARCH,
    FETCH_MENTOR_BY_ID,
    FETCH_MENTOR_BY_ID_FAIL,
    UPDATE_MENTOR_PROFILE,
    UPDATE_MENTOR_PROFILE_CLOSE_SNACKBAR,
    UPDATE_MENTOR_PROFILE_FAIL,
    UPDATE_MENTOR_PROFILE_SUCCESS
} from '../constants/actionTypes';
import authHeader from '../ultils/authHeader';

export const fetchMentors = (key) => async (dispatch) => {
    try {

        const response = await fm.get(`Mentor/Search/${key}`, {
            headers: authHeader(),
        });

        dispatch({ type: FETCH_MENTOR_SEARCH, payload: response.data });
    } catch (error) {
        // dispatch({ type: FETCH_RECOMMEND_MENTOR_ERROR, payload: { error: "ERROR" } });
    }

}

export const fetchMentor = (id) => async (dispatch) => {
    try {

        const response = await fm.get(`Mentor/Information/${id}`, {
            headers: authHeader(),
        });

        dispatch({ type: FETCH_MENTOR_BY_ID, payload: response.data });
    } catch (error) {
        // dispatch({ type: FETCH_RECOMMEND_MENTOR_ERROR, payload: { error: "ERROR" } });
    }

}

export const fetchRecommendMentor = () => async (dispatch) => {
    try {

        const response = await fm.get("Mentor/RecommendMentor", {
            headers: authHeader(),
        });

        dispatch({ type: FETCH_RECOMMEND_MENTOR, payload: response.data });
    } catch (error) {
        dispatch({ type: FETCH_RECOMMEND_MENTOR_ERROR, payload: { error: "ERROR" } });
    }

}

export const fetchRecommendMentorByMajor = () => async (dispatch) => {
    try {

        const response = await fm.get("Mentor/RecommendMentorByMajor", {
            headers: authHeader(),
        });

        dispatch({ type: FETCH_RECOMMEND_MENTOR_BY_MAJOR, payload: response.data });
    } catch (error) {
        dispatch({ type: FETCH_RECOMMEND_MENTOR_BY_MAJOR_ERROR, payload: { error: "ERROR" } });
    }

}

export const updateMentorProfile = (data) => async (dispatch) => {
    try {

        const response = await fm.put(`/Mentor/Profile/${data.id}`, { ...data },
            {
                headers: authHeader(),
            });

        dispatch({ type: UPDATE_MENTOR_PROFILE_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: UPDATE_MENTOR_PROFILE_FAIL, });
    }

}

export const closeSnackBar = () => {
    return {
        type: UPDATE_MENTOR_PROFILE_CLOSE_SNACKBAR
    }
}

