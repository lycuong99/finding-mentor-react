import { Grid, Paper, TextField, Typography, Button, Divider, List, ListItem } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import QuestionCard from '../../../../components/QuestionCard';



const QuestionCollection = (props) => {
    const paddingX = '3em';
    const [keySearch, setKeySearch] = useState('');
    return (
        <Paper>
            <Grid container direction="column" >
                <Grid item container justifyContent="space-between" alignItems="center">
                    <Grid item xs={5} sx={{ padding: '1em' }}>
                        <TextField fullWidth placeholder="Search Questions" size="small" value={keySearch} onChange={(e) => { setKeySearch(e.target.value) }} />
                    </Grid>
                    <Grid item>


                    </Grid>
                </Grid>
                <Grid item sx={{ marginTop: '1em', marginBottom: '2em' }}>
                    <List>
                        {
                            props.questions.map((question) => (
                                <ListItem onClick={() => {
                                    props.onSelectQuestion(question.id);
                                }}> <QuestionCard data={question} /> </ListItem>
                            ))
                        }
                    </List>
                </Grid>
                <Grid item>

                </Grid>

            </Grid>
        </Paper>

    );
}

export default QuestionCollection;