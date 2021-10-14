import { Card, CardActions, CardContent, CardMedia, Typography, Grid, Button, Rating } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    logo: {
        height: '2em',
        [theme.breakpoints.down('md')]: { height: '7em' },
        [theme.breakpoints.down('xs')]: { height: '5.5em' },
    },
    logoContainer: {
        padding: "1em",
        height: "100%",
        "&:hover": {
            backgroundColor: "transparent"
        }
    },
    root: {
        cursor: 'pointer'
    }
}));

const CourseCard = (props) => {

    const classes = useStyles();
    if (props.type && props.type == 'detail') {
        return (
          
                <Card elevation={4} sx={{ width: '100%', borderWidth: 2, borderRadius: 2, }} variant="outlined" className={classes.root}>
                    <Grid container direction="row" justifyContent="space-between">
                        <Grid item >
                            <CardMedia
                                component="img"
                                height="160"
                                image="https://img-c.udemycdn.com/course/240x135/705264_caa9_11.jpg"
                                alt="green iguana"
                            />
                        </Grid>
                        <Grid item xs>
                            <CardContent style={{ paddingTop: '1em' }}>
                                <Typography variant="subtitle1">
                                    Course Name
                                </Typography>
                                <Typography variant="body1">
                                    Become a full-stack web developer with just one course. HTML, CSS, Javascript, Node, React, MongoDB and more!
                                </Typography>
                                <Typography variant="subtitle2">
                                    Ly Van Cuong
                                </Typography>
                                <Rating size="medium"
                                    readOnly
                                    name="simple-controlled"
                                    value={4}
                                />
                            </CardContent>
                        </Grid>
                        <Grid item>
                            <CardActions>
                                <Grid container alignItems="center" direction="column-reverse" justifyContent="space-between">
                                    <Grid item>
                                        <Button variant="contained" component={Link} to="/mentee/course" sx={{ color: 'white' }}> Enroll </Button>
                                    </Grid>

                                    <Grid item>
                                        <Typography variant="h2">{`$` + 16}</Typography>
                                    </Grid>
                                </Grid>
                            </CardActions>
                        </Grid>
                    </Grid>



                </Card>
          
        );
    }
    return (

        <Card
            variant="outlined"
            sx={{ borderWidth: 2, borderRadius: 2, maxWidth: '20em' }}
            className={classes.root}>
            <CardMedia
                component="img"
                height="140"
                image="https://img-c.udemycdn.com/course/240x135/947098_02ec_2.jpg"
                alt="green iguana"
            />
            <CardContent sx={{ paddingTop: '1em', paddingX: '8px', paddingBottom: 0 }}>
                <Typography variant="subtitle1" lineHeight="1.2">
                    The Complete 2021 Web Development Bootcamp
                </Typography>

                <Typography variant="subtitle2">
                    Ly Van Cuong
                </Typography>
                <Rating size="small"
                    readOnly
                    name="simple-controlled"
                    value={4}
                />
            </CardContent>
            <CardActions>
                <Grid container alignItems="center" justifyContent="space-between">
                    <Grid item>
                        <Button variant="contained" component={Link} to="/mentee/course" sx={{ color: 'white' }}> Enroll </Button>
                    </Grid>

                    <Grid item>
                        <Typography variant="h2">{`$` + 16}</Typography>
                    </Grid>
                </Grid>
            </CardActions>
        </Card>
    );
}

export default CourseCard;