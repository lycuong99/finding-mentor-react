import {
    Container, Paper, Snackbar, Alert, Typography
} from '@mui/material';
import React, { useEffect, useState } from 'react';

import { fetchAllMajor, fetchAllSubjectByMajor } from '../../../actions';
import { getUserStudentInfo, registerMentor } from '../../../services';
import BecomeMentorForm from './BecomeMentorForm';
import { connect } from 'react-redux';
import _ from 'lodash';
import history from '../../../history';
import UserStorage from '../../../ultils/UserStorage';

const FAIL = -1;
const SUCCESS = 1;
const NONE = 0;

const BecomeMentorPage = (props) => {

    const [studentInfo, setStudentInfo] = useState(null);
    const [registerStatus, setRegisterStatus] = useState(NONE);

    const handleAuthorization = () => {
        let roles = UserStorage.getUserRoles();
        console.log(roles);

        if (_.includes(roles, 'MENTOR')) {
            history.push("/mentor/course");
        }

    }
    useEffect(() => {
        handleAuthorization();
    })
    useEffect(async () => {
        handleAuthorization();
        
        props.fetchAllMajor();
        let student = await getUserStudentInfo();
        setStudentInfo(student);
    }, []);

    useEffect(() => {
        if (!_.isEmpty(props.majors)) {
            props.majors.forEach(major => { props.fetchAllSubjectByMajor(major.id); })
        }
    }, [props.majors]);

    const handleSubmitForm = async (values) => {
        let submitObj = {
            ...values,
            subjectIds: values.subjects,
            majorIds: values.majors
        }
        let result = await registerMentor(submitObj);
        if (result) {
            setRegisterStatus(SUCCESS);
            setTimeout(() => {
                history.push('/mentor/course');
            }, 1000);
        } else {
            setRegisterStatus(FAIL);
        }
    }

    return (
        <Container maxWidth="md" sx={{ minHeight: '100vh', paddingTop: '2em' }}>
            <Snackbar
                open={registerStatus === SUCCESS}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                onClose={() => {
                    setTimeout(() => {
                        setRegisterStatus(NONE);
                    }, 200);
                }}
                message="Register Success"
            >
                <Alert severity="success">Register Success!</Alert>
            </Snackbar>

            <Snackbar
                open={registerStatus === FAIL}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                onClose={() => {
                    setTimeout(() => {
                        setRegisterStatus(NONE);
                    }, 200);
                }}
                message="Register fail"
            >
                <Alert severity="error">Register Fail!</Alert>
            </Snackbar>
            <Paper sx={{ paddingLeft: '2em', paddingRight: '2em', paddingTop: '2em', paddingBottom: '3em', borderRadius: 3, borderWidth: '2px' }} variant="outlined">
                <Typography variant="h1">Apply as a mentor</Typography>
                {studentInfo && props.majors ?
                    <BecomeMentorForm majors={props.majors}
                        subjectMajors={props.subjectMajors}
                        onSubmit={handleSubmitForm}
                        initialValues={
                            {
                                about: '',
                                isGraduted: true,
                                majors: studentInfo.majorId ? [studentInfo.majorId] : [],
                                subjects: [],
                                company: '',
                            }
                        }
                    /> : '..loading'
                }

            </Paper>
        </Container>
    );
}
const mapStateToProps = (state) => ({

    majors: state.major.majors,
    subjectMajors: state.major.subjectMajors,
});

export default connect(mapStateToProps, {
    fetchAllMajor, fetchAllSubjectByMajor
})(BecomeMentorPage);
