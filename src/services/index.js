// import history from '../history';
// import fm from '../apis/fm';
// import UserStorage from "../ultils/UserStorage";

import fm from "../apis/fm";
import authHeader from "../ultils/authHeader";



export const updateMajor = (majorId) => async (dispatch) => {
    try {

        const response = await fm.get("/Student/Major/" + majorId, {
            headers: authHeader(),
        });

    } catch (error) {

    }

}