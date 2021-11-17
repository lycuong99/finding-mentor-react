import { Button, Container, Divider, Grid, Paper, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import CourseCard from '../../../components/CourseCard';
import { deleteCourse, fetchCoursesOfMentor } from '../../../actions'
import _ from 'lodash';
import UserStorage from '../../../ultils/UserStorage';
import DeleteDialog from '../../../components/dialog/DeleteDialog';
const CourseManagementPage = (props) => {

    const paddingX = '3em';
    const [keySearch, setKeySearch] = useState('');
    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
    const [currentCourseId, setCurrentCourseId] = useState(null);
    const courses = props.courses;


    const handleDeleteCourse = () => {

        if (currentCourseId) {
            props.deleteCourse(currentCourseId);
            setCurrentCourseId(null);
        }
    }


    useEffect(() => {

    },
        [keySearch]
    )
    useEffect(() => {
        props.fetchCoursesOfMentor(UserStorage.getUserId());
    }, []);

    return (
        <Container maxWidth="xl" sx={{ paddingBottom: '2em' }} >
            <Paper sx={{ marginTop: '1em', paddingTop: '2em', paddingX: 0, paddingBottom: '2em', bgcolor: '#fff', border: '3px solid #e5e7eb', borderRadius: 3 }}>
                <Box sx={{ marginBottom: '1em', paddingX: paddingX }}>
                    <Typography variant="h1">Courses</Typography>
                </Box>
                <Divider />
                <Grid container direction="column" sx={{ marginTop: '3em', paddingX: paddingX }}>
                    <Grid item container justifyContent="space-between" alignItems="center">
                        <Grid item xs={5}>
                            <TextField fullWidth placeholder="Search your courses" value={keySearch} onChange={(e) => { setKeySearch(e.target.value) }} />
                        </Grid>
                        <Grid item>
                            <Button variant="outlined" component={Link} to="/mentor/course/new">Create Course</Button>
                        </Grid>
                    </Grid>
                    <Grid item sx={{ marginTop: '1em', marginBottom: '2em' }}>
                        <Divider />
                    </Grid>
                    <Grid item container direction="column" alignItems="stretch" rowGap={3}>
                        {
                            _.isEmpty(props.mentorCourses) ? 'Loading' :
                                _.isEmpty(props.mentorCourses?.courses) ? "0 Course" :
                                    props.mentorCourses.courses.filter(course => course.name.includes(keySearch)).map((course, index) => {
                                        // console.log(courses.length);
                                        return (<Grid item key={index}>
                                            <CourseCard type="mentor" data={course}
                                                onDelete={() => {
                                                    setOpenDeleteDialog(true);
                                                    setCurrentCourseId(course.id);
                                                }} />
                                        </Grid>);
                                    })
                        }

                    </Grid>
                </Grid>
                <DeleteDialog open={openDeleteDialog}
                    handleClose={() => {
                        setOpenDeleteDialog(false);
                    }}
                    onConfirm={() => {
                        handleDeleteCourse();
                    }}
                    contentText={`Do you want to delete this course?`}
                />


            </Paper>
        </Container>
    );
}

const mapStateToProps = (state) => {
    return { mentorCourses: state.course.mentorCourses };
}
export default connect(mapStateToProps, {
    fetchCoursesOfMentor, deleteCourse
})(CourseManagementPage);