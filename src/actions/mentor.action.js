import fm from '../apis/fm';
import {
    FETCH_RECOMMEND_MENTOR, FETCH_RECOMMEND_MENTOR_ERROR,
    FETCH_RECOMMEND_MENTOR_BY_MAJOR, FETCH_RECOMMEND_MENTOR_BY_MAJOR_ERROR,
    FETCH_MENTOR_SEARCH
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