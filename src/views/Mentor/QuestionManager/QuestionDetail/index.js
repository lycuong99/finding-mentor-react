import { Grid, Paper, TextField, Typography, Button, Divider, List, ListItem, Avatar, Card } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';


const question = {
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
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sit. Volutpat odio facilisis mauris sit amet massa."
        },
        {
            id: '2',
            createBy: 'lyvancuong',
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sit. Volutpat odio facilisis mauris sit amet massa."
        },
        {
            id: '3',
            createBy: 'lyvancuong',
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sit. Volutpat odio facilisis mauris sit amet massa."
        }
    ]

};

const QuestionDetail = (props) => {
    const paddingX = '3em';
    const { data } = { props };
    return (
        <Grid container direction="row" sx={{ padding: '1em', paddingRight: '2em' }}>
            <Grid item container direction="column" sx={{ width: '120px' }}>
                <Grid item ><Button onClick={props.onClose}>BACk</Button></Grid>
                <Grid item xs>
                    <Avatar sx={{ width: 88, height: 88, border: '2px solid #0000001f' }}
                        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80" />
                </Grid>
            </Grid>

            {/* QUESTION */}
            <Grid item xs>
                <Grid container direction="column">
                    <Grid item container direction="column" >
                        <Grid item>
                            <Typography variant="h2">{question.createBy}</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h2">{question.title}</Typography>
                        </Grid>
                        <Grid item  sx={{ marginTop: '1em' }}>
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
                                    sx={{ borderRadius: 4, backgroundColor: '#fafafa' }}
                                    size="small" />
                            </Grid>
                            <Grid item container sx={{ paddingTop: '12px' }}>
                                <Grid item>
                                    <Button variant="contained" size="small" sx={{ textTransform: 'capitalize' }}>answer</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item sx={{ marginTop: '1em' }}>
                        <Typography variant="h2">4 answers</Typography>
                    </Grid>
                    {/* ANSWERs */}
                    <Grid item container>
                        {/* <Grid item sx={{width:'60px'}}>

                        </Grid> */}
                        <Grid item>
                            <List >
                                {
                                    question.answers.map(answer => (
                                        <ListItem key={answer.id}>
                                            <Card sx={{ padding: '1em' }}>
                                                <Grid container >
                                                    <Grid item sx={{ marginRight: '1em' }}>
                                                        <Avatar sx={{ width: 60, height: 60, border: '2px solid #0000001f' }}
                                                            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80" />
                                                    </Grid>
                                                    <Grid item xs>
                                                        <Grid item container direction="column">
                                                            <Grid item sx={{ marginBottom: '1em' }}>
                                                                <Typography variant="h2">{answer.createBy}</Typography>
                                                            </Grid>
                                                            <Grid item>
                                                                <Typography variant="body1">{answer.content}</Typography>
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>

                                                </Grid>
                                            </Card>
                                        </ListItem>
                                    ))
                                }
                                <ListItem>

                                </ListItem>
                            </List>
                        </Grid>


                    </Grid>



                </Grid>
            </Grid>

        </Grid>
    );
}

export default QuestionDetail;