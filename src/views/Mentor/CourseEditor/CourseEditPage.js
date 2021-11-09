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
import { fetchCourse_test, updateCourse_test, fetchAllMajor, fetchAllSubjectByMajor } from '../../../actions';
import { useParams } from 'react-router';
import _ from 'lodash';
import MenteeList from '../MenteeList';
import QuestionManager from '../QuestionManager';

const CourseEditPage = (props) => {
    const paddingX = '3em';
    const [selectedItem, setSelectedItem] = useState(0);
    const [course, setCourse] = useState(props.course);



    const storage = getStorage();
    // const storageRef = ref(storage, 'course/lyvancuong');
    const { id } = useParams();
    console.log(props.course?.id);
    useEffect(() => {
        props.fetchCourse_test(id);
        if (_.isEmpty(props.majors)) {
            props.fetchAllMajor();
        }
    }, []);

    useEffect(() => {
        if (!_.isEmpty(props.majors)) {
            props.majors.forEach(major => { props.fetchAllSubjectByMajor(major.id); })
        }
    }, [props.majors]);


    // useEffect(() => {
    //     if (!_.isEmpty(props.subjectMajors) && majorInit == '') {
    //         initMajor();
    //     }
    // }, [props.subjectMajors]);


    const uploadImage = (image, imageURL, successFunc) => {
        if (!image) {
            successFunc(imageURL);
            return;
        }

        let newName = '';
        if (_.includes(imageURL, 'https://firebasestorage.googleapis.com/v0/b/finding-mentor-fad7e.appspot.com')) {
            const regex = /(https:\/\/firebasestorage\.googleapis\.com\/v0\/b\/finding-mentor-fad7e\.appspot\.com)\/o\/(?<name>([\w\.]+))\?alt=(?<alt>[\w]+)&token=(?<token>[\w\-]+)/gm;

            let groups = imageURL.match(regex).groups;
            let test = 'https://firebasestorage.googleapis.com/v0/b/finding-mentor-fad7e.appspot.com/o/1635994464940.png?alt=media&token=2186f434-3821-48dc-a4ba-7bcedf751a9d';
            newName = groups.name;
        } else {
            let date = new Date();
            newName = date.getTime() + image.name.substring(image.name.lastIndexOf('.'));
        }
        // Create a reference to 'image.jpg'

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
        let newImage = values.imageFileData;

        uploadImage(newImage, values.imageURL, (imageURL) => {
            let courseData = { ...values, imageURL: imageURL, imageFileData: undefined, imageFile: undefined };
            console.log(courseData);
            setCourse({ ...courseData, });
            setSelectedItem(1);
        });

    }

    const handleSubmitCurriculum = (curiculumObj) => {
        let newCourse = { ...course, curriculum: curiculumObj, mentor: { id: '111-222-333-444', name: "Ly Van Cuong" } };
        setCourse(newCourse);
        props.updateCourse_test(newCourse);
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
                            <ListItemButton selected={selectedItem == 2} onClick={() => {
                                setSelectedItem(2);
                            }}>
                                <ListItemText primary="Mentees" />
                            </ListItemButton>
                            <ListItemButton selected={selectedItem == 3} onClick={() => {
                                setSelectedItem(3);
                            }}>
                                <ListItemText primary="Questions" />
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
                            <General onSubmit={handleSubmitGeneralInfo} initValues={props.course}
                                key="general-form"
                                majors={props.majors} subjectMajors={props.subjectMajors} />
                            : 'loading'}

                    </div>
                    <div hidden={selectedItem !== 1}>
                        <Curriculum onSubmit={handleSubmitCurriculum} initValues={props.course} />
                    </div>
                    <div hidden={selectedItem !== 2}>
                        <MenteeList />
                    </div>
                    <div hidden={selectedItem !== 3}>
                        <QuestionManager />
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
        course: state.test.currentCourse
    }
};

export default connect(mapStateToProps, {
    fetchCourse_test, updateCourse_test, fetchAllMajor, fetchAllSubjectByMajor
})(CourseEditPage);