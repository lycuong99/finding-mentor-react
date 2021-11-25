import { Card, CardActions, CardContent, CardMedia, Avatar, Typography, Grid, Button, Rating } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';
import format from "date-fns/format";
import { getAvatarLetter } from '../ultils';
const useStyles = makeStyles((theme) => ({
    root: {
        cursor: 'pointer'
    }
}));
const formatDate = (date) => {
    if (typeof date == 'string') return date;
    let d = new Date(date.toDate());
    console.log(d);
    return format(d, 'dd/MM/yyyy');
}
const QuestionCard = (props) => {
    const { data } = props;
    const classes = useStyles();
    return (
        <Card variant="outlined" sx={{ borderRadius: 2, borderWidth: '2px', width: '100%', padding: '1em', cursor: 'pointer' }}>
            <Grid container>
                <Grid item container direction="column" sx={{ width: '112px' }}>
                    <Grid item>
                        <Avatar sx={{ width: 88, height: 88, border: '2px solid #0000001f' }}
                            src={data.avatarUrl} />
                    </Grid>
                </Grid>
                <Grid item container direction="column" xs>
                    <Grid item>
                        <Typography variant="h2">{data.title}</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="subtitle2">    {formatDate(data.dateCreated)}</Typography>
                    </Grid>
                    <Grid item sx={{ marginTop: '1em' }}>
                        <Typography variant="body1">{data.content}</Typography>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container>
                        <Grid item> <QuestionAnswerOutlinedIcon /></Grid>
                        <Grid item>{data.answerCount} answer</Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Card >
    );
}

export default QuestionCard;