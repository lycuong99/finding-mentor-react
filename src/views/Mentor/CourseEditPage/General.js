import React, { useEffect, useState } from 'react';
import {
    Button, Container, Divider, Grid, Paper, TextField, Typography, List, ListItemButton, ListItemIcon,
    Select, ListItemText, ListItem, FormControl, FormLabel, MenuItem
} from '@mui/material';
import { Box } from '@mui/system';

import { fetchAllMajor, fetchAllSubjectByMajor } from '../../../actions';
import { DesktopDatePicker } from '@mui/lab';
import MultipleSelectChip from '../../../components/MultipleSelectChip';
import { useFormik } from "formik";
import { connect } from 'react-redux';
import _ from 'lodash';
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
const General = (props) => {

    const [image, setImage] = useState('');
    const storage = getStorage();

    const storageRef = ref(storage, 'course/lyvancuong');

    const upload = (successFunc) => {
        if (image == null)
            return;


        // Create a reference to 'image.jpg'
        let date = new Date();
        let newName = date.getTime() + image.name.substring(image.name.lastIndexOf('.'));
        // console.log(newName);
        const mountainsRef = ref(storage, newName);

        // // Create a reference to 'images/mountains.jpg'
        // const mountainImagesRef = ref(storage, 'images/mountains.jpg');

        // storage.ref(`/images/${image.name}`).put(image)
        //     .on("state_changed", alert("success"), alert);

        // 'file' comes from the Blob or File API
        uploadBytes(mountainsRef, image).then((snapshot) => {
            console.log('Uploaded a blob or file!');
            // console.log(snapshot);
            getDownloadURL(snapshot.ref)
                .then((url) => {
                    // console.log(url);
                    formik.setFieldValue('imageURL', url);
                    // console.log(formik.values);
                    successFunc({ ...formik.values, imageURL: url });
                })
                .catch((error) => {
                    // Handle any errors
                    console.log(error);
                });
        });


    }
    const formik = useFormik({
        initialValues: {
            name: '',
            imageURL: '',
            imageFile: '',
            description: '',
            price: 0,
            startDate: new Date(),
            duration: 1,
            durationUnit: 1,
            major: '',
            subjectId: '',
            ...props.initData
        },
        onSubmit: (values) => {
            upload(props.onSubmit);
            // console.log(values);

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

    useEffect(() => {
        if (_.isEmpty(props.majors)) {
            props.fetchAllMajor();
        }
    }, []);

    return (<Box>
        <Paper elevation={2} component='form' onSubmit={formik.handleSubmit}>
            <Typography variant="h2" sx={{ padding: '1em' }}>General</Typography>
            <Divider />
            <Grid container direction="column" rowGap={3} sx={{ padding: '2em' }} >
                <Grid item>
                    <FormControl component="fieldset" fullWidth>
                        <FormLabel component="legend">Course title</FormLabel>
                        <TextField fullWidth name="name" value={formik.values.name} onChange={(e) => {
                            formik.handleChange(e);
                        }} />
                    </FormControl>
                </Grid>

                <Grid item>
                    <FormControl component="fieldset" fullWidth>
                        <FormLabel component="legend">Course Description</FormLabel>
                        <TextField fullWidth multiline rows={5} name="description" value={formik.values.description} onChange={(e) => {
                            formik.handleChange(e);
                        }} />
                    </FormControl>
                </Grid>

                <Grid item>
                    <FormControl component="fieldset" fullWidth>
                        <FormLabel component="legend">Course Image</FormLabel>
                        <TextField fullWidth type="file" name="imageFile" value={formik.values.imageFile} onChange={(e) => {
                            setImage(e.target.files[0]);
                            // console.log(e.target.files[0]);
                            formik.handleChange(e);
                        }} />
                        <div style={{ padding: '16px' }}>
                            <img src={image ? URL.createObjectURL(image) : undefined} style={{ height: '200px', maxWidth: '1000px' }} />
                        </div>
                    </FormControl>
                </Grid>
                <Grid item container spacing={4} >
                    <Grid item xs={6}>
                        <FormControl component="fieldset" fullWidth>
                            <FormLabel component="legend">What is major ?</FormLabel>
                            {/* <MultipleSelectChip /> */}
                            <Select label="Select Major" name='major' value={formik.values.major} onChange={(e) => {
                                formik.handleChange(e);
                                props.fetchAllSubjectByMajor(e.target.value);
                            }}>
                                {
                                    props.majors ? props.majors.map(major => ((
                                        <MenuItem value={major.id}>{major.name}</MenuItem>
                                    ))) : null
                                }
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs>
                        <FormControl component="fieldset" fullWidth>
                            <FormLabel component="legend">What subject you can mentor ?</FormLabel>
                            <Select label="Select Subject" name='subjectId' value={formik.values.subjectId} onChange={(e) => {
                                formik.handleChange(e);
                            }}>
                                {
                                    props.majors && props.subjectMajors ? props.subjectMajors[formik.values.major] ?
                                        props.subjectMajors[formik.values.major].map((subject) => ((
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
                        <Select label="Select Price" name='price' value={formik.values.price} onChange={(e) => {
                            formik.handleChange(e);
                        }}>
                            <MenuItem value={0}>Free</MenuItem>
                            <MenuItem value={5}>5</MenuItem>
                            <MenuItem value={10}>10</MenuItem>
                            <MenuItem value={15}>15</MenuItem>
                            <MenuItem value={20}>20</MenuItem>
                            <MenuItem value={25}>25</MenuItem>
                            <MenuItem value={30}>30</MenuItem>
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
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </FormControl>
                    </Grid>
                    <Grid item>
                        <FormControl component="fieldset" fullWidth>
                            <FormLabel component="legend">Duration</FormLabel>
                            <Grid container>
                                <Grid item>
                                    <FormControl component="fieldset" fullWidth>
                                        <TextField fullWidth type="number" name='duration' value={formik.values.duration} onChange={(e) => {
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
                                            <MenuItem value={0}>Day</MenuItem>
                                            <MenuItem value={1}>Week</MenuItem>
                                            <MenuItem value={2}>Month</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                            </Grid>
                        </FormControl>
                    </Grid>
                    <Grid item>
                        <Button type="submit">NEXT</Button>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>

        {/* Course 
                Title
                Course Description
                Price
                Subject
                Course Image
                Duration
                Status
                Start Date
        
                Section
                    title
                    Lecture
                        title
                        Content


             */}
    </Box>);
}

const mapStateToProps = (state) => {

    // let subjectMajors = state.major.subjectMajors.map(majorSubject => ({majorSubject.}));
    // let 
    return {
        majors: state.major.majors,
        subjectMajors: state.major.subjectMajors
    }
};

export default connect(mapStateToProps, {
    fetchAllMajor, fetchAllSubjectByMajor
})(General);