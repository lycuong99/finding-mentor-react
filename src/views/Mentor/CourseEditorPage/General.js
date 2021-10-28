import React from 'react';
import {
    Button, Container, Divider, Grid, Paper, TextField, Typography, List, ListItemButton, ListItemIcon,
    Select, ListItemText, ListItem, FormControl, FormLabel, MenuItem
} from '@mui/material';
import { Box } from '@mui/system';

import CourseCard from '../../../components/CourseCard';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import RadioButtonUncheckedOutlinedIcon from '@mui/icons-material/RadioButtonUncheckedOutlined';
import { DesktopDatePicker } from '@mui/lab';
import MultipleSelectChip from '../../../components/MultipleSelectChip';

const General = () => {

    return (<Box>
        <Paper elevation={2}>
            <Typography variant="h2" sx={{ padding: '1em' }}>General</Typography>
            <Divider />
            <Grid container direction="column" rowGap={3} sx={{ padding: '2em' }} >
                <Grid item>
                    <FormControl component="fieldset" fullWidth>
                        <FormLabel component="legend">Course title</FormLabel>
                        <TextField fullWidth />
                    </FormControl>
                </Grid>

                <Grid item>
                    <FormControl component="fieldset" fullWidth>
                        <FormLabel component="legend">Course Description</FormLabel>
                        <TextField fullWidth multiline rows={5} />
                    </FormControl>
                </Grid>

                <Grid item>
                    <FormControl component="fieldset" fullWidth>
                        <FormLabel component="legend">Course Image</FormLabel>
                        <TextField fullWidth type="file" />
                    </FormControl>
                </Grid>
                <Grid item container spacing={4} >
                    <Grid item xs={6}>
                        <FormControl component="fieldset" fullWidth>
                            <FormLabel component="legend">What is you major ?</FormLabel>
                            <MultipleSelectChip />
                        </FormControl>
                    </Grid>
                    <Grid item xs>
                        <FormControl component="fieldset" variant="standard" fullWidth>
                            <FormLabel component="legend">What subject you can mentor ?</FormLabel>
                            <MultipleSelectChip />

                        </FormControl>
                    </Grid>
                </Grid>
                <Grid item>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Price</FormLabel>
                        <Select label="Select Price" value={0}>
                            <MenuItem value={0}>Free</MenuItem>
                            <MenuItem>5</MenuItem>
                            <MenuItem>10</MenuItem>
                            <MenuItem>15</MenuItem>
                            <MenuItem>20</MenuItem>
                            <MenuItem>25</MenuItem>
                            <MenuItem>30</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item container spacing={4} >
                    <Grid item xs={6}>
                        <FormControl component="fieldset" fullWidth>
                            <FormLabel component="legend">Start Date</FormLabel>
                            <DesktopDatePicker inputFormat="MM/dd/yyyy" renderInput={(params) => <TextField {...params} />}
                            />
                        </FormControl>
                    </Grid>
                    <Grid item>
                        <FormControl component="fieldset" fullWidth>
                            <FormLabel component="legend">Duration</FormLabel>
                            <Grid container>
                                <Grid item>
                                    <FormControl component="fieldset" fullWidth>
                                        <TextField fullWidth type="number" />
                                    </FormControl>
                                </Grid>
                                <Grid item>
                                    <FormControl component="fieldset" fullWidth>
                                        <FormLabel component="legend"></FormLabel>
                                        <Select value={0}>
                                            <MenuItem value={0}>Day</MenuItem>
                                            <MenuItem value={1}>Week</MenuItem>
                                            <MenuItem value={2}>Month</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                            </Grid>
                        </FormControl>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>

        {/* Course 
                Title
                Course Description
                Price
                Subject
                Course Image
                Duration
                Status
                Start Date
        
                Section
                    title
                    Lecture
                        title
                        Content


             */}
    </Box>);
}
export default General;