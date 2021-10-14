import React from 'react';
import { Avatar, Button, Card, Chip, Container, Grid, Paper, Rating, Typography } from '@mui/material';
import SectionContainer from '../../../components/SectionContainer';

const CourseDetailPage = () => {
    return (
        <React.Fragment>
            <Container component={Paper} maxWidth="xl" variant="outline" sx={{ border: '2px solid #e5e7eb', borderRadius: 3, marginTop: '-1em' }} >
                <Grid container sx={{ paddingLeft: '2em', paddingRight: '2em', paddingY: '3em' }} direction="column" justifyContent="space-between" >
                    <Grid item container spacing={2}>
                        <Grid item sx={{ marginRight: '10px' }}>
                            <img style={{ width: '15em' }} src="https://img-c.udemycdn.com/course/240x135/705264_caa9_11.jpg" />
                        </Grid>
                        <Grid item xs container direction="column" rowGap={2} >
                            <Typography variant="h2">The Full JavaScript & ES6 Tutorial</Typography>
                            <Typography variant="h3"> Amin Ghaderi</Typography>
                            <Typography variant="body2">The most in-depth course on ES6 around. Start with JavaScript, deep-dive into ES6, & even more (Webpack, ES7, & React)!</Typography>
                            <Rating size="medium" readOnly name="simple-controlled" value={4} />
                            <Typography variant="h3">Subject: JAV101</Typography>
                            <Grid item container justifyContent="space-between" alignItems="center">
                                <Grid item>
                                    Start Date: 01/07/2021
                                </Grid>
                                <Grid item>
                                    Duration: 2 months
                                </Grid>
                                <Grid item >
                                    Status: <Chip label="Not Enroll" color="warning" />
                                </Grid>

                            </Grid>
                        </Grid>
                        <Grid item xs={2} container direction="column" alignItems='stretch' justifyContent="center" sx={{ marginLeft: '5em' }}>
                            <Grid item>
                                <Typography variant="h1" textAlign="center"> $16</Typography>
                            </Grid>
                            <Grid item sx={{ marginTop: '1em' }}>
                                <Button variant="contained" fullWidth sx={{ width: '100%', paddingY: '0.7em', fontSize: '1.2rem' }}> Enroll </Button>
                            </Grid>
                        </Grid>

                    </Grid>

                </Grid>
            </Container>
            <Container component={Paper} maxWidth="xl" variant="outline" sx={{ border: '2px solid #e5e7eb', borderRadius: 3, marginTop: '2em' }} >
                <Grid container>

                    </Grid>
            </Container>

        </React.Fragment>
    );
}

export default CourseDetailPage;