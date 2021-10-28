import fm from '../apis/fm';
import {
    FETCH_MAJOR_ALL
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