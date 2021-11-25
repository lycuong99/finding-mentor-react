import { Avatar, Button, Card, Chip, Container, Grid, Paper, Rating, Skeleton, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import CourseCard from '../../../components/CourseCard';
import SectionContainer from '../../../components/SectionContainer';
import WorkIcon from '@mui/icons-material/WorkOutline';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import AddLocationOutlinedIcon from '@mui/icons-material/AddLocationOutlined';
import { useParams } from 'react-router';
import { fetchMentor, fetchCoursesOfMentor } from '../../../actions';
import { connect } from 'react-redux';
import _ from 'lodash';

const CustomChip = (props) => {
    return (<Chip label={props.label} sx={{ borderRadius: '16px !important', fontFamily: 'Inter, Epilogue', fontWeight: '600', fontSize: '0.85rem', paddingX: '10px', paddingY: '1.4em' }} />);
}
const MentorObj = {
    id: '1212121212',
    name: "Adam Lavince",
    avatarURL: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80',
    majors: [{ id: "CN", name: 'CHINESE' }],
    phone: '0979685123',
    company: 'FPT SOFTWARE',
    address: 'Quan 9, Ho Chi Minh City',
    about: `As a self-taught software engineer I can relate to how important a mentor is to developing as an engineer. A good mentor has allowed me to progress my career tremendously fast and keep it fun while at it. I specialize in Front End Engineering and JavaScript / TypeScript.
    All my mentees get access to my courses for FREE. I also will send a regular resource recommendation I have used so you can stay on top of your game!
    Between speaking at conferences, building courses and passive income streams, my podcast and the YouTube channel I have inadvertently mentored upwards of a million unique individuals on a large scale. I'd like to do it on a more individual scale and help you succeed!
    Whether success is defined as helping you land that next big role, navigating salary negotiations, overcoming imposter syndrome, getting a side project up and running or just upping your technical skill. I look forward to us doing all of the above!`,
    subjects: [
        {
            id: 'DB301',
            name: 'Database Fundemantal'
        }
    ],
    rating: 4,
    courses: [
        {
            id: 1,
            name: 'Course Name',
        }
    ]
}

const coursesTest = [{
    "id": 0,
    "name": "course 0",
    "price": 10,
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    "rate": 4,
    "imageURL": "https://img-c.udemycdn.com/course/240x135/3646523_6b79.jpg",
    "subjectId": "GDS001",
    mentor: { id: "3c5ec754-01b1-49cf-94e0-09250222b061", name: "Ly Van Cuong" }
},
{
    "id": 1,
    "name": "course 1",
    "price": 5,
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    "rate": 5,
    "imageURL": "https://img-c.udemycdn.com/course/240x135/922484_52a1_8.jpg",
    "subjectId": "MKT001",
    mentor: { id: "3c5ec754-01b1-49cf-94e0-09250222b061", name: "Ly Van Cuong" }
},
{
    "id": 2,
    "name": "course 2",
    "price": 2,
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    "rate": 3,
    "imageURL": "https://img-c.udemycdn.com/course/240x135/3646523_6b79.jpg",
    "subjectId": "GDS002",
    mentor: { id: "3c5ec754-01b1-49cf-94e0-09250222b061", name: "Ly Van Cuong" }
},];

const FieldInfo = (props) => {

    return (
        <Grid container alignItems="center" spacing={1}>
            <Grid item>
                {props.icon}
            </Grid>
            <Grid item>
                <Typography variant="h3" > {props.label}</Typography>
            </Grid>
        </Grid>
    );
}

const MentorProfilePage = (props) => {
    const avatarSize = 180;
    const { data } = props;
    let { id } = useParams();
    console.log(useParams());
    const mentor = MentorObj;


    useEffect(() => {
        if (id) {
            props.fetchMentor(id);
            props.fetchCoursesOfMentor(id);
        }
    },
        []
    );

    return (
        <React.Fragment>
            {!props.data ?
                (<>
                    <Skeleton variant="text" />
                    <Skeleton variant="circular" width={80} height={80} />
                    <Skeleton variant="rectangular" width={1210} height={618} /></>) :
                (
                    <Container component={Paper} variant="outline" sx={{ border: '2px solid #e5e7eb', borderRadius: 3 }} >
                        <Grid container sx={{ paddingLeft: '0em', paddingRight: '2em', paddingY: '3em' }} justifyContent="space-between" >
                            <Grid item width={250} sx={{ marginRight: '1em' }}>
                                <Grid container direction="column" alignItems="center" >
                                    <Grid item sx={{ marginBottom: '2em' }}>
                                        <Avatar
                                            sx={{ width: avatarSize, height: avatarSize }}
                                            src={props.data.mentor.avatarUrl ? props.data.mentor.avatarUrl : '/src/assets/images/userAvatar.png'} />
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

                            <Grid item xs>
                                <Grid container direction="column" >
                                    <Grid item container >
                                        <Grid item container direction="column" rowSpacing={1}>

                                            <Grid item>
                                                <Typography variant="h3" color='#b9b9b9'>MENTOR</Typography>
                                            </Grid>
                                            <Grid item sx={{ marginBottom: '0.5em' }}>
                                                <Typography variant="h1"> {props.data.fullname}</Typography>
                                            </Grid>
                                            <Grid item>
                                                <Typography variant="h3" color="primary"> {props.data.mentor.majors[0].name}</Typography>
                                            </Grid>

                                            {/* <Grid item>
                                                <Rating
                                                    readOnly
                                                    name="simple-controlled"
                                                    value={props.data.mentor.rating ? props.data.mentor.rating : mentor.rating}
                                                /></Grid> */}
                                            <Grid item container >
                                                {/* <Grid item md>
                                                    <FieldInfo icon={<WorkIcon />} label={props.data.mentor.majors[0].name} />
                                                </Grid> */}
                                                <Grid item md>
                                                    <FieldInfo icon={<WorkIcon color="primary"  fontSize='large'/>} label={data.mentor.company} />
                                                </Grid>
                                            </Grid>
                                            <Grid item container >
                                                <Grid item md>
                                                    <FieldInfo icon={<AddLocationOutlinedIcon color="primary" fontSize='large' />} label={data.address} />
                                                </Grid>
                                                <Grid item md>
                                                    <FieldInfo icon={<PhoneOutlinedIcon color="primary"  fontSize='large'/>} label={data.phoneNumber} />
                                                </Grid>
                                            </Grid>

                                        </Grid>
                                    </Grid>
                                    <Grid item>
                                        <SectionContainer title="About me">
                                            <Typography variant="body2" paragraph>{props.data.mentor.about}</Typography>
                                        </SectionContainer>
                                    </Grid>

                                    <Grid item>

                                        <SectionContainer title="Subject I can mentoring">
                                            <Grid container spacing={2}>
                                                {props.data.mentor.subjects.map(subject => (
                                                    <Grid item key={subject.id}>
                                                        <CustomChip label={subject.id} />
                                                    </Grid>
                                                ))}

                                            </Grid>
                                        </SectionContainer>
                                    </Grid>

                                    <Grid item >
                                        <SectionContainer title="My Course">
                                            <Grid container direction="row" gap='12px' flexWrap="wrap">
                                                {
                                                    _.isEmpty(props.mentorCourses) ? (<Typography variant="h3" textAlign="center">No Course</Typography>)
                                                        : props.mentorCourses.courses.map(course => (
                                                            <Grid item md key={course.id}>
                                                                <CourseCard data={course} />
                                                            </Grid>
                                                        ))
                                                }
                                            </Grid>
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
                        </Grid>
                    </Container>
                )
            }
        </React.Fragment>
    );
}

const mapStateToProps = (state) => ({
    data: state.mentor.currentMentor,
    mentorCourses: state.course.mentorCourses
})
export default connect(
    mapStateToProps, {
    fetchMentor,
    fetchCoursesOfMentor
}
)(MentorProfilePage);
