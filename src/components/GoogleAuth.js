import { Google } from "@mui/icons-material";
import { Button } from "@mui/material";
import firebase from "../firebase";
import { getAuth, getRedirectResult, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
export function GoogleSignInButton(props) {
    const signInWithGoogle = () => {

        const auth = getAuth(firebase);
        const provider = new GoogleAuthProvider();

        signInWithPopup(auth, provider).then((result) => {
            console.log(result);
        }).catch((error) => {

        });
    }

    return (<Button color="error" variant="contained" style={props.style} onClick={signInWithGoogle}><Google /> Sign In with Google</Button>)
}