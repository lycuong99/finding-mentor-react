import {
    Avatar, Button, Card, Checkbox, Chip, Container, FormControl,
    FormControlLabel, FormGroup, FormLabel, Grid, Paper, Radio, RadioGroup, Rating, TextField, Typography
} from '@mui/material';
import React, { useEffect } from 'react';
import MultipleSelectChip from '../../../components/MultipleSelectChip';
import { useFormik } from "formik";
import { connect } from 'react-redux';
import { fetchMentor } from '../../../actions';
import UserStorage from '../../../ultils/UserStorage';

const majors_init = [
    {
        "id": "CN",
        "description": null,
        "isDeleted": false,
        "name": "Chinese",
        "dateCreated": "2021-11-11T08:42:02.464753",
        "dateUpdated": "2021-11-11T08:42:02.4647532"
    },
    {
        "id": "GD",
        "description": null,
        "isDeleted": false,
        "name": "Graphic Design",
        "dateCreated": "2021-11-11T08:42:02.4647538",
        "dateUpdated": "2021-11-11T08:42:02.4647539"
    },
    {
        "id": "SA",
        "description": null,
        "isDeleted": false,
        "name": "English",
        "dateCreated": "2021-11-11T08:42:02.4647473",
        "dateUpdated": "2021-11-11T08:42:02.4647474"
    },
    {
        "id": "SB",
        "description": null,
        "isDeleted": false,
        "name": "Economic",
        "dateCreated": "2021-11-11T08:42:02.4647447",
        "dateUpdated": "2021-11-11T08:42:02.4647453"
    },
    {
        "id": "SE",
        "description": null,
        "isDeleted": false,
        "name": "Software Engineering",
        "dateCreated": "2021-11-11T08:42:02.4637533",
        "dateUpdated": "2021-11-11T08:42:02.4646407"
    },
    {
        "id": "SJ",
        "description": null,
        "isDeleted": false,
        "name": "Japanese",
        "dateCreated": "2021-11-11T08:42:02.4647535",
        "dateUpdated": "2021-11-11T08:42:02.4647536"
    }
]

const MentorProfileForm = (props) => {

    const formik = useFormik({
        initialValues: props.initialValues,
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
                            name='address'
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
                            name='phone'
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
                        <MultipleSelectChip values={formik.values.majors}
                            selectDatas={majors_init}
                            onChange={(values) => {
                                // formik.handleChange(e);
                                formik.setFieldValue('majors', values);
                            }} />
                    </FormControl>
                </Grid>
                <Grid item xs>
                    <FormControl component="fieldset" variant="standard" fullWidth>
                        <FormLabel component="legend">What subject you can mentor ?</FormLabel>
                        {/* <MultipleSelectChip
                            selectData={}
                            values={formik.values.subjects}
                            onChange={(e) => {
                                formik.handleChange(e);
                            }} /> */}

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
    );
}
const mapStateToProps = (state) => ({

});

export default connect(mapStateToProps, {

})(MentorProfileForm);