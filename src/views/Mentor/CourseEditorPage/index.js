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

const CourseEditorPage = () => {
    const paddingX = '3em';
    const [selectedItem, setSelectedItem] = useState(0);

    return (
        <Container maxWidth="xl" sx={{ paddingBottom: '2em', }} >
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    {/* Menu
                            -  General
                            -  Curriculum */}
                    <Paper>
                        <Typography variant="h3" sx={{ padding: '1em' }} >Course Information</Typography>
                        <Divider />
                        <List >
                            <ListItemButton selected={selectedItem == 0} onClick={() => {
                                setSelectedItem(0);
                            }}>
                                <ListItemIcon>
                                    <RadioButtonUncheckedOutlinedIcon />
                                </ListItemIcon>
                                <ListItemText primary="General" />
                            </ListItemButton>
                            <ListItemButton selected={selectedItem == 1} onClick={() => {
                                setSelectedItem(1);
                            }}>
                                <ListItemIcon>
                                    <RadioButtonUncheckedOutlinedIcon />
                                </ListItemIcon>
                                <ListItemText primary="Curiculum" />
                            </ListItemButton>
                            <ListItem>
                                <Button>Submit</Button>
                            </ListItem>
                        </List>
                    </Paper>


                </Grid>
                <Grid item xs>
                    <div hidden={selectedItem!== 0}>
                        <General />
                    </div>
                    <div hidden={selectedItem!== 1}>
                        <Curriculum />
                    </div>

                </Grid>
            </Grid>
        </Container>
    );
}

export default CourseEditorPage;