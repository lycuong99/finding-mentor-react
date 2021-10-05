import { SIGN_IN, SIGN_IN_FAIL, SIGN_UP, SIGN_UP_FAIL, RESET_AUTH_FORM } from '../constants/actionTypes';
import history from '../history';
import fm from '../apis/fm';
export const signUp = ({ username, password, fullname, email }) => async (dispatch) => {

    try {
        console.log({ username, password, fullname, email });
        const response = await fm.post("Account/RegisterMentor", {
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
            console.log('Go');
            history.replace("/");
        }
    } catch (error) {
        console.log('Sign Un fail');
        dispatch({
            type: SIGN_UP_FAIL,
        });
    }
}

export const signIn = ({ username, password }) => async (dispatch) => {

    try {
        console.log({ username, password });
        const response = await fm.post("Account/Auth", {
            username, password
        });

        console.log(response);
        if (response.status === 200) {
            dispatch({
                type: SIGN_IN,
                payload: {
                    username
                }
            });
            // JwtToken.set(response.data.token);
            // JwtToken.setUsername(username);
            // JwtToken.setJWTDecode(response.data.token);
            console.log('Go');
            history.replace("/");
        }
    } catch (error) {
        console.log('Sign In fail');
        dispatch({
            type: SIGN_IN_FAIL,
        });
    }
}
export const reset = () => {
    return { type: RESET_AUTH_FORM }
}
