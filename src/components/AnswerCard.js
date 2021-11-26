import { Card, Avatar, Typography, Grid, } from "@mui/material";
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

const AnswerCard = (props) => {
    const { data } = props;
    const classes = useStyles();
    return (
        <Card sx={{ padding: '1em', width: '100%' }} variant="outlined">
            <Grid container >
                <Grid item sx={{ marginRight: '1em' }}>
                    <Avatar sx={{ width: 60, height: 60, border: '2px solid #0000001f' }}
                        src={data.avatarUrl} />
                </Grid>
                <Grid item xs>
                    <Grid item container direction="column">
                        <Grid item sx={{ marginBottom: '1em' }}>
                            <Typography variant="h2">{data.fullname}</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1">{data.content}</Typography>
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>
        </Card>
    );
}

export default AnswerCard;