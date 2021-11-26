import { Grid, Paper, TextField, Typography, Button, Divider, List, ListItem } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import AskQuestionDialog from '../dialog/AskQuestionDialog';
import QuestionCard from '../QuestionCard';
import { addAnswer, getAnswersOnSnapshot } from '../../ultils';
import _ from 'lodash';

const QuestionCollection = (props) => {
    const paddingX = '3em';
    const [keySearch, setKeySearch] = useState('');
    const [openDialog, setOpenDialog] = useState(false);
    const { questions } = props;
    const { onAddQuestion } = props;

    return (
        <>

            <Grid container direction="column" >
                <Grid item container justifyContent="space-between" alignItems="center" sx={{ padding: '1em' }}>
                    <Grid item xs={5} >
                        <TextField fullWidth placeholder="Search Questions" size="small" value={keySearch} onChange={(e) => { setKeySearch(e.target.value) }} />
                    </Grid>
                    <Grid item>
                        <Button variant="outlined" onClick={() => {
                            setOpenDialog(true);
                        }}>Ask Question</Button>

                    </Grid>
                </Grid>
                <Grid item sx={{ marginTop: '1em', marginBottom: '2em' }}>
                    <List>
                        {
                            !_.isEmpty(questions) ?
                                questions.filter(q => q.content.includes(keySearch) || q.title.includes(keySearch)).map((question, index) => {
                                    console.log(question);
                                    return (
                                        <ListItem key={index} onClick={() => {
                                            props.onSelectQuestion(question.id);
                                        }}> <QuestionCard data={question} /> </ListItem>
                                    );
                                }) : '0 Question'
                        }
                    </List>
                </Grid>
                <Grid item>

                </Grid>

            </Grid>


            <AskQuestionDialog
                handleClose={() => {
                    setOpenDialog(false);
                }}
                open={openDialog}
                onSubmit={(values) => {
                    onAddQuestion(values);
                }} />
        </>
    );
}

export default QuestionCollection;