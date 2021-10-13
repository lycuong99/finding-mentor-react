import { AppBar, Button, Container, createStyles, Grid, Toolbar, Typography } from '@mui/material';
import { withStyles } from '@mui/styles';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/images/FMLogo.png";
import CourseCard from '../../components/CourseCard';
import Header from "../../components/header";
import banner from '../../assets/images/bannerBg.svg';
import bannerRightImg from '../../assets/images/bannerRight.svg';
import MentorCard from '../../components/MentorCard';

const appbarHeight = '6em';
const styles = createStyles((theme) => ({
    // logo: {
    //     height: '3.5em',
    //     [theme.breakpoints.down('md')]: { height: '7em' },
    //     [theme.breakpoints.down('xs')]: { height: '5.5em' },
    // },
    content: {
        minHeight: '100vh'
    },
    appbar: {
        backgroundColor: 'white'
    },
    banner: {
        backgroundImage: `url(${banner})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    }
}))
class MenteeHomePage extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        const classes = this.props.classes;
        return (
            <div>
                <div className={classes.banner}>
                    <Container fixed>
                        <Grid container direction='column' justifyContent="center" style={{
                            height: '43em',
                            marginTop: '-3em',
                            marginBottom: '3em',
                            paddingX: 0,
                            color: '#ffffff',
                            fontWeight: '500',
                        }} >
                            <Grid item style={{ marginLeft: '-3em' }}>
                                <Typography variant="h3" fontSize="2rem" fontFamily="Epilogue" fontWeight="600" color="white">Welcome to</Typography>
                                <Typography variant="h1" sx={{ marginY: '16px' }} fontSize="4rem" fontFamily="Epilogue" fontWeight="800" color="white">FPT University Program</Typography>
                                <Typography variant="h3" fontSize="2rem" fontFamily="Epilogue" fontWeight="600" color="white">Find mentor that you can trust</Typography>
                            </Grid>
                            <Grid item>
                                <Grid container justifyContent="flex-end">
                                    <img src={bannerRightImg} style={{ marginRight: '-3em' }} />
                                </Grid>

                            </Grid>
                        </Grid>
                    </Container>
                </div>
                <Container maxWidth="lg" >
                    <Grid container direction='column' className={classes.content} rowGap="3em">


                        <Grid item container direction='column'>
                            <Grid item style={{ marginBottom: '1em' }}>
                                <Typography variant="h2">Recommend Mentor</Typography>
                            </Grid>

                            <Grid item container direction="row" spacing={3} flexWrap="wrap">
                                <Grid item xs md={4} sm={6}>
                                    <MentorCard type="simple" />
                                </Grid>
                                <Grid item xs md={4} sm={6}>
                                    <MentorCard type="simple" />
                                </Grid>
                                <Grid item xs md={4} sm={6}>
                                    <MentorCard type="simple" />
                                </Grid>
                                <Grid item xs md={4} sm={6}>
                                    <MentorCard type="simple" />
                                </Grid>
                                <Grid item xs md={4} sm={6}>
                                    <MentorCard type="simple" />
                                </Grid>
                                <Grid item xs md={4} sm={6}>
                                    <MentorCard type="simple" />
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item container direction='column'>
                            <Grid item style={{ marginBottom: '1em' }}>
                                <Typography variant="h2">Recommend Course</Typography>
                            </Grid>

                            <Grid item container direction="row" spacing={1} flexWrap="nowrap">
                                <Grid item>
                                    <CourseCard />
                                </Grid>
                                <Grid item>
                                    <CourseCard />
                                </Grid>
                                <Grid item>
                                    <CourseCard />
                                </Grid>
                                <Grid item>
                                    <CourseCard />
                                </Grid>

                            </Grid>
                        </Grid>

                        <Grid item container direction='column' >
                            <Grid item style={{ marginBottom: '1em' }}>
                                <Typography variant="h2">My courses</Typography>
                            </Grid>

                            <Grid item container direction="column" alignItems="stretch" spacing="4px">
                                <Grid item container >
                                    <CourseCard type="detail" />
                                </Grid>

                                <Grid item container >
                                    <CourseCard type="detail" />
                                </Grid>

                                <Grid item container >
                                    <CourseCard type="detail" />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        )
    }
}

export default withStyles(styles)(MenteeHomePage);