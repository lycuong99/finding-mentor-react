import fm from '../apis/fm';
import { FETCH_USER } from '../constants/actionTypes';
import authHeader from '../ultils/authHeader';
import UserStorage from '../ultils/UserStorage';
import { uploadCourseImage, initCourseData, deleteCourseFirebase, deleteCourseImage } from '../ultils';
import { useDispatch } from 'react-redux';

export const fetchUserInfo = (userId) => async (dispatch) => {
    try {
        const response = fm.get(`User/${userId}`, {
            headers: authHeader(),
        });

        dispatch({ type: FETCH_USER, payload: response });

    } catch (error) {
        // dispatch({ type: FETCH_RECOMMEND_MENTOR_ERROR, payload: { error: "ERROR" } });
    }

}