import { Card, CardActions, CardContent, CardMedia, Typography, Grid, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

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
            <Card elevation={4} style={{ width: '100%' }} className={classes.root}>
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
                        </CardContent>
                    </Grid>
                    <Grid item>
                        <CardActions>
                            <Grid container alignItems="center" direction="column-reverse" justifyContent="space-between">
                                <Grid item>
                                    <Button> Enroll </Button>
                                </Grid>

                                <Grid item>
                                    <Typography variant="h4">{`$ ` + 16}</Typography>
                                </Grid>
                            </Grid>
                        </CardActions>
                    </Grid>
                </Grid>



            </Card>
        );
    }
    return (
        <Card style={{ maxWidth: '17em' }} className={classes.root}>
            <CardMedia
                component="img"
                height="140"
                image="https://img-c.udemycdn.com/course/240x135/705264_caa9_11.jpg"
                alt="green iguana"
            />
            <CardContent style={{ paddingTop: '1em' }}>
                <Typography variant="subtitle1">
                    The Complete 2021 Web Development Bootcamp
                </Typography>

                <Typography variant="subtitle2">
                    Ly Van Cuong
                </Typography>
            </CardContent>
            <CardActions>
                <Grid container alignItems="center" justifyContent="space-between">
                    <Grid item>
                        <Button> Enroll </Button>
                    </Grid>

                    <Grid item>
                        <Typography variant="h4">{`$ ` + 16}</Typography>
                    </Grid>
                </Grid>
            </CardActions>
        </Card>
    );
}

export default CourseCard;