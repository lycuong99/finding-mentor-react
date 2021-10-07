import { Alert, Button, FormControl, FormLabel, Grid, TextField } from "@mui/material";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { verifySignIn } from '../../actions';
import GoogleSignInButton from "../../components/GoogleSignInButton";
import firebase from "../../firebase";
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import history from "../../history";


const LoginForm = (props) => {

    const [invalid, setInvalid] = useState(false);
    const [error, setError] = useState(null);

    const signInFirebase = (email, password) => {
        const auth = getAuth(firebase);
        console.log("hello1");
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log("hello");
                console.log(user);
                // verify with backend

                user.getIdToken(true).then(idToken => {
                    props.verifySignIn(idToken);
                })
            })
            .catch((error) => {
                const errorCode = error.code;
                // const errorMessage = error.message;
                console.log(errorCode);
                if (errorCode === 'auth/wrong-password') {
                    console.log("Wrong Password!");
                    setError('Wrong Password!');
                } else if (errorCode === 'auth/user-not-found') {
                    setError('User is not existed!');
                } else {
                    setError('Error is unknown');
                }

            });
    }


    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: (values) => {
            console.log(values);
            signInFirebase(values.email, values.password);
        },
        validate: (values) => {
            const errors = {};
            console.log(props);

            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }

            if (!values.email) {
                errors.password = "Required!"
            }

            return errors;
        }
    });

    return (
        <Grid direction="column" container component='form' justifyContent="space-between" onSubmit={formik.handleSubmit} style={{ height: '100%' }}>
            <Grid item>
                {
                    error ? (
                        <Alert color="warning">{error}</Alert>
                    ) : null
                }

                <FormControl fullWidth>
                    <FormLabel>email</FormLabel>
                    <TextField size="small" name="email"
                        onChange={(e) => {
                            formik.handleChange(e);
                        }}
                        value={formik.values.email}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
                        fullWidth placeholder="email" />
                </FormControl>
            </Grid>
            <Grid item>
                <FormControl fullWidth>
                    <FormLabel>Password</FormLabel>
                    <TextField size="small" name="password"
                        onChange={(e) => {
                            formik.handleChange(e);
                        }}
                        value={formik.values.password}
                        error={formik.touched.password && Boolean(formik.errors.password)}
                        helperText={formik.touched.password && formik.errors.password}
                        fullWidth placeholder="password" />
                </FormControl>
            </Grid>


            <Grid item container>
                <Button type="submit" variant="contained" color="primary" style={{ width: "100%", padding: "0.75em 1em", marginTop: "1em" }}>Sign in</Button>
            </Grid>

            <Grid item container>
                <GoogleSignInButton style={{ width: "100%", padding: "0.75em 1em", marginTop: "1em" }}>Sign In With Google</GoogleSignInButton>
            </Grid>
        </Grid>
    );
};
const mapStateToProps = (state) => {
    return { invalid: state.auth.invalidSignIn }
}

export default connect(mapStateToProps, {
    verifySignIn
})(LoginForm);