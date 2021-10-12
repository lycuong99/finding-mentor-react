import { IconButton, Toolbar, useMediaQuery } from '@mui/material';
import React, { useState } from 'react';

import Header from '../../../components/header';

import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import { makeStyles, styled, useTheme } from '@mui/styles';
import { drawerWidth } from '../../../constants';
import MenuIcon from '@mui/icons-material/Menu';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Box } from '@mui/system';
const useStyle = makeStyles((theme) => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,

    },
    drawerPaper: {
        width: drawerWidth,
        // top: appBarHeight,
        zIndex: 0,
        boxShadow: '0px 0px 28px 0px rgb(86 61 124 / 13%)',
        border: 'none',
        paddingLeft: 16,
        paddingRight: 16
    },
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(9)} + 1px)`,
    },
});

const MentorLayout = () => {
    const classes = useStyle();
    const theme = useTheme();
    const matchesUpMD = useMediaQuery(theme.breakpoints.up('md'));

    const [drawerOpen, setDrawerOpen] = useState(true);
    const drawerToggle = () => {
        setDrawerOpen(!drawerOpen);
    }
    return (
        <div style={{ display: 'flex' }}>
            {/* <AppBar position="static"
                open={drawerOpen}
                color="inherit" elevation={2} className={classes.appbar}>
                <Toolbar style={{ padding: 0 }} >
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={drawerToggle}
                        edge="start"
                        sx={{
                            marginRight: '36px',
                            ...(drawerOpen && { display: 'none' }),
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Header />
                </Toolbar>
            </AppBar> */}
            <Drawer
                // container={container}
                classes={{
                    paper: classes.drawerPaper
                }}
                variant="permanent"
                open={drawerOpen}
                onClose={drawerToggle}
                ModalProps={{ keepMounted: true }}
                color="inherit">
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={drawerToggle}
                    edge="start"
                // className={clsx(classes.menuButton, openSideBar)}
                >
                    <MenuIcon />
                </IconButton>
                <List>
                    {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1 }}>
                Halo
            </Box>
        </div>

    )
}

export default MentorLayout;