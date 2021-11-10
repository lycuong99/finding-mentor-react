import {
    Avatar, Button, Card, Checkbox, Chip, Container, FormControl,
    FormControlLabel, FormGroup, FormLabel, Grid, Paper, Radio, RadioGroup, Rating, TextField, Typography
} from '@mui/material';
import React from 'react';
import MultipleSelectChip from '../../../components/MultipleSelectChip';
import { useFormik } from "formik";

const EditProfilePage = () => {
    const formik = useFormik({
        initialValues: {
            majors: [],
            subjects: [],
            isGraduted: false,
            company: '',
            fullname: '',
            about: ''
        },
        onSubmit: (values) => {
            console.log(values);
        },
        validate: (values) => {
            const errors = {};


            // if (!values.email) {
            //     errors.email = 'Required';
            // } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            //     errors.email = 'Invalid email address';
            // }

            // if (!values.email) {
            //     errors.password = "Required!"
            // }

            // return errors;
        }
    });
    return (
        <Container maxWidth="lg" sx={{ minHeight: '100vh', paddingTop: '2em' }}>

            <Paper sx={{ paddingLeft: '2em', paddingRight: '2em', paddingTop: '2em', paddingBottom: '3em', borderRadius: 3, borderWidth: '2px' }} variant="outlined">
                <Typography variant="h1">Profile</Typography>

                <Grid container direction="column" rowGap={3} sx={{ marginTop: '2em' }}
                    component='form'
                    justifyContent="space-between" onSubmit={formik.handleSubmit} >
                    <Grid item>
                        <FormControl component="fieldset" fullWidth>
                            <FormLabel component="legend">Fullname</FormLabel>
                            <TextField fullWidth
                                name='fullname'
                                value={formik.values.fullname}

                                onChange={(e) => {
                                    formik.handleChange(e);
                                }} />
                        </FormControl>
                    </Grid>
                    <Grid item container spacing={2}>
                        <Grid item xs>
                            <FormControl component="fieldset" fullWidth>
                                <FormLabel component="legend">Address</FormLabel>
                                <TextField fullWidth
                                    name='fullname'
                                    value={formik.values.fullname}

                                    onChange={(e) => {
                                        formik.handleChange(e);
                                    }} />
                            </FormControl>
                        </Grid>
                        <Grid item xs>
                            <FormControl component="fieldset" fullWidth>
                                <FormLabel component="legend">Phone</FormLabel>
                                <TextField fullWidth
                                    name='fullname'
                                    value={formik.values.fullname}

                                    onChange={(e) => {
                                        formik.handleChange(e);
                                    }} />
                            </FormControl>
                        </Grid>
                    </Grid>
                    <Grid item container spacing={2}>
                        <Grid item xs>
                            <FormControl component="fieldset" fullWidth>
                                <FormLabel component="legend">What is you major ?</FormLabel>
                                <MultipleSelectChip values={formik.values.majors} onChange={(e) => {
                                    formik.handleChange(e);
                                }} />
                            </FormControl>
                        </Grid>
                        <Grid item xs>
                            <FormControl component="fieldset" variant="standard" fullWidth>
                                <FormLabel component="legend">What subject you can mentor ?</FormLabel>
                                <MultipleSelectChip values={formik.values.subjects} onChange={(e) => {
                                    formik.handleChange(e);
                                }} />

                            </FormControl>
                        </Grid>
                    </Grid>

                    <Grid item>
                        <FormControl component="fieldset" fullWidth>
                            <FormLabel component="legend">Have you graduated yet ?</FormLabel>
                            <FormControlLabel control={
                                <Checkbox
                                    name='isGraduted'
                                    checked={formik.values.isGraduted}
                                    onChange={(e) => {
                                        formik.handleChange(e);
                                    }} />

                            } label="Graduted" />

                        </FormControl>
                    </Grid>
                    <Grid item>
                        <FormControl component="fieldset" fullWidth>
                            <FormLabel component="legend">What company are you working ?</FormLabel>
                            <TextField fullWidth
                                name='company'
                                value={formik.values.company}
                                onChange={(e) => {
                                    formik.handleChange(e);
                                }} />
                        </FormControl>
                    </Grid>
                    {/* <Grid item>
                        <FormControl component="fieldset" fullWidth>
                            <FormLabel component="legend">Where are you live</FormLabel>
                            <TextField fullWidth />
                        </FormControl>
                    </Grid> */}
                    <Grid item>
                        <FormControl fullWidth>
                            <FormLabel>Tell us a little bit about yourself. </FormLabel>
                            <TextField fullWidth multiline
                                name='about'
                                rows={5} value={formik.values.about} onChange={(e) => {
                                    formik.handleChange(e);
                                }} />
                        </FormControl>
                    </Grid>
                    <Grid item>
                        <Button type='submit' variant="contained">SAVE</Button>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    );
}
export default EditProfilePage;