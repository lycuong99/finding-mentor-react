import { AppBar, Button, createStyles, Grid, Toolbar, Typography } from '@mui/material';
import { withStyles } from '@mui/styles';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/images/FMLogo.png";
import Header from "../../components/header";
const styles = createStyles((theme) => ({
    logo: {
        height: '3.5em',
        [theme.breakpoints.down('md')]: { height: '7em' },
        [theme.breakpoints.down('xs')]: { height: '5.5em' },

    }
}))
class MenteeHomePage extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        const classes = this.props.classes;
        return (
            <div>
                <AppBar position="fixed" color="transparent" elevation={2}>
                    <Toolbar style={{ padding: 0 }} >
                        <Header />
                    </Toolbar>
                </AppBar>

                <Grid container direction='column'>
                    <Grid item container direction='column'>
                        <Grid item>
                            <Typography variant="h2">Recomend Course</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default withStyles(styles)(MenteeHomePage);