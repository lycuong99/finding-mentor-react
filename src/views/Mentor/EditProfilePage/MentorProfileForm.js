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

    // console.log(props.initialValues);

    const imageInputRef = useRef(null);
    const formik = useFormik({
        initialValues: {
            ...props.initialValues,
            imageFileData: '',
            imageFile: '',
        },
        onSubmit: (values) => {
            console.log(values);
            props.onSubmit(values);
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
    //console.log(['SJ','SE'].flatMap(majorId => props.subjectMajors[majorId]));

    const getSubjects = (formik, subjectMajors) => {
        // let arr1 = formik.values.majors.map(majorId => subjectMajors[majorId]);
        let arr2 = formik.values.majors.map(majorId => subjectMajors[majorId]).flat();
        // console.log(formik.values.majors);
        // console.log(subjectMajors);
        // console.log(arr2);

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
                            value={formik.values.address}

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
            <Grid item container spacing={4}>
                <Grid item xs={6}>
                    <FormControl component="fieldset" >
                        <FormLabel component="label" htmlFor="upload" ref={imageInputRef} >Avatar Image</FormLabel>

                        <TextField fullWidth type="file"

                            placeholder="change avatar"
                            id="input-img"


                            style={{ display: 'none', }}
                            InputProps={{ id: 'upload', }}
                            name="imageFile" value={formik.values.imageFile} onChange={(e) => {
                                // setImage(e.target.files[0]);
                                // console.log(e.target.files[0]);
                                formik.handleChange(e);
                                formik.setFieldValue('imageFileData', e.target.files[0]);
                            }} />
                        {/* <label
                           
                             style={{
                                borderRadius: '0.3rem',
                                cursor: 'pointer', backgroundColor: '#01C2A9',
                                padding: '8px 12px',
                                textAlign: 'center',
                                display: 'inline-block'
                            }}>Upload</label> */}
                        <Button onClick={() => {
                            imageInputRef.current?.click();
                        }}>
                            Upload
                        </Button>
                    </FormControl>
                </Grid>
                <Grid item >
                    <div style={{
                        padding: '16px', border: '2px solid #ebebeb',
                        borderRadius: 12, marginTop: '23px', width: '300px', height: '300px'
                    }}>
                        <img src={formik.values.imageFileData ? URL.createObjectURL(formik.values.imageFileData) : formik.values.avatarUrl} style={{ height: '100%', maxWidth: '100%' }} />
                    </div>
                </Grid>

            </Grid>
            <Grid item container spacing={2}>
                <Grid item xs>
                    <FormControl component="fieldset" fullWidth>
                        <FormLabel component="legend">What is you major ?</FormLabel>
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
                        rows={5} value={formik.values.about}
                        onChange={(e) => {
                            formik.handleChange(e);
                        }} />
                </FormControl>
            </Grid>
            <Grid item>
                <Button type='submit' variant="contained">SAVE</Button>
            </Grid>
        </Grid >
    );
}


export default MentorProfileForm;