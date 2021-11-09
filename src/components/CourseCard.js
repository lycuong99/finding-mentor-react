import { Card, CardActions, CardContent, CardMedia, Typography, Grid, Button, Rating } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
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
    let { data } = props;

    if (!data) {
        data = { name: "ABC" };
    }
    const classes = useStyles();
    if (props.type && props.type == 'detail') {
        return (

            <Card sx={{ width: '100%', borderWidth: 2, borderRadius: 2, }} variant="outlined" className={classes.root}>
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
                                {data.name}
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
                                    <Typography variant="h2">{`$` + data.price}</Typography>
                                </Grid>
                            </Grid>
                        </CardActions>
                    </Grid>
                </Grid>



            </Card>

        );
    } else if (props.type && props.type == 'mentor') {
        return (
            <Card  sx={{
                width: '100%',
                borderWidth: 2,
                // borderRadius: 2,
                paddingRight: '1em',
                // paddingBottom:'1px',
                borderTop: 'none',
                borderRight: 'none',
                borderLeft: 'none',
                // borderBottom: 'none'
            }} variant="outlined" className={classes.root}>
                <Grid container direction="row" justifyContent="space-between">
                    <Grid item >
                        <CardMedia
                            component="img"
                            height="150"
                            image={data.imageURL}
                            alt="green iguana"
                        />
                    </Grid>
                    <Grid item xs>
                        <CardContent style={{ paddingTop: '1em' }}>
                            <Typography variant="subtitle1" fontSize="1.25rem">
                                {data.name}
                            </Typography>
                            <Typography variant="body1" fontWeight="400" fontSize="1rem">
                                {data.description}
                            </Typography>
                        </CardContent>
                    </Grid>
                    <Grid container item alignItems="center" xs={1} sx={{ marginLeft: '3em' }}>
                        <Grid container alignItems="stretch" direction="column-reverse" justifyContent="space-between">
                            <Grid item>
                                <Button variant="contained" fullWidth onClick={props.onDelete} color="error" sx={{ color: 'white' }}> Delete </Button>
                            </Grid>
                            <Grid item>
                                <Box height="16px" />
                            </Grid>
                            <Grid item>
                                <Button variant="outlined" fullWidth component={Link} to={`/mentor/course/edit/${data.id}`} > Edit </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Card>
        );
    } else
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
                        {data.name}
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