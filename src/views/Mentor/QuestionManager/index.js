import { Grid, Paper, TextField, Typography, Button, Divider, List, ListItem } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import QuestionCard from '../../../components/QuestionCard';
import QuestionCollection from './QuestionCollection';
import QuestionDetail from './QuestionDetail';
import { addQuestion, getQuestionsOnSnapshot } from '../../../ultils';
import { Unsubscribe } from '@mui/icons-material';

const questions_INIT = [
    {
        id: '1',
        title: "Do you want to eat ?",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sit. Volutpat odio facilisis mauris sit amet massa. Commodo odio aenean sed adipiscing diam donec adipiscing tristique. Mi eget mauris pharetra et. Non tellus orci ac auctor augue. Elit at imperdiet dui accumsan sit. Ornare arcu dui vivamus arcu felis. Egestas integer eget aliquet nibh praesent. In hac habitasse platea dictumst quisque sagittis purus. Pulvinar elementum integer enim neque volutpat ac",
        createBy: 'lyvancuong',
        dateCreated: '10/21/2020',
        courseId: 'c1',
        answers: [
            {
                id: '1',
                createBy: 'lyvancuong',
                content: ""
            }
        ]

    },
    {
        id: '2',
        title: "Do you want to eat ?",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sit. Volutpat odio facilisis mauris sit amet massa. Commodo odio aenean sed adipiscing diam donec adipiscing tristique. Mi eget mauris pharetra et. Non tellus orci ac auctor augue. Elit at imperdiet dui accumsan sit. Ornare arcu dui vivamus arcu felis. Egestas integer eget aliquet nibh praesent. In hac habitasse platea dictumst quisque sagittis purus. Pulvinar elementum integer enim neque volutpat ac",
        createBy: 'lyvancuong',
        dateCreated: '10/21/2020',
        courseId: 'c1',
        answers: [
            {
                id: '1',
                createBy: 'locton',
                content: ""
            }
        ]

    }
];
const DETAIL_MODE = 'DETAIL_MODE';

const QuestionManager = (props) => {
    const paddingX = '3em';
    const { courseId } = props;
    console.log(courseId);
    const [questions, setQuestions] = useState(null);
    const [currentQuestion, setCurrentQuestion] = useState(null);
    const handleSelectQuestion = (id) => {
        setCurrentQuestion(id);
    };
    const handleCloseQuestionDetail = () => {
        setCurrentQuestion(null);
    }


    useEffect(() => {


        let unsub = getQuestionsOnSnapshot(courseId,
            (datas) => {
                setQuestions(datas);
            });

        return () => {
            if (unsub) {
                unsub();
            }

        }

    }, []);


    return (
        <Paper>
            <Grid container direction="column" >
                <Grid item>
                    <Typography variant="h2" sx={{ padding: '1em' }}>Questions</Typography>
                    <Divider />

                </Grid>


                <Grid item>
                    {
                        currentQuestion ?
                            (<QuestionDetail
                                data={questions.find(q => q.id == currentQuestion)} questionId={currentQuestion} courseId={courseId}
                                onClose={handleCloseQuestionDetail} />)
                            : questions ? <QuestionCollection questions={questions} onSelectQuestion={handleSelectQuestion} />
                                : '...loading'
                    }
                </Grid>

            </Grid>
        </Paper>
    );
}

export default QuestionManager;