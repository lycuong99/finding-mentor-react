import { SIGN_IN, SIGN_IN_FAIL, SIGN_UP, SIGN_UP_FAIL, RESET_AUTH_FORM, SIGN_OUT } from '../constants/actionTypes';
import history from '../history';
import fm from '../apis/fm';
import UserStorage from "../ultils/UserStorage";
import { getAuth, signOut } from '@firebase/auth';

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

            UserStorage.setJWTDecode(response.data.token);
            console.log('Go');
            history.replace("/additional-info");
        }
    } catch (error) {
        console.log('Sign Un fail');
        dispatch({
            type: SIGN_UP_FAIL,
        });
    }
}
export const verifySignUp = ({ fullname, email, idToken }) => async (dispatch) => {

    try {
        console.log({ fullname, email, idToken });
        const response = await fm.post("Account/Register", {
            fullname, email, idToken
        });

        console.log(response);
        if (response.status === 200) {
            dispatch({
                type: SIGN_UP,
                payload: {

                }
            });
            // JwtToken.set(response.data.token);
            // JwtToken.setUsername(username);

            UserStorage.setJWTDecode(response.data.token);
            console.log('Go');
            history.replace("/additional-info");
            // history.replace("/mentee");

        }
    } catch (error) {
        console.log('Sign Un fail');
        dispatch({
            type: SIGN_UP_FAIL,
        });
    }
}

export const logOut = () => {
    UserStorage.clear();
    const auth = getAuth();
    signOut(auth).then(() => {
        // Sign-out successful.
    }).catch((error) => {
        // An error happened.
    });

    return {
        type: SIGN_OUT
    }
}

export const verifySignIn = (idToken) => async (dispatch) => {

    try {
        console.log({ idToken });
        const response = await fm.post("Account/Auth", {
            idToken
        });

        console.log(response);
        if (response.status === 200) {
            dispatch({
                type: SIGN_IN,
                payload: {

                }
            });
            // JwtToken.set(response.data.token);
            // JwtToken.setUsername(username);
            // JwtToken.setJWTDecode(response.data.token);
            UserStorage.setJWTDecode(response.data.token);
            console.log('Go');
            history.replace("/mentee");
        }
    } catch (error) {
        console.log('Sign Un fail');
        dispatch({
            type: SIGN_IN_FAIL,
        });
    }
}

export const signInWithGoogle = ({ username, token, fullname, email }) => async (dispatch) => {

    try {
        console.log({ username, fullname, email });
        const response = await fm.post("Account/RegisterMentor", {
            username, fullname, email
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


export * from './mentor.action';
export * from './major.action';