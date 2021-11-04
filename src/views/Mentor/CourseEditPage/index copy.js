import {
    Button, Container, Divider, Grid, Paper, TextField, Typography, List, ListItemButton, ListItemIcon,
    Select, ListItemText, ListItem, FormControl, FormLabel, MenuItem
} from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import CourseCard from '../../../components/CourseCard';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import RadioButtonUncheckedOutlinedIcon from '@mui/icons-material/RadioButtonUncheckedOutlined';
import { DesktopDatePicker } from '@mui/lab';
import MultipleSelectChip from '../../../components/MultipleSelectChip';
import Curriculum from './Curriculum';
import General from './General';
import { addCourse } from '../../../database';
import history from '../../../history';
const CourseEditorPage = () => {
    const paddingX = '3em';
    const [selectedItem, setSelectedItem] = useState(0);
    const [course, setCourse] = useState({});

    const handleSubmitGeneralInfo = (values) => {
        console.log(values);
        setCourse(values);
        setSelectedItem(1);
    }

    const handleSubmitCurriculum = (curiculumObj) => {
        let newCourse = { ...course, curriculum: curiculumObj, mentor: { mentorId: '3c5ec754-01b1-49cf-94e0-09250222b061', name: "Ly Van Cuong" } };
        setCourse(newCourse);
        addCourse(newCourse);
        history.replace('/mentor/course');
    }

    return (
        <Container maxWidth="xl" sx={{ paddingBottom: '2em', }} >
            <Grid container spacing={2}>
                <Grid item width="300px">
                    {/* MENU */}
                    <Paper>
                        <Typography variant="h3" sx={{ padding: '1em' }} >Course Information</Typography>
                        <Divider />
                        <List >
                            <ListItemButton selected={selectedItem == 0} onClick={() => {
                                setSelectedItem(0);
                            }}>
                                <ListItemText primary="General" />
                            </ListItemButton>
                            <ListItemButton selected={selectedItem == 1} onClick={() => {
                                setSelectedItem(1);
                            }}>
                                <ListItemText primary="Curiculum" />
                            </ListItemButton>
                            <ListItem>
                                <Button>Submit</Button>
                            </ListItem>
                        </List>
                    </Paper>
                </Grid>
                <Grid item xs>
                    <div hidden={selectedItem !== 0}>
                        <General onSubmit={handleSubmitGeneralInfo} />
                    </div>
                    <div hidden={selectedItem !== 1}>
                        <Curriculum onSubmit={handleSubmitCurriculum} />
                    </div>

                </Grid>
            </Grid>
        </Container>
    );
}

export default CourseEditorPage;