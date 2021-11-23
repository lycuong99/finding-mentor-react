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
        <Card sx={{ padding: '1em', width: '100%' }}>
            <Grid container >
                <Grid item sx={{ marginRight: '1em' }}>
                    <Avatar sx={{ width: 60, height: 60, border: '2px solid #0000001f' }}
                        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80" />
                </Grid>
                <Grid item xs>
                    <Grid item container direction="column">
                        <Grid item sx={{ marginBottom: '1em' }}>
                            <Typography variant="h2">{data.createBy}</Typography>
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