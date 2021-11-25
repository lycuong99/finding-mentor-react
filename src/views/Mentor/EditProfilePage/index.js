import {
    Alert,
    Avatar, Button, Card, Checkbox, Chip, Container, FormControl,
    FormControlLabel, FormGroup, FormLabel, Grid, Paper, Radio, RadioGroup, Rating, Snackbar, TextField, Typography
} from '@mui/material';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchMentor, fetchAllMajor, fetchAllSubjectByMajor, updateMentorProfile, closeSnackBar,  } from '../../../actions';
import UserStorage from '../../../ultils/UserStorage';
import MentorProfileForm from './MentorProfileForm';
import { updateAvatarImage } from '../../../ultils';
import _ from 'lodash';

const convertToFormObj = (data) => {
    return {
        avatarUrl: data.avatarUrl,
        fullname: data.fullname,
        id: data.id,
        about: data.mentor.about ? data.mentor.about : '',
        isGraduted: data.mentor.isGraduted,
        majors: data.mentor.majors.map(m => m.id),
        subjects: data.mentor.subjects.map(s => s.id),
        address: data.address ? data.address : '',
        company: data.mentor.company ? data.mentor.company : '',
        phoneNumber: data.phoneNumber
    }
}

const EditProfilePage = (props) => {

    useEffect(() => {
        props.fetchMentor(UserStorage.getUserId());
        props.fetchAllMajor();
    }, []);

    useEffect(() => {
        if (!_.isEmpty(props.majors)) {
            props.majors.forEach(major => { props.fetchAllSubjectByMajor(major.id); })
        }
    }, [props.majors]);

    useEffect(() => {
        if (props.currentMentor) {
            console.log(props.currentMentor);
        }
    }, [props.currentMentor]);

    const handleSubmitForm = (values) => {
        let newImage = values.imageFileData;

        updateAvatarImage(newImage, values.id, (newUrl) => {
            let updateObj = null;

            if (!newUrl) {
                updateObj = {
                    ...values, imageFileData: undefined, imageFile: undefined, subjectIds: values.subjects,
                    majorIds: values.majors
                };
            } else {
                console.log(newUrl);
                updateObj = {
                    ...values, avatarUrl: newUrl, imageFileData: undefined, imageFile: undefined,
                    subjectIds: values.subjects,
                    majorIds: values.majors
                };
            }

            props.updateMentorProfile(updateObj);

        });

    }

    return (
        <Container maxWidth="lg" sx={{ minHeight: '100vh', paddingTop: '2em' }}>

            <Paper sx={{ paddingLeft: '2em', paddingRight: '2em', paddingTop: '2em', paddingBottom: '3em', borderRadius: 3, borderWidth: '2px' }} variant="outlined">
                <Typography variant="h1">Profile</Typography>
                <Snackbar
                    open={props.isUpdateSuccess}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                    onClose={() => {
                        setTimeout(() => {
                            props.closeSnackBar();
                        }, 2000)
                    }}
                    message="Update Success"

                >
                    <Alert severity="success">Update Success!</Alert>
                </Snackbar>
                <Snackbar
                    open={props.error}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                    onClose={() => {
                        setTimeout(() => {
                            props.closeSnackBar();
                        }, 200)
                    }}
                >
                    <Alert severity="error">Update Fail!</Alert>
                </Snackbar>
                {
                    props.currentMentor && !_.isEmpty(props.majors) && !_.isEmpty(props.subjectMajors) ? (
                        <MentorProfileForm initialValues={convertToFormObj(props.currentMentor)}
                            majors={props.majors}
                            subjectMajors={props.subjectMajors}
                            onSubmit={handleSubmitForm} />
                    ) : 'Loading...'
                }
            </Paper>
        </Container>
    );
}
const mapStateToProps = (state) => ({
    currentMentor: state.mentor.currentMentor,
    majors: state.major.majors,
    subjectMajors: state.major.subjectMajors,
    isUpdateSuccess: state.mentor.isUpdateSuccess,
    error: state.mentor.error,
});

export default connect(mapStateToProps, {
    fetchMentor, fetchAllMajor, fetchAllSubjectByMajor, updateMentorProfile, closeSnackBar
})(EditProfilePage);