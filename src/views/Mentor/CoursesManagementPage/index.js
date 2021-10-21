import { Button, Container, Divider, Grid, Paper, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import CourseCard from '../../../components/CourseCard';

const CourseManagementPage = () => {
    const paddingX = '3em';
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
                            <TextField fullWidth placeholder="Search your courses" />
                        </Grid>
                        <Grid item>
                            <Button variant="outlined">Create Course</Button>
                        </Grid>
                    </Grid>
                    <Grid item sx={{ marginTop: '1em', marginBottom: '2em' }}>
                        <Divider />
                    </Grid>
                    <Grid item container direction="column" alignItems="stretch" rowGap={3}>
                        <Grid item>
                            <CourseCard type="mentor" />
                        </Grid>
                        <Grid item>
                            <CourseCard type="mentor" />
                        </Grid>
                        <Grid item>
                            <CourseCard type="mentor" />
                        </Grid>
                        <Grid item>
                            <CourseCard type="mentor" />
                        </Grid>
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