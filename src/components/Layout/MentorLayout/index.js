import React from "react";
import clsx from "clsx";
import { Link, NavLink, useLocation } from "react-router-dom";

// import Logout from "../auth/Logout";
import ProfileSection from "../ProfileSection";
import NavItem from "../MenuList/NavItem";
import NavCollapse from "../MenuList/NavCollapse";
import { GroupOutlined, Menu, FiberManualRecord, EventNoteOutlined, CalendarTodayOutlined } from "@mui/icons-material";
import { AppBar, CssBaseline, Drawer, IconButton, useTheme, List, Typography, Divider, Toolbar, useMediaQuery } from "@mui/material";
import { makeStyles } from "@mui/styles";


const drawerWidth = 260;
const appBarHeight = '5.5em';

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex"
    },
    grow: {
        flexGrow: 1,
    },
    appBar: {
        height: appBarHeight,
        backgroundColor: theme.palette.background.default,
        // boxShadow: '0px 0px 28px 0px rgb(86 61 124 / 13%)',

        // borderBottom: '0.5px'
    },
    appBarWidth: {
        height: appBarHeight,
        transition: theme.transitions.create('width'),
        backgroundColor: theme.palette.background.default,
        // boxShadow: '0px 0px 28px 0px rgb(86 61 124 / 13%)'
    },
    menuButton: {
        color: theme.palette.primary.main,
        marginRight: theme.spacing(2)
    },

    hide: {
        display: "none"
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,

    },
    drawerPaper: {
        top: `${appBarHeight} !important`,
        width: drawerWidth,

        // boxShadow: '0px 0px 28px 0px rgb(86 61 124 / 13%)',
        borderRight: 'none !important',
        paddingLeft: 16,
        paddingRight: 16,


    },
    drawerHeader: {
        display: "flex",
        alignItems: "center",
        padding: theme.spacing(0, 1),

        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: "flex-end",


    },
    content: {
        minHeight: `calc(100vh - ${appBarHeight})`,
        overflow: 'hidden',
        borderRadius: 12,
        marginTop: appBarHeight,
        flexGrow: 1,
        padding: 10,
        backgroundColor: '#F1F5F8',
        padding: theme.spacing(1),
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        marginLeft: -drawerWidth
    },
    contentShift: {
        minHeight: `calc(100vh - ${appBarHeight})`,
        marginTop: appBarHeight,
        flexGrow: 1,
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen
        }),
        marginLeft: 0
    },

    sidebarItem: {
        margin: 8,
        padding: "10px 16px 10px 23px",
        opacity: 0.8,
        display: 'flex',
        alignItems: 'center',
        height: 52,
        borderRadius: 16
    },
    sidebarItemIcon: {
        fontSize: 18,
        marginRight: 8,
        width: 20,
        height: 20,

    },
    sidebarItemText: {
        lineHeight: 16
    },
    menuCaption: {
        ...theme.typography.menuCaption
    },
}));

var webName = "Mentor "
const INIT_DATA = {
    items: [
    ]
};


INIT_DATA.items.push(
    {
        id: 'course',
        title: 'Courses',
        type: 'item',
        url: '/mentor/course',
        icon: <FiberManualRecord fontSize="small" />
    },
    {
        id: 'question',
        title: 'Questions',
        type: 'item',
        url: '/mentor/question',
        icon: <FiberManualRecord fontSize="small" />
    },
    // {
    //     id: 'questions',
    //     title: 'Staff',
    //     type: 'collapse',
    //     url: '/staffs',
    //     icon: <GroupOutlined />,
    //     children: [
    //         {
    //             type: 'item',
    //             id: 'request',
    //             title: 'Request',
    //             url: '/notify/request',
    //             icon: <FiberManualRecord style={{ width: 6, height: 6 }} />,
    //         },
    //         {
    //             type: 'item',
    //             id: 'activity',
    //             title: 'Activity',
    //             url: '/notify/activity',
    //             icon: <FiberManualRecord style={{ width: 6, height: 6 }} />,
    //         }
    //     ]
    // },
    {
        id: 'resourse',
        title: 'Resourse',
        url: 'mentor/resourse',
        type: 'item',
        icon: <EventNoteOutlined />
    },
    {
        id: 'profile',
        title: 'Profile',
        url: 'mentor/profile',
        type: 'item',
        icon: <EventNoteOutlined />
    },
    {
        id: 'timekeeping',
        title: 'Timekeeping',
        url: '/timekeeping',
        type: 'item',
        icon: <CalendarTodayOutlined />
    },
    // {
    //   id: 'profile',
    //   title: 'Profile',
    //   type: 'item',
    //   url: "/profile",
    //   icon: <ProfileIcon />
    // }
)


export default function MainLayout(props) {
    const classes = useStyles();
    const theme = useTheme();
    const [openSideBar, setOpenSideBar] = React.useState(false);
    const matchUpMd = useMediaQuery(theme.breakpoints.up('md'));

    const handleDrawerToggle = () => {
        setOpenSideBar(!openSideBar);
    };

    const handleDrawerClose = () => {
        setOpenSideBar(false);
    };



    const menus = INIT_DATA.items.map((item) => {
        switch (item.type) {
            case 'collapse':
                return (<NavCollapse key={item.id} item={item} level={1} />)
            case 'item':
                return (<NavItem key={item.id} item={item} level={1} />);
            default:
                return (
                    <Typography key={item.id} variant="h6" color="error" align="center">
                        Menu Items Error
                    </Typography>
                );
        }
    });

    return (
        <div className={classes.root}>
            <AppBar
                sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, boxShadow: 'none' }}
                position="fixed"
                elevation={0}
                className={openSideBar ? classes.appBarWidth : classes.appBar}
                color="inherit"
            >
                <Toolbar style={{ height: '100%' }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerToggle}
                        edge="start"
                        className={clsx(classes.menuButton, openSideBar)}
                    >
                        <Menu />
                    </IconButton>
                    <Typography variant="h5" noWrap color="textPrimary" >
                        {webName}
                    </Typography>
                    <div className={classes.grow} />
                    <div>
                        <ProfileSection />
                    </div>
                </Toolbar>
            </AppBar>


            <Drawer
                className={classes.drawer}

                elevation={0}
                variant={matchUpMd ? 'persistent' : 'temporary'}
                anchor="left"
                open={openSideBar}
                ModalProps={{ keepMounted: true }}
                classes={{
                    paper: classes.drawerPaper
                }}
            >
                <List subheader={
                    <Typography variant="h4" className={classes.menuCaption} style={{ marginTop: 20 }} display="block" gutterBottom>
                        Dashboard
                    </Typography>
                }>
                    {menus}
                </List>


                <Divider />
                {/* <Button component={Link} to="/login">Logout</Button> */}
            </Drawer>
            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: openSideBar,
                })}
            >
                {/* <div className={classes.drawerHeader} /> */}
                {props.children}
            </main>

        </div>
    );
}
