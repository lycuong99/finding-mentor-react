import { Grid, Paper, TextField, Typography, Button, Divider, List, ListItem } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import QuestionCard from '../../../components/QuestionCard';

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
            content: ""
        }
    ]

};
const QuestionDetail = (props) => {
    const paddingX = '3em';
    const { data } = { props };
    return (
        <Grid container>
            {/* QUESTION */}
            <Grid item container direction="column" >
                <Grid item>
                    <Typography variant="h2">{question.title}</Typography>
                </Grid>
                <Grid item>
                    <Typography variant="body1">{question.content}</Typography>
                </Grid>
            </Grid>
            {/* ANSWERs */}
            <Grid item>

            </Grid>
        </Grid>
    );
}

export default QuestionDetail;