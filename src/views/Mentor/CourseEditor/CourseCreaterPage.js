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
import { createCourse, fetchMajorsOfMentor, fetchAllSubjectByMajor } from '../../../actions';
import UserStorage from '../../../ultils/UserStorage';
import _ from 'lodash';

const curriculum_init = [
    {
        title: "Introdution",
        lectures: [
            {
                title: "1",
                description: "",
                resource: [],

            },
            {
                title: "2",
                description: "",
                resource: [],

            }
        ]
    }

];

const CourseCreaterPage = (props) => {
    const paddingX = '3em';
    const [selectedItem, setSelectedItem] = useState(0);
    const [course, setCourse] = useState({});

    const storage = getStorage();
    const storageRef = ref(storage, 'course/lyvancuong');

    useEffect(() => {
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
        console.log(values);
        setCourse({ ...values, });
        setSelectedItem(1);
    }

    const handleSubmitCurriculum = (curiculumObj) => {
        let newCourse = { ...course, curriculum: curiculumObj, mentor: { id: '111-222-333-444', name: "Ly Van Cuong" } };
        setCourse(newCourse);
        props.createCourse(newCourse, UserStorage.getUserId());
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
                        <Curriculum onSubmit={handleSubmitCurriculum} initValues={curriculum_init} />
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
    }
};
export default connect(mapStateToProps, {
    createCourse, fetchMajorsOfMentor, fetchAllSubjectByMajor
})(CourseCreaterPage);