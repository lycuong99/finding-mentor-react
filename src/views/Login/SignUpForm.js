import { Alert, Button, FormControl, FormLabel, Grid, TextField } from "@mui/material";
import { useFormik } from "formik";
import { connect } from "react-redux";
import { signUp, verifySignUp } from '../../actions';
import firebase from "../../firebase";
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import GoogleSignInButton from "../../components/GoogleSignInButton";



const SignUpForm = (props) => {
    const [error, setError] = useState(null);

    const signUpWithFirebase = ({ firstname, lastname, email, password }) => {
        const auth = getAuth(firebase);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                user.getIdToken(true).then(idToken => {
                    console.log(idToken);
                    props.verifySignUp({ fullname: `${firstname} ${lastname}`, email, idToken });
                })
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
                if (errorCode === 'auth/email-already-in-use') {
                    setError('Email is already in use!');
                }
                // ..
            });
    }


    const formik = useFormik({
        initialValues: {
            username: '',
            firstname: '',
            lastname: '',
            confirm: '',
            email: '',
            password: '',
        },
        onSubmit: (values) => {
            console.log(values);
            signUpWithFirebase(values);

        },
        validate: (values) => {
            const errors = {};


            // if (!values.username) {
            //     errors.username = "Required!"
            // }

            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }

            if (!values.password) {
                errors.password = "Required!"
            }

            if (values.password !== values.confirm) {
                errors.confirm = "Password must match!"
            }

            return errors;
        }
    });

    return (
        <Grid direction="column" container component='form' justifyContent="space-between" onSubmit={formik.handleSubmit}
            style={{ height: '100%' }}>
            {
                error ? (
                    <Alert color="warning">{error}</Alert>
                ) : null
            }
            <Grid item container justifyContent="space-between">
                <Grid item xs style={{ marginRight: '1em' }}>

                    <FormControl fullWidth>
                        <FormLabel>First Name</FormLabel>
                        <TextField size="small" name="firstname"
                            onChange={formik.handleChange}
                            value={formik.values.firstname}
                            error={formik.touched.firstname && Boolean(formik.errors.firstname)}
                            helperText={formik.touched.firstname && formik.errors.firstname}
                            fullWidth placeholder="firstname" />
                    </FormControl>
                </Grid>
                <Grid item xs>
                    <FormControl fullWidth>
                        <FormLabel>Last Name</FormLabel>
                        <TextField size="small" name="lastname"
                            onChange={formik.handleChange}
                            value={formik.values.lastname}
                            error={formik.touched.lastname && Boolean(formik.errors.lastname)}
                            helperText={formik.touched.lastname && formik.errors.lastname}
                            fullWidth placeholder="lastname" />
                    </FormControl>
                </Grid>
            </Grid>
            {/* <Grid item>
                <FormControl fullWidth>
                    <FormLabel>Username</FormLabel>
                    <TextField size="small" name="username"
                        onChange={formik.handleChange}
                        value={formik.values.username}
                        error={formik.touched.username && Boolean(formik.errors.username)}
                        helperText={formik.touched.username && formik.errors.username}
                        fullWidth placeholder="username" />
                </FormControl>
            </Grid> */}
            <Grid item>
                <FormControl fullWidth>
                    <FormLabel>Email</FormLabel>
                    <TextField size="small" name="email"

                        onChange={formik.handleChange}
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
                        type="password"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                        error={formik.touched.password && Boolean(formik.errors.password)}
                        helperText={formik.touched.password && formik.errors.password}
                        fullWidth placeholder="password" />
                </FormControl>
            </Grid>

            <Grid item>
                <FormControl fullWidth>
                    <FormLabel>Confirm </FormLabel>
                    <TextField size="small" name="confirm"
                        type="password"
                        onChange={formik.handleChange}
                        value={formik.values.confirm}
                        error={formik.touched.confirm && Boolean(formik.errors.confirm)}
                        helperText={formik.touched.confirm && formik.errors.confirm}
                        fullWidth placeholder="confirm" />
                </FormControl>
            </Grid>

            <Grid item container>
                <Button type="submit" variant="contained" color="primary" style={{ width: "100%", padding: "0.75em 1em", marginTop: "1em" }}>Sign up</Button>
            </Grid>

            <Grid item container>
                <GoogleSignInButton style={{ width: "100%", padding: "0.75em 1em", marginTop: "1em" }}>Sign Up With Google</GoogleSignInButton>
            </Grid>

        </Grid>
    );
}
const mapStateToProps = (state) => {
    return {
        invalid: state.auth.invalidSignUp
    }
}

export default connect(mapStateToProps, {
    signUp, verifySignUp
})(SignUpForm);