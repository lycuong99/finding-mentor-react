import {
    Avatar, Button, Card, Checkbox, Chip, Container, FormControl,
    FormControlLabel, FormGroup, FormLabel, Grid, Paper, Radio, RadioGroup, Rating, TextField, Typography
} from '@mui/material';
import React, { useEffect } from 'react';
import MultipleSelectChip from '../../../components/MultipleSelectChip';
import { useFormik } from "formik";
import { connect } from 'react-redux';
import { fetchMentor, fetchAllMajor, fetchAllSubjectByMajor } from '../../../actions';
import UserStorage from '../../../ultils/UserStorage';
import MentorProfileForm from './MentorProfileForm';

const convertToFormObj = (data) => {
    return {
        avatarUrl: data.mentor.avatarUrl,
        fullname: data.fullname,
        id: data.id,
        about: data.mentor.about ? data.mentor.about : '',
        isGraduted: data.mentor.isGraduted,
        majors: data.mentor.majors.map(m => m.id),
        subjects: data.mentor.subjects,
        address: data.mentor.address ? data.mentor.address : '',
        company: data.mentor.company ? data.mentor.company : ''
    }
}

const EditProfilePage = (props) => {

    useEffect(() => {
        props.fetchMentor(UserStorage.getUserId());
    }, []);

    useEffect(() => {
        if (props.currentMentor) {
            console.log(props.currentMentor);

        }
    }, [props.currentMentor]);


    return (
        <Container maxWidth="lg" sx={{ minHeight: '100vh', paddingTop: '2em' }}>

            <Paper sx={{ paddingLeft: '2em', paddingRight: '2em', paddingTop: '2em', paddingBottom: '3em', borderRadius: 3, borderWidth: '2px' }} variant="outlined">
                <Typography variant="h1">Profile</Typography>
                {
                    props.currentMentor ? (
                        <MentorProfileForm initialValues={convertToFormObj(props.currentMentor)} />
                    ) : 'Loading...'
                }
            </Paper>
        </Container>
    );
}
const mapStateToProps = (state) => ({
    currentMentor: state.mentor.currentMentor
});

export default connect(mapStateToProps, {
    fetchMentor, fetchAllMajor, fetchAllSubjectByMajor
})(EditProfilePage);