import { Button, Grid, InputAdornment, TextField } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/images/FMLogo01.png";
import { SearchSection } from './SearchSection';
import ProfileSection from '../Layout/ProfileSection';
import { connect } from 'react-redux';

const useStyles = makeStyles((theme) => ({
    logo: {
        height: '2em',
        // [theme.breakpoints.down('md')]: { height: '7em' },
        // [theme.breakpoints.down('xs')]: { height: '5.5em' },
    },
    logoContainer: {
        padding: "1em",
        height: "100%",
        "&:hover": {
            backgroundColor: "transparent"
        }
    }
}));

const Header = (props) => {
    const classes = useStyles();

    return (
        <Grid container alignItems="center" justifyContent="flex-start">
            <Grid item style={{ marginRight: '2em' }}>
                <Link className={classes.logoContainer} to="/mentee"
                ><img className={classes.logo} alt="company logo" src={logo} /></Link>
            </Grid>
            <Grid item xs={4}>
                <SearchSection />
            </Grid>
            <Grid item xs></Grid>
            <Grid item justifySelf="self-end" style={{ marginRight: "2em" }}>
                {props.authenticated ?
                    (
                        <ProfileSection />
                    ) : (
                        <Button component={Link} to="/auth/signin">Login</Button>
                    )}

            </Grid>
        </Grid>
    );
};
const mapStateToProps = (state) => {
    return {
        authenticated: state.auth.authenticated
    }
}
export default connect(mapStateToProps, null)(Header);
