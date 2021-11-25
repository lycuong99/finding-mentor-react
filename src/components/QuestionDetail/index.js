import { Grid, Paper, TextField, Typography, Button, Divider, List, ListItem, Avatar, Card } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import AnswerCard from '../AnswerCard';
import { addAnswer, getAnswersOnSnapshot, getAvatarLetter } from '../../ultils';
import _ from 'lodash';
import { connect } from 'react-redux';
const question_init = {
    id: '1',
    title: "Do you want to eat ?",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sit. Volutpat odio facilisis mauris sit amet massa. Commodo odio aenean sed adipiscing diam donec adipiscing tristique. Mi eget mauris pharetra et. Non tellus orci ac auctor augue. Elit at imperdiet dui accumsan sit. Ornare arcu dui vivamus arcu felis. Egestas integer eget aliquet nibh praesent. In hac habitasse platea dictumst quisque sagittis purus. Pulvinar elementum integer enim neque volutpat ac",
    createBy: 'lyvancuong',
    dateCreated: '10/21/2020',
    courseId: 'c1',
    answers: [
        {
            id: '1',
            createBy: 'mentee1',
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sit. Volutpat odio facilisis mauris sit amet massa."
        },
        {
            id: '2',
            createBy: 'mentee2',
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sit. Volutpat odio facilisis mauris sit amet massa."
        },
        {
            id: '3',
            createBy: 'mentee2',
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sit. Volutpat odio facilisis mauris sit amet massa."
        }
    ]

};

const QuestionDetail = (props) => {
    const paddingX = '3em';
    const { courseId } = props;
    const [question, setQuestion] = useState(props.data);
    const [answerText, setAnswerText] = useState('');
    const [answers, setAnswers] = useState(null);

    console.log(courseId);
    const handleAnswerSubmit = () => {


        addAnswer(courseId, question.id, {
            createBy: 'mentor1',
            content: answerText,
            dateCreated: new Date(),
            isMentor: true
        });
        setAnswerText('');
    }


    useEffect(() => {
        let unSub = getAnswersOnSnapshot(courseId, question.id, (datas) => {

            const answersTmp = datas.map(answer => {
                if (answer.isMentor) {
                    return {
                        ...answer,
                        fullname: props.currentMentor.fullname,
                        avatarUrl: props.currentMentor.avatarUrl ? props.currentMentor.avatarUrl : getAvatarLetter(props.currentMentor.fullname)
                    }
                }
                // -----
                let mentee = props.mentees.find(m => m.id == answer.createBy);
                console.log(mentee);
                if (mentee) {
                    return {
                        ...answer,
                        fullname: mentee.fullname,
                        avatarUrl: mentee.avatarUrl ? mentee.avatarUrl : getAvatarLetter(mentee.fullname)
                    }
                }
                return {
                    ...answer,
                    fullname: 'Unknown',
                    avatarUrl: null
                }
            });

            setAnswers(answersTmp);
        });

        return () => {
            if (unSub) unSub();
        }
    }, [props.data])

    return (
        <Grid container direction="row" sx={{ padding: '1em', paddingRight: '2em' }}>
            <Grid item container direction="column" sx={{ width: '120px' }}>
                <Grid item ><Button onClick={props.onClose}>BACk</Button></Grid>
                <Grid item xs>
                    <Avatar sx={{ width: 88, height: 88, border: '2px solid #0000001f' }}
                        src={question.avatarUrl} /> </Grid>
            </Grid>

            {/* QUESTION */}
            <Grid item xs>
                <Grid container direction="column">
                    <Grid item container direction="column" >
                        <Grid item>
                            <Typography variant="h2">{question.fullname}</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h2">{question.title}</Typography>
                        </Grid>
                        <Grid item sx={{ marginTop: '1em' }}>
                            <Typography variant="body1">{question.content}</Typography>
                        </Grid>
                    </Grid>
                    <Grid item sx={{ marginTop: '1em' }}>
                        <Grid container direction="column">
                            <Grid item>
                                <Typography fontWeight={600}> {`Your answer: `}</Typography>

                            </Grid>
                            <Grid item >
                                <TextField fullWidth multiline rows={3}
                                    value={answerText}
                                    onChange={(e) => { setAnswerText(e.target.value) }}
                                    sx={{ borderRadius: 4, backgroundColor: '#fafafa' }}
                                    size="small" />
                            </Grid>
                            <Grid item container sx={{ paddingTop: '12px' }}>
                                <Grid item>
                                    <Button variant="contained" disabled={_.isEmpty(answerText)} size="small" sx={{ textTransform: 'capitalize' }}
                                        onClick={handleAnswerSubmit}>answer</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item sx={{ marginTop: '1em' }}>
                        <Typography variant="h2">{answers ? answers.length : 0} answers</Typography>
                    </Grid>
                    {/* ANSWERs */}
                    <Grid item container>
                        {/* <Grid item sx={{width:'60px'}}>

                        </Grid> */}
                        <Grid item>
                            <List >
                                {
                                    answers ?
                                        answers.map(answer => (
                                            <ListItem key={answer.id} >
                                                <AnswerCard data={answer} />
                                            </ListItem>
                                        ))
                                        : '0 answer'
                                }
                                <ListItem>

                                </ListItem>
                            </List>
                        </Grid>


                    </Grid>



                </Grid>
            </Grid>

        </Grid >
    );
}
const mapStateToProps = (state) => {
    return {
        mentees: state.course.mentees,
        currentMentor: state.mentor.currentMentor,
    }
};
export default connect(mapStateToProps, {})(QuestionDetail);
