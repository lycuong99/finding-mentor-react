// import { Container } from '@mui/material';
import { Button, Container, FormControl, FormLabel, Grid, Grow, Paper, TextField, Typography } from '@mui/material';
import React, { useRef, useState } from 'react';
import { makeStyles } from '@mui/styles';
import bg from '../../assets/images/loginBg.jpg';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
const containerHeight = '70vh';
const useStyles = makeStyles((theme) => ({
    mainContainer: {
        height: containerHeight,
        paddingLeft: 0
    },
    navigation: {
        borderRadius: 28,
        height: '100%',
        // width: '60%',
        // position: 'absolute',
        transition: 'all 0.35s ease-in-out',
        // right: 0,
        backgroundImage: `url(${bg})`,
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    }
}));

export default function LoginPage(props) {
    const classes = useStyles();
    const formRef = useRef(null);
    const imageRef = useRef(null);
    const [translateImage, setTranslateImage] = useState(0);
    const [translateForm, setTranslateForm] = useState(0);
    const [isSignUp, setIsSignUp] = useState(true);
    const [SignUpAppear, setSignUpAppear] = useState(true);
    const navToSignIn = () => {
        console.log(formRef);
        setIsSignUp(false);
        setSignUpAppear(false);
        setTranslateImage(formRef.current.clientWidth);
        setTranslateForm(imageRef.current.clientWidth);
    }

    const navToSignUp = () => {
        console.log(formRef);
        setIsSignUp(true);
        setTranslateImage(0);
        setTranslateForm(0);
        setTimeout(() => {
            setSignUpAppear(true);
        }, 250);
    }

    return (
        <div style={{ backgroundColor: '#fabafa', width: '100%', height: '100vh', paddingTop: '10em' }}>
            <Container className={classes.mainContainer} component={Paper} disableGutters elevation={2}>
                <Grid container style={{ height: "100%", position: 'relative', zIndex: 1000 }}>
                    <Grid item ref={formRef} md={5}
                        style={{ padding: "2em 3em", height: "100%", transform: `translateX(${translateForm}px)`, transition: 'all 1s ease-in-out', }} >
                        <Grow in={SignUpAppear}

                            mountOnEnter
                            unmountOnExit
                            {...(!isSignUp ? { timeout: 500 } : {})}
                            style={{
                                transitionDelay: isSignUp ? '400ms' : '0ms',
                                overflow: 'hidden',

                            }} >
                            <Grid container
                                direction="column"
                                style={{ height: '100%' }}
                                justifyContent="space-between">
                                <Grid item container xs={3} style={{}}>
                                    <Grid item container direction="column" justifyContent="space-around" style={{ padding: '1em 0' }}>
                                        <Typography variant="h3" style={{ transition: 'all 0.35s ease-in-out' }}>Register now</Typography>
                                        <Typography variant="h1">
                                            Sign up for free.
                                        </Typography>
                                        <Typography variant="h3"> {`Already have an acount? `}
                                            <Button style={{
                                                padding: 0,
                                                fontWeight: 400,
                                                textTransform: 'none',
                                                fontSize: '1.25rem'
                                            }} href="#" disableRipple={true}
                                                disableFocusRipple={true}
                                                disableFocusRipple={true}
                                                variant="text"
                                                onClick={navToSignIn}>
                                                {` Sign in.`}</Button></Typography>
                                    </Grid>
                                </Grid>
                                <Grid item xs={8}>
                                    <SignUpForm />
                                </Grid>
                            </Grid>
                        </Grow>
                        <Grow in={!isSignUp}
                            mountOnEnter
                            unmountOnExit
                            style={{ transitionDelay: !isSignUp ? '500ms' : '0ms', }}
                            {...(isSignUp ? { timeout: { exit: 400 } } : {})}>
                            <Grid container direction="column" style={{ height: '100%' }}>
                                <Grid item container xs={3} style={{}}>
                                    <Grid item container direction="column" justifyContent="space-around" style={{ padding: '1em 0' }}>
                                        <Typography variant="h3">Start your journey</Typography>
                                        <Typography variant="h1">
                                            Sign in.
                                        </Typography>
                                        <Typography variant="h3">{`Don't have an acount? `}
                                            <Button style={{
                                                padding: 0,
                                                fontWeight: 400,
                                                textTransform: 'none',
                                                fontSize: '1.25rem'
                                            }} href="#" disableRipple={true}
                                                disableFocusRipple={true}
                                                disableFocusRipple={true}
                                                variant="text"
                                                onClick={navToSignUp}>
                                                {` Sign up.`}</Button></Typography>
                                    </Grid>
                                </Grid>
                                <Grid item xs={4}>
                                    <LoginForm />
                                </Grid>
                            </Grid>
                        </Grow>
                    </Grid>
                    <Grid item xs={7} ref={imageRef} style={{
                        transform: `translateX(-${translateImage}px)`,
                        transition: 'all .7s ease-in-out',
                        height: "100%",
                        zIndex: 1001
                    }}>
                        <div className={classes.navigation}>
                            {/* <img src={bg} style={{ height: "100%", width: '100%' }} /> */}
                        </div>

                    </Grid>
                </Grid>

            </Container >
        </div>

    );
}