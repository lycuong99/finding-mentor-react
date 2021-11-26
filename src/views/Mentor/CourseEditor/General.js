import React, { useEffect, useRef, useState } from 'react';
import {
    Button, Container, Divider, Grid, Paper, TextField, Typography, List, ListItemButton, ListItemIcon,
    Select, ListItemText, ListItem, FormControl, FormLabel, MenuItem
} from '@mui/material';
import { Box } from '@mui/system';

import { fetchAllMajor, fetchAllSubjectByMajor } from '../../../actions';
import { DesktopDatePicker } from '@mui/lab';
import { Formik, useFormik } from "formik";
import { connect } from 'react-redux';
import _ from 'lodash';
import PropTypes from 'prop-types'
import * as yup from 'yup';


const validationSchema = yup.object({
    name: yup
        .string('Enter course name')
        .required('Course name is required'),
    description: yup
        .string('Enter course description')
        .required('Course description is required'),
    startDate: yup.date().min(new Date(), "StartDate must be after now!")

});

const General = (props) => {

    let durationNumber = 1;
    let durationUnit = 'day';


    if (props.initValues && props.initValues.duration) {
        const myArray = props.initValues.duration.split(" ");

        if (myArray.length == 2) {
            durationNumber = myArray[0];
            durationUnit = myArray[1];
        }
    }

    const handleSubmit = (values) => {
        let valuesNew = { ...values, duration: `${values.durationNumber} ${values.durationUnit}` };
        delete valuesNew.durationUnit;
        delete valuesNew.durationNumber;
        delete valuesNew.imageFile;
        props.onSubmit(valuesNew);
    };

    let majorIdInit = '';
    if (props.initValues)
        _.keys(props.subjectMajors).forEach(key => {
            props.subjectMajors[key].forEach(subject => {
                // console.log(subject);
                if (subject.id === props.initValues.subjectId) {
                    majorIdInit = key;
                    return;
                }
            })
        });

    console.log(majorIdInit);
    const initialValues = {
        name: '',
        imageUrl: '',
        imageFile: '',
        description: '',
        price: 0,
        startDate: new Date(),
        duration: 1,
        majorId: majorIdInit,
        subjectId: '',
        ...props.initValues,
        durationUnit: durationUnit,
        durationNumber: durationNumber,
        imageFileData: '',
    };


    return (<Box>
        <Formik
            initialValues={{ ...initialValues }}
            enableReinitialize
            onSubmit={(values, actions) => {
                handleSubmit(values);
            }}

            validationSchema={validationSchema}

        >
            {formik => {

                return (
                    <Paper elevation={2} component='form' onSubmit={formik.handleSubmit}>
                        <Typography variant="h2" sx={{ padding: '1em' }}>General</Typography>
                        <Divider />
                        <Grid container direction="column" rowGap={3} sx={{ padding: '2em' }} >
                            <Grid item>
                                <FormControl component="fieldset" fullWidth>
                                    <FormLabel component="legend">Course title</FormLabel>
                                    <TextField fullWidth name="name" value={formik.values.name} onChange={(e) => {
                                        formik.handleChange(e);
                                    }}
                                        error={formik.touched.name && Boolean(formik.errors.name)}
                                        helperText={formik.touched.name && formik.errors.name} />
                                </FormControl>
                            </Grid>

                            <Grid item>
                                <FormControl component="fieldset" fullWidth>
                                    <FormLabel component="legend">Course Description</FormLabel>
                                    <TextField fullWidth multiline rows={5}
                                        name="description" value={formik.values.description}
                                        onChange={(e) => {
                                            formik.handleChange(e);
                                        }}
                                        error={formik.touched.description && Boolean(formik.errors.description)}
                                        helperText={formik.touched.description && formik.errors.description} />
                                </FormControl>
                            </Grid>

                            <Grid item container spacing={4}>
                                <Grid item xs={6}>
                                    <FormControl component="fieldset" fullWidth>
                                        <FormLabel component="legend">Course Image</FormLabel>
                                        <TextField fullWidth type="file" name="imageFile" value={formik.values.imageFile} onChange={(e) => {
                                            // setImage(e.target.files[0]);
                                            // console.log(e.target.files[0]);
                                            formik.handleChange(e);
                                            formik.setFieldValue('imageFileData', e.target.files[0]);
                                        }} />

                                    </FormControl>
                                </Grid>
                                <Grid item xs={6} >
                                    <div style={{ padding: '16px', border: '1px solid #e5e7eb', borderRadius: 12, marginTop: '23px' }}>
                                        <img src={formik.values.imageFileData ? URL.createObjectURL(formik.values.imageFileData) : formik.values.imageUrl} style={{ height: '200px', maxWidth: '100%' }} />
                                    </div>
                                </Grid>

                            </Grid>
                            <Grid item container spacing={4} >
                                <Grid item xs={6}>
                                    <FormControl component="fieldset" fullWidth>
                                        <FormLabel component="legend">What is major ?</FormLabel>
                                        {/* <MultipleSelectChip /> */}
                                        <Select
                                            name='majorId'
                                            required
                                            value={formik.values.majorId}
                                            onChange={(e) => {
                                                //  formik.handleChange(e);
                                                formik.setFieldValue('majorId', e.target.value);
                                                // setMajorInit(e.target.value);
                                                formik.setFieldValue('subjectId', props.subjectMajors[e.target.value][0].id);
                                            }}>
                                            {
                                                props.majors ? props.majors.map(major => ((
                                                    <MenuItem value={major.id} key={major.id}>{major.name}</MenuItem>
                                                ))) : null
                                            }
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs>
                                    <FormControl component="fieldset" fullWidth>
                                        <FormLabel component="legend">What is subject ?</FormLabel>
                                        <Select name='subjectId'
                                            required
                                            value={formik.values.subjectId} onChange={(e) => {
                                                formik.handleChange(e);
                                            }}>
                                            {
                                                props.majors && props.subjectMajors ? props.subjectMajors[formik.values.majorId] ?
                                                    props.subjectMajors[formik.values.majorId].map((subject) => ((
                                                        <MenuItem value={subject.id} key={subject.id}>{subject.name}</MenuItem>
                                                    )))
                                                    : null : null
                                            }
                                        </Select>
                                    </FormControl>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <FormControl component="fieldset">
                                    <FormLabel component="legend">Price</FormLabel>
                                    <Select name='price' value={formik.values.price} onChange={(e) => {
                                        formik.handleChange(e);
                                    }}>
                                        <MenuItem value={0}>Free</MenuItem>
                                        <MenuItem value={5}>5</MenuItem>
                                        <MenuItem value={10}>10</MenuItem>
                                        <MenuItem value={15}>15</MenuItem>
                                        <MenuItem value={20}>20</MenuItem>
                                        <MenuItem value={25}>25</MenuItem>
                                        <MenuItem value={30}>30</MenuItem>
                                        <MenuItem value={50}>50</MenuItem>
                                        <MenuItem value={100}>100</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item container spacing={4} >
                                <Grid item xs={6}>
                                    <FormControl component="fieldset" fullWidth>
                                        <FormLabel component="legend">Start Date</FormLabel>
                                        <DesktopDatePicker
                                            inputFormat="MM/dd/yyyy"
                                            name='startDate' value={formik.values.startDate}
                                            onChange={(newValue) => {
                                                formik.setFieldValue("startDate", newValue);
                                            }}
                                            error={formik.touched.description && Boolean(formik.errors.description)}
                                            helperText={formik.touched.description && formik.errors.description}
                                            renderInput={(params) => <TextField {...params} error={formik.touched.startDate && Boolean(formik.errors.startDate)}
                                                helperText={formik.touched.description && formik.errors.startDate} />}
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid item>
                                    <FormControl component="fieldset" fullWidth>
                                        <FormLabel component="legend">Duration</FormLabel>
                                        <Grid container>
                                            <Grid item>
                                                <FormControl component="fieldset" fullWidth>
                                                    <TextField fullWidth type="number" name='durationNumber' value={formik.values.durationNumber} onChange={(e) => {
                                                        formik.handleChange(e);
                                                    }} />
                                                </FormControl>
                                            </Grid>
                                            <Grid item>
                                                <FormControl component="fieldset" fullWidth>
                                                    <FormLabel component="legend"></FormLabel>
                                                    <Select value={0} name='durationUnit' value={formik.values.durationUnit} onChange={(e) => {
                                                        formik.handleChange(e);
                                                    }}>
                                                        <MenuItem value={'day'}>Day</MenuItem>
                                                        <MenuItem value={'week'}>Week</MenuItem>
                                                        <MenuItem value={'month'}>Month</MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </Grid>
                                        </Grid>
                                    </FormControl>
                                </Grid>

                            </Grid>
                            <Grid item>
                                <Button type="submit" variant="contained">{props.type == 'update' ? 'save' : 'next'}</Button>
                            </Grid>
                        </Grid>
                    </Paper>

                );
            }}
        </Formik>
    </Box>);
}

General.propTypes = {
    type: PropTypes.oneOf([
        'update', 'create'
    ])
}

General.defaultProps = {
    type: 'create'
}

const mapStateToProps = (state) => {
    return {
        majors: state.major.majorsOfMentor,
        subjectMajors: state.major.subjectMajors,
    }
};

export default connect(mapStateToProps, {
})(General);