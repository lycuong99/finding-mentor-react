import { Button, Container, Divider, Grid, Paper, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CourseCard from '../../../components/CourseCard';
import { CourseDB, deleteCourse, getCourses } from '../../../database';

const CourseManagementPage = () => {
    const paddingX = '3em';
    const [keySearch, setKeySearch] = useState('');
    const [courses, setCourses] = useState(getCourses());

    const onDelete = (id) => {
        deleteCourse(id);
        setCourses(getCourses());
    }

    return (
        <Container maxWidth="xl" sx={{ paddingBottom: '2em' }} >
            <Paper elevation={0} sx={{ marginTop: '1em', paddingTop: '2em', paddingX: 0, paddingBottom: '2em', bgcolor: '#fff', border: '3px solid #e5e7eb', borderRadius: 3 }}>
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
                            courses.filter(course => course.mentor.id == '3c5ec754-01b1-49cf-94e0-09250222b061' && course.name.includes(keySearch)).map(course => ((<Grid item key={course.id}>
                                <CourseCard type="mentor" data={course} onDelete={onDelete} />
                            </Grid>)
                            ))
                        }

                    </Grid>
                </Grid>

                {/* Header */}
                {/* List */}
                {/* List */}

            </Paper>
        </Container>
    );
}

export default CourseManagementPage;