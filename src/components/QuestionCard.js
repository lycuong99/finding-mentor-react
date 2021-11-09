import { Card, CardActions, CardContent, CardMedia, Avatar, Typography, Grid, Button, Rating } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';
const useStyles = makeStyles((theme) => ({
    root: {
        cursor: 'pointer'
    }
}));

const QuestionCard = (props) => {
    const { data } = props;
    const classes = useStyles();
    return (
        <Card variant="outlined" sx={{ borderRadius: 2, borderWidth: '2px', width: '100%', padding: '1em' }}>
            <Grid container>
                <Grid item container direction="column" sx={{ width: '112px' }}>
                    <Grid item>
                        <Avatar sx={{ width: 88, height: 88, border: '2px solid #0000001f' }}
                            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80" />
                    </Grid>
                </Grid>
                <Grid item container direction="column" xs>
                    <Grid item>
                        <Typography variant="h2">{data.title}</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="subtitle2">{data.dateCreated}</Typography>
                    </Grid>
                    <Grid item sx={{ marginTop: '1em' }}>
                        <Typography variant="body1">{data.content}</Typography>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container>
                        <Grid item> <QuestionAnswerOutlinedIcon /></Grid>
                        <Grid item>4 answer</Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Card >
    );
}

export default QuestionCard;