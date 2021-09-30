import { Button, FormControl, FormLabel, Grid, TextField } from "@mui/material";
import { useFormik } from "formik";
import { connect } from "react-redux";
import { signUp } from '../../actions'

const SignUpForm = (props) => {
    const formik = useFormik({
        initialValues: {
            username: '',
            firstname: '',
            lastname: '',
            confirm: '',
            email: 'foobar@example.com',
            password: 'foobar',
        },
        onSubmit: (values) => {
            console.log(values);
            props.signUp({ fullname: `${values.firstname} ${values.lastname}`, ...values });
        },

    });

    return (
        <Grid direction="column" container component='form' justifyContent="space-between" onSubmit={formik.handleSubmit}
            style={{ height: '100%' }}>
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
                        onChange={formik.handleChange}
                        value={formik.values.confirm}
                        error={formik.touched.confirm && Boolean(formik.errors.confirm)}
                        helperText={formik.touched.confirm && formik.errors.confirm}
                        fullWidth placeholder="confirm" />
                </FormControl>
            </Grid>

            <Button type="submit" variant="contained" color="primary">Sign up</Button>

        </Grid>
    );
}

export default connect(null, {
    signUp
})(SignUpForm);