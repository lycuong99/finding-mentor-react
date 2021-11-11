import { AppBar, Button, Container, createStyles, Grid, IconButton, Stack, Toolbar, Typography } from '@mui/material';
import { withStyles } from '@mui/styles';
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/images/FMLogo.png";
import CourseCard from '../../components/CourseCard';
import Header from "../../components/header";
import SectionContainer from "../../components/SectionContainer";
import banner from '../../assets/images/bannerBg.svg';
import bannerRightImg from '../../assets/images/bannerRight.svg';
import MentorCard from '../../components/MentorCard';
import Slider from 'react-slick';
import { Box } from '@mui/system';
import { fetchRecommendMentor, fetchRecommendMentorByMajor, fetchRecommendCoursesByUserMajor, fetchMyLearningCourses } from '../../actions';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { connect } from 'react-redux';
import _ from 'lodash';

function SimpleSlider() {
    const slider = useRef();
    const next = () => {
        slider.current.slickNext();
    }
    const previous = () => {
        slider.current.slickPrev();
    }
    const [disabledFirstBtn, setDisabledFirstBtn] = React.useState(true);
    const [disabledLastBtn, setDisabledLastBtn] = React.useState(false);
    var settings = {
        speed: 500,
        slidesToShow: 2.5,
        slidesToScroll: 1,
        // dots: true,
        afterChange: current => {
            console.log(current);
            if (current == 0) setDisabledFirstBtn(true); else setDisabledFirstBtn(false);
            if (current == 2.5) setDisabledLastBtn(true); else setDisabledLastBtn(false);
        },
        infinite: false,
    };

    return (
        <React.Fragment>
            <Box height="2em" />
            <Stack direction="row" alignItems="center" sx={{ marginBottom: '1em' }} spacing={2}>
                <Typography variant="h2" >Recommend Mentor for Engineering Software</Typography>
                <Stack direction="row" alignItems="center" spacing={2}>
                    <IconButton onClick={previous} style={{ backgroundColor: 'white', opacity: disabledFirstBtn == true ? 0.6 : 1 }} ><KeyboardArrowLeftIcon fontSize="large" /></IconButton>
                    <IconButton onClick={next} style={{ backgroundColor: 'white', opacity: disabledLastBtn == true ? 0.6 : 1 }}><KeyboardArrowRightIcon fontSize="large" /></IconButton>
                </Stack></Stack>
            <Slider {...settings} ref={slider}>
                <div key={1} style={{ width: '400px' }}>
                    <Stack direction="row" spacing={2}><MentorCard data={{ fullname: "MENTOR NAME" }} type="horizontal" />
                        <Box sx={{ width: 20 }} /></Stack>
                </div>
                <div key={2} style={{ width: '400px' }}>
                    <Stack direction="row" spacing={2}><MentorCard data={{ fullname: "MENTOR NAME" }} type="horizontal" />
                        <Box sx={{ width: 20 }} /></Stack>
                </div>
                <div key={3} style={{ width: '400px' }}>
                    <Stack direction="row" spacing={2}><MentorCard data={{ fullname: "MENTOR NAME" }} type="horizontal" />
                        <Box sx={{ width: 20 }} /></Stack>
                </div >
                <div key={4} style={{ width: '400px' }}>
                    <Stack direction="row" spacing={2}><MentorCard data={{ fullname: "MENTOR NAME" }} type="horizontal" />
                        <Box sx={{ width: 20 }} /></Stack>
                </div>
                <div key={5} style={{ width: '400px' }}>
                    <Stack direction="row" spacing={2}><MentorCard data={{ fullname: "MENTOR NAME" }} type="horizontal" />
                        <Box sx={{ width: 20 }} /></Stack>
                </div>
            </Slider>

            <Box height="2em" />
        </React.Fragment>
    );
}


const appbarHeight = '6em';
const styles = createStyles((theme) => ({
    // logo: {
    //     height: '3.5em',
    //     [theme.breakpoints.down('md')]: { height: '7em' },
    //     [theme.breakpoints.down('xs')]: { height: '5.5em' },
    // },
    content: {
        // minHeight: '100vh'
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
        super(props);
        this.state = {
            // renderRecommendMentor: null,
            // recommendMentorByMajor: null
        };
    }

    componentDidMount() {
        this.props.fetchRecommendMentor();
        this.props.fetchRecommendCoursesByUserMajor();
        this.props.fetchMyLearningCourses();
        this.props.fetchRecommendMentorByMajor();
    }

    componentDidUpdata() {

    }

    renderRecommendMentor = () => {
        let recommendMentor = this.props.recommendMentor;
        // console.log(recommendMentor);

        if (this.props.recommendMentor)
            return (<Grid container direction="row" spacing={3} flexWrap="wrap">
                {
                    recommendMentor.map(mentor => {
                        return (
                            <Grid item xs md={4} sm={6} key={mentor.id}>
                                <MentorCard type="vertical" data={mentor} />
                            </Grid>
                        );
                    })
                }
            </Grid>
            );

        return (<div>Loading... !</div>);
    }

    renderRecommendMentorByMajor = () => {
        let renderRecommendMentor = this.props.renderRecommendMentorByMajor;

        if (renderRecommendMentor)
            return (<Grid container direction="row" spacing={3} flexWrap="wrap">
                {
                    renderRecommendMentor.map(mentor => {
                        return (
                            <Grid item xs md={4} sm={6} key={mentor.id}>
                                <MentorCard type="vertical" mentorData={mentor} />
                            </Grid>
                        );
                    })
                }
            </Grid>
            );

        return (<div>Loading... !</div>);
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
                        <Grid item container direction='column' >
                            <Grid item style={{ marginBottom: '1em' }}>
                                <Typography variant="h2">My courses</Typography>
                            </Grid>

                            <Grid item container direction="column" alignItems="stretch" spacing="4px">
                                {
                                    (!_.isEmpty(this.props.mylearningCourses)) ?
                                        this.props.mylearningCourses.map(course => (
                                            <Grid item container key={course.id}>
                                                <CourseCard type="detail" data={course} />
                                            </Grid>
                                        )) : (<Typography variant="h2" textAlign="center">No Course Yet</Typography>)
                                }
                            </Grid>
                        </Grid>

                        <Grid item container direction='column'>
                            <Grid item style={{ marginBottom: '1em' }}>
                                <Typography variant="h2">Top Mentor</Typography>
                            </Grid>
                            <Grid item >
                                {this.renderRecommendMentor()}
                            </Grid>
                        </Grid>
                    </Grid>

                    <SimpleSlider />

                </Container>

                <Container maxWidth="lg" >
                    <Grid container direction='column' className={classes.content} rowGap="3em">
                        <Grid item container direction='column'>
                            <Grid item style={{ marginBottom: '1em' }}>
                                <Typography variant="h2">Recommend Course</Typography>
                            </Grid>

                            <Grid item container direction="row" spacing={1} flexWrap="nowrap">
                                {
                                    (!_.isEmpty(this.props.recommendCoursesByMajor)) ?
                                        this.props.recommendCoursesByMajor.map(course => (
                                            <Grid item key={course.id}>
                                                <CourseCard data={course} />
                                            </Grid>
                                        )) : null
                                }
                            </Grid>
                        </Grid>


                    </Grid>
                </Container>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    // console.log(state.mentor.recommendMentor);
    return {
        recommendMentor: state.mentor.recommendMentor,
        recommendMentorByMajor: state.mentor.recommendMentorByMajor,
        recommendCoursesByMajor: state.course.recommendCoursesByMajor,
        mylearningCourses: state.course.mylearningCourses
    }
}

export default connect(
    mapStateToProps, {
    fetchRecommendMentorByMajor,
    fetchRecommendMentor,
    fetchRecommendCoursesByUserMajor,
    fetchMyLearningCourses
}
)(
    withStyles(styles)(MenteeHomePage)
);