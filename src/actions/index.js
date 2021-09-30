import { SIGN_UP, SIGN_UP_FAIL } from '../constants/actionTypes';

import fm from '../apis/fm';
export const signUp = ({ username, password, fullname, email }) => async (dispatch) => {

    try {
        console.log({ username, password, fullname, email });
        const response = await fm.post("Account/Register", {
            username, password, fullname, email
        });

        console.log(response);
        if (response.status === 200) {
            dispatch({
                type: SIGN_UP,
                payload: {
                    username
                }
            });
            // JwtToken.set(response.data.token);
            // JwtToken.setUsername(username);
            // JwtToken.setJWTDecode(response.data.token);
            // history.replace("/user");
        }
    } catch (error) {
        console.log('Sign Un fail');
        dispatch({
            type: SIGN_UP_FAIL,
        });
    }



}