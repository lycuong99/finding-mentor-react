import {
    Avatar, Button, Card, Checkbox, Chip, Container, FormControl,
    FormControlLabel, FormGroup, FormLabel, Grid, Paper, Radio, RadioGroup, Rating, TextField, Typography
} from '@mui/material';
import React, { useEffect, useRef } from 'react';
import MultipleSelectChip from '../../../components/MultipleSelectChip';
import { useFormik } from "formik";
import { connect } from 'react-redux';
import { fetchMentor } from '../../../actions';
import UserStorage from '../../../ultils/UserStorage';
import _ from 'lodash';
import * as yup from 'yup';

const validationSchema = yup.object({
    company: yup
        .string('Enter your Company')
        .required('Company is required'),
    about: yup
        .string('Enter your About')
        .required('About is required'),


});

const BecomeMentorForm = (props) => {

    // console.log(props.initialValues);

    const imageInputRef = useRef(null);
    const formik = useFormik({
        initialValues: {
            ...props.initialValues,
        },
        onSubmit: (values) => {
            console.log(values);
            props.onSubmit(values);
        },
        validationSchema: validationSchema,
    });


    const getSubjects = (formik, subjectMajors) => {

        let arr2 = formik.values.majors.map(majorId => subjectMajors[majorId]).flat();
        return arr2;
    }

    const checkSubjectMajorCompleteLoad = (subjectMajors, formik) => {
        formik.values.majors.forEach(majorId => {
            if (!subjectMajors[majorId]) return false;
        });
        return true;
    }

    return (
        <Grid container direction="column" rowGap={3} sx={{ marginTop: '2em' }}
            component='form'
            justifyContent="space-between" onSubmit={formik.handleSubmit} >
            <Grid item container spacing={2}>
                <Grid item xs>
                    <FormControl component="fieldset" fullWidth>
                        <FormLabel component="legend">What is your major ?</FormLabel>
                        <MultipleSelectChip values={formik.values.majors}
                            selectDatas={props.majors}
                            name="majors"
                            onChange={(values) => {

                                if (values.length < formik.values.majors.length) {

                                    let newSubjects = formik.values.subjects.filter(subjectId => {
                                        console.log(values.flatMap(majorId => props.subjectMajors[majorId]));

                                        return values.flatMap(majorId => props.subjectMajors[majorId]).map(m => m.id).includes(subjectId);

                                    });

                                    formik.setFieldValue('subjects', newSubjects).then(() => {
                                        formik.setFieldValue('majors', values);
                                    });
                                } else {
                                    formik.setFieldValue('majors', values);
                                }


                            }} />
                    </FormControl>
                </Grid>
                <Grid item xs>
                    <FormControl component="fieldset" variant="standard" fullWidth>
                        <FormLabel component="legend">What subject you can mentor ?</FormLabel>
                        {
                            checkSubjectMajorCompleteLoad(props.subjectMajors, formik) ? (<MultipleSelectChip
                                name="subjects"
                                selectDatas={getSubjects(formik, props.subjectMajors)}
                                values={formik.values.subjects}
                                onChange={(values) => {
                                    formik.setFieldValue('subjects', values);
                                }} />) : 'loading'
                        }



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
                        }}
                        error={formik.touched.company && Boolean(formik.errors.company)}
                        helperText={formik.touched.company && formik.errors.company} />
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
                        rows={5} value={formik.values.about}
                        onChange={(e) => {
                            formik.handleChange(e);
                        }}
                        error={formik.touched.about && Boolean(formik.errors.about)}
                        helperText={formik.touched.about && formik.errors.about} />
                </FormControl>
            </Grid>
            <Grid item>
                <Button type='submit' variant="contained">SAVE</Button>
            </Grid>
        </Grid >
    );
}


export default BecomeMentorForm;