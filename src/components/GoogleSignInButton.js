import { Google } from "@mui/icons-material";
import { Button } from "@mui/material";
import firebase from "../firebase";
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, getAdditionalUserInfo } from "firebase/auth";
import { verifySignIn, verifySignUp } from '../actions';
import { connect } from "react-redux";


const signUp = (email, password) => {

    const auth = getAuth(firebase);
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
}

const signIn = (email, password) => {
    const auth = getAuth(firebase);
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
}

const GoogleSignInButton = (props) => {
    const signInWithGoogle = () => {

        const auth = getAuth(firebase);
        const provider = new GoogleAuthProvider();

        signInWithPopup(auth, provider).then((result) => {
            const additionalUserInfo = getAdditionalUserInfo(result);
            console.log(result);

            if (additionalUserInfo.isNewUser) {

                result.user.getIdToken(true).then(idToken => {

                    const userInfo = {
                        fullname: result.user.displayName,
                        email: result.user.email,
                        idToken: idToken
                    }
                    console.log(idToken);
                    props.verifySignUp(userInfo);
                })
                // props.verifySignUp()
            } else {
                result.user.getIdToken(true).then(idToken => {
                    props.verifySignIn(idToken);
                })
                
            }
            console.log("SIGN IN WITH GG!")
            console.log(additionalUserInfo.isNewUser ? "This user just registered" : "Existing User")
        }).catch((error) => {

        });
    }

    return (<Button color="error" variant="contained" style={props.style} onClick={signInWithGoogle}><Google />{props.children}</Button>)
}


export default connect(null, {
    verifySignUp,verifySignIn
})(GoogleSignInButton);
