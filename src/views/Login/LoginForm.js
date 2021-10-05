import { Alert, Button, FormControl, FormLabel, Grid, TextField } from "@mui/material";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { signIn } from '../../actions';
import { GoogleSignInButton } from "../../components/GoogleAuth";
import history from "../../history";
const LoginForm = (props) => {

    const [invalid, setInvalid] = useState(false);


    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        onSubmit: (values) => {
            console.log(values);
            props.signIn(values);
        },
        validate: (values) => {
            const errors = {};
            console.log(props);

            if (!values.username) {
                errors.username = "Required!"
            }

            if (!values.password) {
                errors.password = "Required!"
            }

            return errors;
        }
    });

    return (
        <Grid direction="column" container component='form' justifyContent="space-between" onSubmit={formik.handleSubmit} style={{ height: '100%' }}>


            <Grid item>
                {
                    props.invalid ? (
                        <Alert color="warning">Invalid username or password</Alert>
                    ) : null
                }

                <FormControl fullWidth>
                    <FormLabel>Username</FormLabel>
                    <TextField size="small" name="username"
                        onChange={(e) => {
                            formik.handleChange(e);
                        }}
                        value={formik.values.username}
                        error={formik.touched.username && Boolean(formik.errors.username)}
                        helperText={formik.touched.username && formik.errors.username}
                        fullWidth placeholder="username" />
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
                <GoogleSignInButton style={{ width: "100%", padding: "0.75em 1em", marginTop: "1em" }}/>
            </Grid>
        </Grid>
    );
};
const mapStateToProps = (state) => {
    return { invalid: state.auth.invalidSignIn }
}

export default connect(mapStateToProps, {
    signIn
})(LoginForm);