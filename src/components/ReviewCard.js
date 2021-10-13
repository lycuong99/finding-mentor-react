import { Avatar, Button, Card, CardActions, CardContent, CardMedia, Chip, Grid, Rating, Typography, useMediaQuery, useTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    root: {
        cursor: 'pointer'
    }
}));

const ReviewCard = (props) => {
    const { type } = props;
    const classes = useStyles();
    const theme = useTheme();
    const matchMDUp = useMediaQuery(theme.breakpoints.up('md'));


    return (
        <Card variant="outlined" sx={{ borderRadius: 2, borderWidth: '2px' }}>
            <Grid container direction="column">
                <Grid item container xs sx={{ paddingX: '1.5em', paddingY: '2em' }} spacing={3}>
                    <Grid item>
                        <Avatar sx={{ width: 88, height: 88 }} src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80" />
                    </Grid>
                    <Grid item container xs direction="column" spacing={1} sx={{ paddingX: '1em' }} >
                        <Typography variant="subtitle1">Alex Chelmis</Typography>
                        <Typography variant="subtitle2">Software Engineering</Typography>
                    </Grid>

                </Grid>
                <Grid item >
                    <Typography variant="body1">
                        Content
                    </Typography>
                </Grid>
            </Grid>
        </Card >
    );
}

export default ReviewCard;