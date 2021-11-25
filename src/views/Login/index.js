// import { Container } from '@mui/material';
import { Button, Container, FormControl, FormLabel, Grid, Grow, Paper, TextField, Typography } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import { makeStyles } from '@mui/styles';
import bg from '../../assets/images/loginBg.jpg';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
import { useParams } from 'react-router-dom';
import logo from "../../assets/images/FMLogo.png";
import { reset } from '../../actions/index';
import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";
const containerHeight = '60vh';
const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: containerHeight,
        maxHeight: '80vh',
        paddingLeft: 0,
        borderRadius: 20
    },
    navigation: {
        borderRadius: 20,
        height: '100%',
        width: '100%',
        // width: '60%',
        // position: 'absolute',
        transition: 'all 0.35s ease-in-out',
        // right: 0,
        backgroundImage: `url(${bg})`,
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
    logo: {

    },
    leftContainer: {

    }
}));

function LoginPage(props) {
    const classes = useStyles();
    const formRef = useRef(null);
    const imageRef = useRef(null);
    const [translateImage, setTranslateImage] = useState(0);
    const [translateForm, setTranslateForm] = useState(0);
    const [isSignUp, setIsSignUp] = useState(true);
    const [SignUpAppear, setSignUpAppear] = useState(true);
    let { type } = useParams();
    const [containerDirection, setContainerDirection] = useState("row-reverse");
    const history = useHistory();
    useEffect(() => {
        if (props.authenticated == true) {
            history.push("/mentee");
        } else {
            console.log(type);


            if (type == 'signup') {
                navToSignUp();
            } else if (type == 'signin') {
                setTimeout(() => {
                    navToSignIn();
                }, 300);

            } else {

            }
        }


    }, []);

    useEffect(() => {
        if (props.authenticated == true) {
            history.push("/mentee");
        }
    })

    const navToSignIn = () => {
        console.log(formRef);
        setSignUpAppear(false);
        setIsSignUp(false);

        setTranslateImage(formRef.current.clientWidth);
        setTranslateForm(imageRef.current.clientWidth);
        props.reset();
    }

    const navToSignUp = () => {
        props.reset();
        console.log(formRef);

        setIsSignUp(true);
        setTranslateImage(0);
        setTranslateForm(0);
        setTimeout(() => {
            setSignUpAppear(true);
        }, 300);
    }




    return (
        <div style={{ backgroundColor: '#f2f2f2', width: '100%', height: '100vh', paddingTop: '10em' }}>
            <Container className={classes.root} component={Paper} style={{ borderRadius: 12 }} disableGutters elevation={12}>
                <Grid container direction={containerDirection} style={{ height: "100%", position: 'relative', zIndex: 1000 }}>
                    <Grid item ref={formRef}
                        md={5} sm={7}
                        container
                        direction="column"
                        style={{
                            height: "100%",
                            padding: '2em 2em',
                            // transform: `translateX(${translateForm}px)`,
                            transition: 'all .7s ease-in-out',
                        }} >
                        <Grid item xs={1} className={classes.logo}>
                            <img src={logo} alt="Logo" style={{ height: "3em" }} />
                        </Grid>
                        {/* <Grid item xs> */}
                        <Grow in={SignUpAppear}
                            mountOnEnter
                            unmountOnExit
                            {...(!SignUpAppear ? { timeout: 350 } : {})}
                            style={{
                                transitionDelay: SignUpAppear ? '300ms' : '0ms',
                            }} >
                            <Grid container
                                direction="column"
                            >
                                <Grid item xs={3} style={{}}>
                                    <Grid container direction="column" justifyContent="space-around" style={{ padding: '1em 0px' }}>
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
                                <Grid item xs>
                                    {/* <div style={{ height: '200px', backgroundColor: 'blue' }}
                                    ></div> */}
                                    <SignUpForm />
                                </Grid>
                            </Grid>
                        </Grow>

                        <Grow in={!isSignUp}
                            mountOnEnter
                            unmountOnExit
                            style={{ transitionDelay: !isSignUp ? '500ms' : '0ms', }}
                            {...(isSignUp ? { timeout: { exit: 350 } } : {})}>
                            <Grid container direction="column" alignItems="stretch">
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
                                <Grid item xs>
                                    <LoginForm />
                                </Grid>
                            </Grid>
                        </Grow>
                        {/* </Grid> */}

                    </Grid>
                    <Grid item md={7} sm={5}
                        ref={imageRef}
                        style={{
                            // position: 'absolute',
                            // right: `${translateImage}px`,
                            // transform: `translateX(-${translateImage}px)`,
                            transition: 'all .7s ease-in-out',
                            height: "100%",

                            zIndex: 1001
                        }}>
                        <img src={bg} style={{ height: "100%", maxHeight: '600px', width: '100%', borderRadius: 12 }} />

                    </Grid>
                </Grid>

            </Container >
        </div>

    );
}
const mapStateToProps = (state) => {
    return {
        authenticated: state.auth.authenticated
    }
}
export default connect(mapStateToProps, { reset })(LoginPage);