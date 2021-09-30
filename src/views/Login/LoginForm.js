import { Button, FormControl, FormLabel, Grid, TextField } from "@mui/material";
import { useFormik } from "formik";
import { connect } from "react-redux";

const LoginForm = () => {
    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        onSubmit: (values) => {
            console.log(values);
        },
    });

    return (
        <Grid direction="column" container component='form' justifyContent="space-between" style={{ height: '100%' }}>
            <Grid item>
                <FormControl fullWidth>
                    <FormLabel>Username</FormLabel>
                    <TextField size="small" name="username"
                        onChange={formik.handleChange}
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
                        onChange={formik.handleChange}
                        value={formik.values.password}
                        error={formik.touched.password && Boolean(formik.errors.password)}
                        helperText={formik.touched.password && formik.errors.password}
                        fullWidth placeholder="password" />
                </FormControl>
            </Grid>

            <Button variant="contained">Sign in</Button>

        </Grid>
    );
};


export default connect()(LoginForm);