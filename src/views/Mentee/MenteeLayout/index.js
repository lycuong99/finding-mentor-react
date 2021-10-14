import { AppBar, Button, Container, createStyles, Grid, Toolbar, Typography } from '@mui/material';
import { withStyles } from '@mui/styles';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../../assets/images/FMLogo.png";
import CourseCard from '../../../components/CourseCard';
import Header from "../../../components/header";
import banner from '../../../assets/images/banner02.jpg';
import Footer from '../../../components/Footer';
import { Box } from '@mui/system';

const appbarHeight = '5em';
const styles = createStyles((theme) => ({
    // logo: {
    //     height: '3.5em',
    //     [theme.breakpoints.down('md')]: { height: '7em' },
    //     [theme.breakpoints.down('xs')]: { height: '5.5em' },
    // },
    content: {

        minHeight: '100vh'
    },
    appbar: {
        backgroundColor: 'white',
        height: appbarHeight
    },
    banner: {
        backgroundImage: `url(${banner})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    },
    appbarHeight: {
        height: appbarHeight
    }
}))
class MenteeLayout extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const classes = this.props.classes;
        return (
            <div>
                <AppBar position="static" color="inherit" elevation={4} className={classes.appbar}>
                    <Toolbar style={{ padding: 0 }} >
                        <Header />
                    </Toolbar>
                </AppBar>
                {/* <div className={classes.appbarHeight} /> */}
                <Box component="main" sx={{ minHeight: '100vh', bgcolor: '#F1F5F8', paddingY: '3em' }}>
                    {
                        this.props.children
                    }
                </Box>
                <Footer />
            </div>
        )
    }
}

export default withStyles(styles)(MenteeLayout);