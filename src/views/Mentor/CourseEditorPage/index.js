import { Button, Container, Divider, Grid, Paper, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import CourseCard from '../../../components/CourseCard';

const CourseEditorPage = () => {
    const paddingX = '3em';
    return (
        <Container maxWidth="xl" sx={{ paddingBottom: '2em' }} >
            <Grid container>
                <Grid item container>
                    {/* Menu
                            -  General
                            -  Curriculum */}
                </Grid>
                <Grid item container>
                    {/* Course 
                                Title
                                Course Description
                                Price
                                Subject
                                Course Image
                        
                                Section
                                    title
                                    Lecture
                                        title
                                        Content


                             */}
                </Grid>
            </Grid>
        </Container>
    );
}

export default CourseEditorPage;