import {
    Button, Container, Divider, Grid, Paper, TextField, Typography, List, ListItemButton, ListItemIcon,
    Select, ListItemText, ListItem, FormControl, FormLabel, MenuItem
} from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Curriculum from './Curriculum';
import General from './General';
import history from '../../../history';
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { connect } from 'react-redux';
import { fetchAllSubjectByMajor, fetchMajorsOfMentor, fetchCourse, updateCourse } from '../../../actions';
import { useParams } from 'react-router';
import _ from 'lodash';
import MenteeList from '../MenteeList';
import QuestionManager from '../QuestionManager';
import UserStorage from '../../../ultils/UserStorage';


const CourseEditPage = (props) => {
    const paddingX = '3em';
    const [selectedItem, setSelectedItem] = useState(0);
    const [course, setCourse] = useState(props.course);

    const { id } = useParams();
    console.log(props.course?.id);
    useEffect(() => {
        if (id) {
            props.fetchCourse(id);
        }

        if (_.isEmpty(props.majors)) {
            props.fetchMajorsOfMentor(UserStorage.getUserId());
        }
    }, []);

    useEffect(() => {
        if (!_.isEmpty(props.majors)) {
            props.majors.forEach(major => { props.fetchAllSubjectByMajor(major.id); })
        }
    }, [props.majors]);


    const handleSubmitGeneralInfo = (values) => {
        console.log('Update Course');
        console.log(values);
        props.updateCourse(values);
        setSelectedItem(1);
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
                            <General onSubmit={handleSubmitGeneralInfo}
                                initValues={props.course}
                                key="general-form"
                                type="update"
                                majors={props.majors}
                                subjectMajors={props.subjectMajors} />
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
        majors: state.major.majorsOfMentor,
        subjectMajors: state.major.subjectMajors,
        course: state.course.currentCourse
    }
};

export default connect(mapStateToProps, {
    fetchCourse, fetchMajorsOfMentor, fetchAllSubjectByMajor, updateCourse
})(CourseEditPage);