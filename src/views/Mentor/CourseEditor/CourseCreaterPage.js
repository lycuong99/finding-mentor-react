import {
    Button, Container, Divider, Grid, Paper, TextField, Typography, List, ListItemButton, ListItemIcon,
    Select, ListItemText, ListItem, FormControl, FormLabel, MenuItem
} from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import CourseCard from '../../../components/CourseCard';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import RadioButtonUncheckedOutlinedIcon from '@mui/icons-material/RadioButtonUncheckedOutlined';
import { DesktopDatePicker } from '@mui/lab';
import MultipleSelectChip from '../../../components/MultipleSelectChip';
import Curriculum from './Curriculum';
import General from './General';
import history from '../../../history';
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { connect } from 'react-redux';
import { addCourse, fetchAllMajor, fetchAllSubjectByMajor } from '../../../actions';
import _ from 'lodash';
const CourseCreaterPage = (props) => {
    const paddingX = '3em';
    const [selectedItem, setSelectedItem] = useState(0);
    const [course, setCourse] = useState({});

    const storage = getStorage();
    const storageRef = ref(storage, 'course/lyvancuong');

    useEffect(() => {
        if (_.isEmpty(props.majors)) {
            props.fetchAllMajor();
        }
    }, []);

    useEffect(() => {
        if (!_.isEmpty(props.majors)) {
            props.majors.forEach(major => { props.fetchAllSubjectByMajor(major.id); })
        }
    }, [props.majors]);
    const uploadImage = (image, successFunc) => {
        if (image == null) {
            successFunc(null);
            return;
        }

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
                    successFunc(url);
                })
                .catch((error) => {
                    // Handle any errors
                    console.log(error);
                });
        });


    }

    const handleSubmitGeneralInfo = (values) => {
        console.log(values);
        let image = values.imageFileData;

        uploadImage(image, (imageURL) => {
            let courseData = { ...values, imageURL: imageURL, imageFileData: undefined, imageFile: undefined };
            setCourse({ ...courseData, });
            setSelectedItem(1);
        })

    }

    const handleSubmitCurriculum = (curiculumObj) => {
        let newCourse = { ...course, curriculum: curiculumObj, mentor: { id: '111-222-333-444', name: "Ly Van Cuong" } };
        setCourse(newCourse);
        props.addCourse(newCourse);
        history.replace('/mentor/course');
    }



    return (
        <Container maxWidth="xl" sx={{ paddingBottom: '2em', }} >
            <Grid container spacing={2}>
                <Grid item width="300px">
                    {/* MENU */}
                    <Paper>
                        <Typography variant="h3" sx={{ padding: '1em' }} >Course Information</Typography>
                        <Divider />
                        <List >
                            <ListItemButton selected={selectedItem == 0} onClick={() => {
                                setSelectedItem(0);
                            }}>
                                <ListItemText primary="General" />
                            </ListItemButton>
                            <ListItemButton selected={selectedItem == 1} onClick={() => {
                                setSelectedItem(1);
                            }}>
                                <ListItemText primary="Curiculum" />
                            </ListItemButton>
                            <ListItem>
                                <Button>Submit</Button>
                            </ListItem>
                        </List>
                    </Paper>
                </Grid>
                <Grid item xs>
                    <div hidden={selectedItem !== 0}>
                        {!_.isEmpty(props.majors) && !_.isEmpty(props.subjectMajors) ?
                            <General onSubmit={handleSubmitGeneralInfo} initValues={{}}
                                key="general-form"
                                majors={props.majors} subjectMajors={props.subjectMajors} />
                            : 'loading'}
                    </div>
                    <div hidden={selectedItem !== 1}>
                        <Curriculum onSubmit={handleSubmitCurriculum} />
                    </div>

                </Grid>
            </Grid>
        </Container>
    );
}
const mapStateToProps = (state) => {
    return {
        majors: state.major.majors,
        subjectMajors: state.major.subjectMajors,
    }
};
export default connect(mapStateToProps, {
    addCourse, fetchAllMajor, fetchAllSubjectByMajor
})(CourseCreaterPage);