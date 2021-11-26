import { Avatar, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Chip, Grid, Rating, Tooltip, Typography, useMediaQuery, useTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import { Link } from 'react-router-dom';
import { getAvatarLetter } from '../ultils';
const useStyles = makeStyles((theme) => ({
    root: {
        cursor: 'pointer'
    }
}));

const MentorCard = (props) => {
    const { type, data } = props;

    const classes = useStyles();
    const theme = useTheme();
    const matchMDUp = useMediaQuery(theme.breakpoints.up('md'));
    if (type && type == 'vertical') {
        return (
            <Link to={`/mentee/profile/${data.id}`} style={{ textDecoration: 'none' }}>
                <Card className={classes.root}
                    variant="outlined"
                    sx={{ borderRadius: 2, borderWidth: '2px', paddingX: '2em', paddingY: '2.2em', width: '100%' }}
                >
                    <Grid container direction="column" alignItems="center">
                        <Grid item xs >
                            <Avatar
                                style={{ width: matchMDUp ? 220 : 160, height: matchMDUp ? 220 : 160 }}
                                src={data.avatarUrl} />
                        </Grid>
                        <Grid item container direction="column" alignItems="center" sx={{ marginTop: '0.5em', minWidth: 200 }} >
                            <Typography variant="subtitle1" fontSize="1.25rem" color="primary">
                                {data.fullname}
                            </Typography>
                            {
                                data.mentor.majors ?
                                    data.mentor.majors.map(major => (
                                        <Tooltip title={major.id}>
                                            <Typography variant="subtitle2" fontSize="1rem" style={{ marginBottom: '5px' }}>
                                                {major.name}
                                            </Typography>
                                        </Tooltip>
                                    )) : null
                            }

                            {/* <Rating size="medium"
                                readOnly
                                name="simple-controlled"
                                value={4}
                            /> */}
                        </Grid>
                    </Grid>

                </Card >
            </Link>
        );
    }
    else if (type && type == 'horizontal') {
        return (
            <Card variant="outlined" sx={{ borderRadius: 2, borderWidth: '2px', width: '100%' }}>
                <Grid container sx={{ paddingX: '1em', paddingY: '1em' }}>
                    <Grid item>
                        <Avatar sx={{ width: 88, height: 88, border: '2px solid #0000001f' }}
                            src={data.avatarUrl} />
                    </Grid>
                    <Grid item container xs direction="column" spacing={1} sx={{ paddingX: '1em' }} >
                        <Grid item container direction="column">
                            <Typography variant="subtitle1" fontSize="1.25rem" color="primary">
                                {data.fullname}
                            </Typography>
                            {
                                data.mentor.majors ?
                                    data.mentor.majors.map(major => (
                                        <Tooltip title={major.id}>
                                            <Typography variant="subtitle2" fontSize="1rem" style={{ marginBottom: '5px' }}>
                                                {major.name}
                                            </Typography>
                                        </Tooltip>
                                    )) : null
                            }

                            {/* <Rating size="small"
                                readOnly
                                name="simple-controlled"
                                value={4}
                            /> */}
                        </Grid>
                        <Grid item container spacing={1}>
                            {
                                data.mentor.subjects.map(subject => (
                                    <Grid item>
                                        <Tooltip title={subject.name}>
                                            <Chip label={subject.id} size="small" sx={{ borderRadius: '12px !important', fontWeight: 'medium', paddingX: '10px' }} />
                                        </Tooltip>
                                    </Grid>
                                ))
                            }
                        </Grid>
                    </Grid>
                </Grid>
            </Card>
        )
    } else {

        return (

            <Card variant="outlined" sx={{ borderRadius: 2, borderWidth: '2px', width: '100%' }}>
                <Grid container>
                    <Grid item container xs sx={{ paddingX: '1.5em', paddingY: '2em' }} spacing={3} className="Left">
                        <Grid item>
                            <Avatar sx={{ width: 88, height: 88, border: '2px solid #0000001f' }}
                                src={data.avatarUrl ? data.avatarUrl : null} />
                        </Grid>
                        <Grid item container xs direction="column" spacing={1} sx={{ paddingX: '1em' }} >
                            <Grid item container rowGap="4px" direction="column">
                                <Typography variant="subtitle1" color="primary">
                                    {data.fullname}
                                </Typography>

                                <Grid item container >
                                    {
                                        data.mentor.majors.map((major, index) => (
                                            <Grid item key={major.id} spacing={0}>
                                                <Tooltip title={major.id}>
                                                    <Typography variant="subtitle2" fontSize="1rem" style={{ marginBottom: '5px' }}>
                                                        {` ${major.name}${index != data.mentor.majors.length - 1 ? ', ' : ''}`}
                                                    </Typography>
                                                </Tooltip>
                                            </Grid>
                                        ))
                                    }
                                </Grid>


                                {/* <Rating size="small"
                                    readOnly
                                    name="simple-controlled"
                                    value={4}
                                /> */}
                                <Typography variant="body1" paragraph >
                                    {data.mentor.about}
                                </Typography>
                            </Grid>
                            <Grid item container spacing={1}>
                                {
                                    data.mentor.subjects.map(subject => (
                                        <Grid item>
                                            <Tooltip title={subject.name}>
                                                <Chip label={subject.id} size="small" sx={{ borderRadius: '12px !important', fontWeight: 'medium', paddingX: '10px' }} />
                                            </Tooltip>
                                        </Grid>
                                    ))
                                }

                            </Grid>
                        </Grid>

                    </Grid>
                    <Grid item container direction="column"
                        justifyContent="center" alignItems="center" xs={3}
                        sx={{ paddingX: '2em', paddingY: '2em', bgcolor: '#f8f8f8', }} >
                        <Grid item >
                            <Button variant="contained" component={Link} to={`/mentee/profile/${data.id}`} sx={{ fontSize: '1rem', width: '8em', textTransform: 'capitalize', fontWeight: 400 }} >
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
}

export default MentorCard;