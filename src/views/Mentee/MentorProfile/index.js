import { Avatar, Button, Card, Chip, Container, Grid, Paper, Rating, Typography } from '@mui/material';
import React from 'react';

const SectionContainer = (props) => {
    return (
        <Grid container sx={{ marginTop: '1em' }}>
            <Grid item sx={{ marginBottom: '1em' }}>
                <Typography variant="h2">{props.title}</Typography>
            </Grid>
            <Grid item>
                {props.children}
            </Grid>
        </Grid>
    )
}
const MentorProfilePage = () => {
    const avatarSize = 180;
    return (
        <Container component={Paper} variant="outline" sx={{ border: '2px solid #e5e7eb', borderRadius: 3 }} >
            <Grid container sx={{ paddingX: '4em', paddingY: '3em' }} justifyContent="space-between" >
                <Grid item xs={8}>
                    <Grid container direction="column" rowSpacing={1}>
                        <Grid item>
                            <Typography variant="h3" color='#737373'>Mentor</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h1"> Amin Ghaderi</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h3"> Software engineering</Typography>
                        </Grid>
                        <Grid item>
                            <Rating size="small"
                                readOnly
                                name="simple-controlled"
                                value={4}
                            /></Grid>

                        <Grid item>
                            <Typography variant="h3">Quan 9, Ho Chi Minh City</Typography></Grid>
                        <Grid item>
                            <SectionContainer title="About me">
                                <Typography variant="body2" paragraph>As a self-taught software engineer I can relate to how important a mentor is to developing as an engineer. A good mentor has allowed me to progress my career tremendously fast and keep it fun while at it. I specialize in Front End Engineering and JavaScript / TypeScript.

                                    All my mentees get access to my courses for FREE. I also will send a regular resource recommendation I have used so you can stay on top of your game!

                                    Between speaking at conferences, building courses and passive income streams, my podcast and the YouTube channel I have inadvertently mentored upwards of a million unique individuals on a large scale. I'd like to do it on a more individual scale and help you succeed!

                                    Whether success is defined as helping you land that next big role, navigating salary negotiations, overcoming imposter syndrome, getting a side project up and running or just upping your technical skill. I look forward to us doing all of the above!</Typography>

                            </SectionContainer>
                        </Grid>

                        <Grid item>

                            <SectionContainer title="Subject">
                                <Grid container spacing={2}>
                                    <Grid item><Chip label="SWP391" sx={{ borderRadius: '12px !important', fontWeight: 'medium', paddingX: '10px' }} /></Grid>
                                    <Grid item><Chip label="DB301" sx={{ borderRadius: '12px !important', fontWeight: 'medium', paddingX: '10px' }} /></Grid>
                                    <Grid item><Chip label="SYB202" sx={{ borderRadius: '12px !important', fontWeight: 'medium', paddingX: '10px' }} /></Grid>
                                    <Grid item><Chip label="JAV101" sx={{ borderRadius: '12px !important', fontWeight: 'medium', paddingX: '10px' }} /></Grid>

                                    <Grid item><Chip label="SWP391" sx={{ borderRadius: '12px !important', fontWeight: 'medium', paddingX: '10px' }} /></Grid>
                                    <Grid item><Chip label="DB301" sx={{ borderRadius: '12px !important', fontWeight: 'medium', paddingX: '10px' }} /></Grid>
                                    <Grid item><Chip label="SYB202" sx={{ borderRadius: '12px !important', fontWeight: 'medium', paddingX: '10px' }} /></Grid>
                                    <Grid item><Chip label="JAV101" sx={{ borderRadius: '12px !important', fontWeight: 'medium', paddingX: '10px' }} /></Grid>

                                    <Grid item><Chip label="SWP391" sx={{ borderRadius: '12px !important', fontWeight: 'medium', paddingX: '10px' }} /></Grid>
                                    <Grid item><Chip label="DB301" sx={{ borderRadius: '12px !important', fontWeight: 'medium', paddingX: '10px' }} /></Grid>
                                    <Grid item><Chip label="SYB202" sx={{ borderRadius: '12px !important', fontWeight: 'medium', paddingX: '10px' }} /></Grid>
                                    <Grid item><Chip label="JAV101" sx={{ borderRadius: '12px !important', fontWeight: 'medium', paddingX: '10px' }} /></Grid>
                                </Grid>
                            </SectionContainer>
                        </Grid>

                        <Grid item >
                            <SectionContainer title="My Course">

                            </SectionContainer>
                        </Grid>
                        <Grid item container>
                            <Grid item>
                                <Typography variant="h3">Review</Typography>
                            </Grid>
                            <Grid item>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={3} alignItems="flex-end">
                    <Grid container direction="column" alignItems="center" >
                        <Grid item sx={{ marginBottom: '2em' }}>
                            <Avatar
                                sx={{ width: avatarSize, height: avatarSize }}
                                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80" />
                        </Grid>
                        <Grid item sx={{ marginBottom: '0.5em' }}> 
                            <Button variant="outlined" fullWidth sx={{ backgroundColor: 'white', fontSize: '1rem', width: '12em', textTransform: 'capitalize', fontWeight: 500 }}>
                                Follow
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button variant="outlined" fullWidth sx={{ backgroundColor: 'white', fontSize: '1rem', width: '12em', textTransform: 'capitalize', fontWeight: 500 }}>
                                Contact
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
}

export default MentorProfilePage;
