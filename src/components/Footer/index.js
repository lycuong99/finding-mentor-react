import { Button, Container, Grid, Typography, } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';
import React from 'react';
import logo from '../../assets/images/FMLogo.png';
import { grey } from '@mui/material/colors';
import { Link } from 'react-router-dom';

const TypographyColor = '#ffffff';
const useStyle = makeStyles(() => ({
    menu: {
        fontWeight: 500
    },
    menuItem: {
        fontWeight: 400,
    },
    link: {
        fontWeight: 400, color: TypographyColor,
        '&:hover': {
            color: grey[700]
        }
    }
}));

const TypographyMenu = styled((props) => {
    return (
        <Typography sx={{ fontWeight: 500, color: TypographyColor }}>
            {props.children}
        </Typography>
    );
})(({ theme }) => ({
}));

const LinkCustom = (props) => {
    const classes = useStyle();

    return (
        <Link style={{ textDecoration: 'none' }} className={classes.link} to='#'>
            {props.children}
        </Link>
    );
};

const MenteeFooter = () => {
    const classes = useStyle();

    return (
        <Box sx={{ backgroundColor: '#1779f2', width: '100%', paddingY: '3.5em' }}>
            <Grid container component={Container} direction="row" columnGap={4}>
                <Grid item container direction="column" style={{ width: 300 }}>
                    <Grid item  >
                        <img src={logo} style={{ width: '100%' }} alt="logo" />
                    </Grid>
                </Grid>
                <Grid item md container direction="column" rowGap={2}>
                    <Grid item>
                        <TypographyMenu variant="h4" className={classes.menu}>
                            PLATFORM
                        </TypographyMenu>
                    </Grid>
                    <Grid item>
                        <LinkCustom variant="h4">
                            Browse Mentors
                        </LinkCustom>
                    </Grid>
                    <Grid item>
                        <LinkCustom variant="h4">
                            Browse Course
                        </LinkCustom>
                    </Grid>
                    <Grid item>
                        <LinkCustom variant="h4">
                            Become a Mentor
                        </LinkCustom>
                    </Grid>
                </Grid>
                <Grid item md container direction="column" rowGap={2}>
                    <Grid item>
                        <TypographyMenu variant="h4" className={classes.menu}>
                            RESOURSE
                        </TypographyMenu>
                    </Grid>
                    <Grid item>
                        <LinkCustom variant="h4" className={classes.menuItem}>
                            Partner Program
                        </LinkCustom>
                    </Grid>
                    <Grid item>
                        <LinkCustom variant="h4" className={classes.menuItem}>
                            Success Stories
                        </LinkCustom>
                    </Grid>
                    <Grid item>
                        <LinkCustom variant="h4">
                            Testimonials
                        </LinkCustom>
                    </Grid>
                </Grid>
                <Grid item md container direction="column" rowGap={2}>
                    <Grid item>
                        <TypographyMenu variant="h4">
                            COMPANY
                        </TypographyMenu>
                    </Grid>
                    <Grid item>
                        <LinkCustom variant="h4">
                            Partner Program
                        </LinkCustom>
                    </Grid>
                    <Grid item>
                        <LinkCustom variant="h4" >
                            Success Stories
                        </LinkCustom>
                    </Grid>
                    <Grid item>
                        <LinkCustom variant="h4" >
                            Testimonials
                        </LinkCustom>
                    </Grid>
                </Grid>
                <Grid item md container direction="column" rowGap={2}>
                    <Grid item>
                        <TypographyMenu variant="h4" >
                            SUPPORT
                        </TypographyMenu>
                    </Grid>
                    <Grid item>
                        <LinkCustom variant="h4" >
                            FAQ
                        </LinkCustom>
                    </Grid>
                </Grid>
            </Grid>
            <Typography sx={{ fontWeight: 400, color: TypographyColor, marginTop: '2em' }} textAlign="center">© 2021
                <Link style={{
                    color: grey[500], fontWeight: 400,
                }} to="/" color='grey'> FindMentor</Link>. All Rights Reserved.</Typography>

        </Box>
    );
}

export default MenteeFooter;