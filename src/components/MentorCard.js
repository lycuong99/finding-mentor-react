import { Avatar, Button, Card, CardActions, CardContent, CardMedia, Chip, Grid, Rating, Typography, useMediaQuery, useTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    root: {
        cursor: 'pointer'
    }
}));

const MentorCard = (props) => {
    const { type } = props;
    const classes = useStyles();
    const theme = useTheme();
    const matchMDUp = useMediaQuery(theme.breakpoints.up('md'));
    if (type && type == 'simple') {
        return (
            <Card className={classes.root} variant="outlined" sx={{ borderRadius: 2, borderWidth: '2px', paddingX: '2em', paddingY: '2.2em' }}>
                <Grid container direction="column" alignItems="center">
                    <Grid item xs >
                        <Avatar
                            style={{ width: matchMDUp ? 220 : 160, height: matchMDUp ? 220 : 160 }}
                            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80" />
                    </Grid>
                    <Grid item container direction="column" alignItems="center" sx={{ marginTop: '0.5em', minWidth: 200 }} >
                        <Typography variant="subtitle1" fontSize="1.25rem" color="primary">
                            Amin Ghaderi
                        </Typography>
                        <Typography variant="subtitle2" fontSize="1rem" style={{marginBottom:'5px'}}>
                            Software engineering
                        </Typography>
                        <Rating size="medium"
                            readOnly
                            name="simple-controlled"
                            value={4}
                        />
                    </Grid>
                </Grid>

            </Card >
        );
    }


    return (
        <Card variant="outlined" sx={{ borderRadius: 2, borderWidth: '2px' }}>
            <Grid container>
                <Grid item container xs sx={{ paddingX: '1.5em', paddingY: '2em' }} spacing={3} className="Left">
                    <Grid item>
                        <Avatar sx={{ width: 88, height: 88 }} src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80" />
                    </Grid>
                    <Grid item container xs direction="column" spacing={1} sx={{ paddingX: '1em' }} >
                        <Grid item container rowGap="4px" direction="column">
                            <Typography variant="subtitle1" color="primary">
                                Amin Ghaderi
                            </Typography>
                            <Typography variant="subtitle2">
                                Software engineering
                            </Typography>

                            <Rating size="small"
                                readOnly
                                name="simple-controlled"
                                value={4}
                            />
                            <Typography variant="body1" paragraph >
                                Hi, I'm a Data Scientist, working in this domain for the last 3 years. I am open to helping someone to start with Data Science/ dig deeper into it or someone looking for help in one of their projects. About me: I delved into research initially, working with Harvard Business ...
                            </Typography>
                        </Grid>
                        <Grid item container spacing={1}>
                            <Grid item><Chip label="SWP391" size="small" sx={{ borderRadius: '12px !important', fontWeight: 'medium', paddingX: '10px' }} /></Grid>
                            <Grid item><Chip label="DB301" size="small" sx={{ borderRadius: '12px !important', fontWeight: 'medium', paddingX: '10px' }} /></Grid>
                            <Grid item><Chip label="SYB202" size="small" sx={{ borderRadius: '12px !important', fontWeight: 'medium', paddingX: '10px' }} /></Grid>
                            <Grid item><Chip label="JAV101" size="small" sx={{ borderRadius: '12px !important', fontWeight: 'medium', paddingX: '10px' }} /></Grid>
                        </Grid>
                    </Grid>

                </Grid>
                <Grid item container direction="column"
                    justifyContent="center" alignItems="center" xs={3}
                    sx={{ paddingX: '2em', paddingY: '2em', bgcolor: '#f8f8f8', }} >
                    <Grid item >
                        <Button variant="contained" sx={{ fontSize: '1rem', width: '8em', textTransform: 'capitalize', fontWeight: 400 }} >
                            View Profile
                        </Button>
                    </Grid>
                    <Grid item height="1em"></Grid>
                    <Grid item >
                        <Button variant="outlined" fullWidth sx={{ backgroundColor: 'white', fontSize: '1rem', width: '8em', textTransform: 'capitalize', fontWeight: 400 }}>
                            Contact
                        </Button>
                    </Grid>


                </Grid>
            </Grid>
        </Card >
    );
}

export default MentorCard;