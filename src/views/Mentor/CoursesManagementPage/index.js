import { Button, Container, Divider, Grid, Paper, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import CourseCard from '../../../components/CourseCard';
import { fetchCourses_test } from '../../../actions'
import { useDispatch, useSelector } from "react-redux";
import _ from 'lodash';
const CourseManagementPage = (props) => {

    const paddingX = '3em';
    const [keySearch, setKeySearch] = useState('');
    const courses = props.courses;
    const dispatch = useDispatch();
    // useEffect(
    //     () => {
    //         if (_.isEmpty(courses)) {
    //             dispatch(fetchCourses_test(''));
    //         }
    //     }, []);

    console.log(courses);
    const onDelete = (id) => {
        // deleteCourse(id);
        // setCourses(getCourses());
    }

    useEffect(() => {
        dispatch(fetchCourses_test(keySearch));
    },
        [keySearch]
    )

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
                            courses.map((course, index) => {
                                // console.log(courses.length);
                                return (<Grid item key={index}>
                                    <CourseCard type="mentor" data={course} />
                                </Grid>);
                            })
                        }

                    </Grid>
                </Grid>


            </Paper>
        </Container>
    );
}

const mapStateToProps = (state) => {
    return { courses: state.test.searchResults };
}
export default connect(mapStateToProps, {})(CourseManagementPage);