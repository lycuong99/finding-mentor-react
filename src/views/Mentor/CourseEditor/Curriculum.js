import React, { useEffect, useState } from 'react';
import {
    Button, Container, Divider, Grid, Paper, TextField, Typography, List, ListItemButton, ListItemIcon,
    Select, ListItemText, ListItem, FormControl, FormLabel, MenuItem, IconButton
} from '@mui/material';
import { Box } from '@mui/system';
import AddIcon from '@mui/icons-material/Add';

import Section from './Section';
import _ from 'lodash';

const Curriculum = (props) => {
    const [curriculum, setCurriculum] = useState(props.initValues);

    useEffect(() => {
        setCurriculum(props.initValues);
    }, [props.initValues]);

    const handleSubmit = () => {
        console.log(curriculum);
        props.onSubmit(curriculum);
    };


    return (<Box>
        <Paper elevation={2}>
            <Typography variant="h2" sx={{ padding: '1em' }}>Curriculum</Typography>
            <Divider />
            <Grid container direction="column" rowGap={3} sx={{ padding: '2em' }} >
                {
                    curriculum ? curriculum.map((section, index) => (
                        <Grid item key={index}>
                            <Section data={section}
                                index={index + 1}
                                onTitleChange={(newValue) => {
                                    console.log(newValue);
                                    let newCurr = [...curriculum];
                                    newCurr[index].title = newValue;
                                    setCurriculum(newCurr);
                                }}

                                onDelete={
                                    () => {
                                        let newCurr = [...curriculum];
                                        newCurr.splice(index, 1);
                                        // console.log(curriculum);
                                        // console.log(newCurr);
                                        setCurriculum(newCurr);

                                    }
                                }

                                onLecturesChange={(newLectures) => {
                                    let newCurr = [...curriculum];
                                    newCurr[index].lectures = newLectures;
                                    setCurriculum(newCurr);
                                }}
                            />
                        </Grid>
                    )) : 'loading...'
                }
                <Grid item>
                    <IconButton color="primary" variant="outlined" onClick={() => {
                        let newSections = [...curriculum, {
                            title: 'New Section',
                            lectures: []
                        }];
                        setCurriculum(newSections);
                    }}><AddIcon /></IconButton>
                </Grid>
                <Grid item>
                    <Button variant='outlined' onClick={handleSubmit}>Submit</Button>
                </Grid>

            </Grid>
        </Paper>

    </Box>);
}
export default Curriculum;