import fm from '../apis/fm';
import {
    FETCH_MAJOR_ALL, FETCH_SUBJECT_BY_MAJOR, FETCH_MENTOR_MAJORS
} from '../constants/actionTypes';
import authHeader from '../ultils/authHeader';

export const fetchAllMajor = () => async (dispatch) => {
    try {

        const response = await fm.get("/Major/GetAllMajor", {
            headers: authHeader(),
        });

        dispatch({ type: FETCH_MAJOR_ALL, payload: response.data });
    } catch (error) {

    }
}

export const fetchAllSubjectByMajor = (majorId) => async (dispatch) => {
    try {

        const response = await fm.get("/Subject/GetAllSubjectByMajorId", {
            params: {
                id: majorId
            },
            headers: authHeader(),
        });

        dispatch({ type: FETCH_SUBJECT_BY_MAJOR, payload: { [majorId]: response.data } });
    } catch (error) {

    }
}

export const fetchMajorsOfMentor = (mentorId) => async (dispatch) => {
    try {

        const response = await fm.get(`/Mentor/Major/${mentorId}`, {
            headers: authHeader(),
        });

        dispatch({ type: FETCH_MENTOR_MAJORS, payload: response.data });
    } catch (error) {

    }
}