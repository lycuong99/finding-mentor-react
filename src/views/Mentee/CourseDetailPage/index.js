import React, { useEffect, useState } from 'react';
import { Avatar, Button, Card, Chip, Container, Grid, Paper, Rating, Skeleton, Tab, Tabs, Typography } from '@mui/material';
import SectionContainer from '../../../components/SectionContainer';
import { Box } from '@mui/system';
import CurriculumSection from './CurriculumSection';
import { useParams } from 'react-router';
import { fetchCourse } from '../../../actions';
import { connect } from 'react-redux';
const courseData = {
    "id": 0,
    "name": "The Full JavaScript & ES6 Tutorial",
    "price": 10,
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    "rate": 4,
    "imageUrl": "https://img-c.udemycdn.com/course/240x135/3646523_6b79.jpg",
    "subjectId": "GDS001",
    duration: '2 month',
    startDate: '01/07/2021',
    mentor: { id: "3c5ec754-01b1-49cf-94e0-09250222b061", name: "Ly Van Cuong" }
};

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
                description: "aaaa",
                resource: [],

            }
        ]
    }

];

const CourseDetailPage = (props) => {

    const course = courseData;
    const [tabIndex, setTabIndex] = useState(0);
    const { id } = useParams();
    useEffect(() => {
        console.log(id);
        if (id) {
            props.fetchCourse(id);
        }
    }, [])

    const handleChangeTableIndex = (event, newValue) => {
        setTabIndex(newValue);
    };
    return (
        <React.Fragment>
            {!props.course ?
                (<>
                    <Skeleton variant="text" />
                    <Skeleton variant="circular" width={80} height={80} />
                    <Skeleton variant="rectangular" width={1210} height={618} /></>) :
                (
                    <>
                        <Container component={Paper} maxWidth="xl" variant="outline" sx={{ border: '2px solid #e5e7eb', borderRadius: 3, marginTop: '-1em' }} >
                            <Grid container sx={{ paddingLeft: '2em', paddingRight: '2em', paddingY: '3em' }} direction="column" justifyContent="space-between" >
                                <Grid item container spacing={2}>
                                    <Grid item sx={{ marginRight: '10px' }}>
                                        <img style={{ width: '15em' }} src={props.course && props.course.imageUrl ? props.course.imageUrl : course.imageUrl} />
                                    </Grid>
                                    <Grid item xs container direction="column" rowGap={2} >
                                        <Typography variant="h2">{props.course && props.course.name ? props.course.name : course.name}</Typography>
                                        <Typography variant="h3">{props.course && props.course.mentorName ? props.course.mentorName : course.mentor.name}</Typography>
                                        <Typography variant="body2">
                                            {course.description}</Typography>
                                        <Rating size="medium" readOnly name="simple-controlled" value={4} />
                                        <Typography variant="h3">{`Subject: ${props.course ? props.course.subjectId : course.subjectId}`}</Typography>
                                        <Grid item container justifyContent="space-between" alignItems="center">
                                            <Grid item>
                                                {` Start Date:${props.course && props.course.startDate ? props.course.startDate : course.startDate}`}
                                            </Grid>
                                            <Grid item>
                                                {`Duration: ${props.course && props.course.duration ? props.course.duration : course.duration}`}
                                            </Grid>
                                            <Grid item >
                                                Status: <Chip label="Not Enroll" color="warning" />
                                            </Grid>

                                        </Grid>
                                    </Grid>
                                    <Grid item xs={2} container direction="column" alignItems='stretch' justifyContent="center" sx={{ marginLeft: '5em' }}>
                                        <Grid item>
                                            <Typography variant="h1" textAlign="center">{`$${props.course && props.course.price ? props.course.price : course.price}`} </Typography>
                                        </Grid>
                                        <Grid item sx={{ marginTop: '1em' }}>
                                            <Button variant="contained" fullWidth sx={{ width: '100%', paddingY: '0.7em', fontSize: '1.2rem' }}> Enroll </Button>
                                        </Grid>
                                    </Grid>

                                </Grid>

                            </Grid>
                        </Container>
                        <Container component={Paper} maxWidth="xl" variant="outline" sx={{ border: '2px solid #e5e7eb', borderRadius: 3, marginTop: '2em' }} >
                            <Grid container direction="column">
                                <Grid item>
                                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                        <Tabs value={tabIndex} onChange={handleChangeTableIndex} aria-label="basic tabs example">
                                            <Tab label="Curriculumn" />
                                            <Tab label="Question" />
                                            <Tab label="Activity" />
                                        </Tabs>
                                        <div>

                                        </div>
                                    </Box>
                                </Grid>
                                <Grid item>
                                    <div hidden={tabIndex !== 0}>
                                        <CurriculumSection curriculum={curriculum_init} />
                                    </div>
                                </Grid>
                                <Grid item>
                                    <div hidden={tabIndex !== 1}>

                                    </div>
                                </Grid>
                                <Grid item>
                                    <div hidden={tabIndex !== 2}>

                                    </div>
                                </Grid>
                            </Grid>
                        </Container>

                    </>
                )

            }
        </React.Fragment>
    );
}
const mapStateToProps = (state) => ({
    course: state.course.currentCourse
});

export default connect(mapStateToProps, {
    fetchCourse
})(CourseDetailPage);