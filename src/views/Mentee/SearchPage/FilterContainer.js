import {
    Button, Container, Grid, InputAdornment,
    Popover, TextField, Card, CardHeader,
    CardActions, ToggleButtonGroup, ToggleButton, Accordion, AccordionSummary, AccordionDetails,
    Typography,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    Checkbox,
    ListItemText,
    Divider,
    Radio
} from '@mui/material';

import React, { useEffect, useState } from 'react';
import { COURSE, MENTOR } from '../../../constants/searchType';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { fetchAllMajor, fetchAllSubjectByMajor } from '../../../actions';
import { connect } from 'react-redux';


const FilterContainer = (props) => {
    const { variant, selectedMajor, onChangeMajor, selectedSubjects, onChangeSelectedSubjects } = props;
    const typeSearchList = [];



    useEffect(() => {
        props.fetchAllMajor();
    }, []);
    useEffect(() => {
        onChangeSelectedSubjects([]);
    }, [selectedMajor]);

    const handleToggleSubject = (value) => {

        const currentIndex = selectedSubjects.indexOf(value);
        const newChecked = [...selectedSubjects];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        onChangeSelectedSubjects(newChecked);
    }

    const handleToggleMajor = (value) => {
        props.fetchAllSubjectByMajor(value);
        onChangeMajor(value);
        // console.log(value);
    };

    // useEffect(() => {
    //     if (props.subjectMajors) {

    //     }
    // }, [props.subjectMajors])


    return (<Card variant={variant} sx={{ paddingBottom: '5em', paddingTop: '0.5em', minHeight: '40em', borderWidth: 2, borderRadius: 2 }}>
        <CardHeader title="Filter By" sx={{ paddingLeft: '1.5em', }} titleTypographyProps={{
            variant: 'h2'
        }} disableTypography={false} />
        <CardActions>
            <Grid container direction="column" >
                <Grid item sx={{ paddingLeft: '1em' }}>
                    <ToggleButtonGroup
                        color="primary"
                        value={props.searchType}
                        onChange={
                            (e, value) => {
                                if (value)
                                    props.onChangeSearchType(value);
                            }
                        }
                        exclusive
                        size="small"
                    >
                        <ToggleButton value={MENTOR}>MENTOR</ToggleButton>
                        <ToggleButton value={COURSE}>COURSE</ToggleButton>
                    </ToggleButtonGroup>
                </Grid>
                <Grid item >
                    <Accordion disableGutters elevation={0} defaultExpanded>
                        <AccordionSummary
                            sx={{ paddingRight: '5px' }}
                            expandIcon={<ExpandMoreIcon />}

                        >
                            <Typography>Select Major</Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{ padding: 0, paddingRight: '10px' }}>
                            <List sx={{
                                maxHeight: '12em',
                                overflowY: 'scroll',

                            }}>
                                {
                                    props.majors ?
                                        props.majors.map((major) => ((
                                            <ListItem disablePadding key={major.id}>
                                                <ListItemButton dense onClick={() => {
                                                    handleToggleMajor(major.id);
                                                }}>
                                                    <ListItemIcon>
                                                        <Radio
                                                            edge="start"
                                                            checked={selectedMajor == major.id}

                                                            tabIndex={-1}
                                                            disableRipple
                                                        />
                                                    </ListItemIcon>
                                                    <ListItemText primary={`${major.name}`} />
                                                </ListItemButton >
                                            </ListItem>
                                        ))) : null
                                }

                            </List>
                        </AccordionDetails>
                    </Accordion>
                </Grid>

                <Grid item>
                    <Accordion disableGutters elevation={0} defaultExpanded>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            sx={{ paddingRight: '5px' }}
                        >
                            <Typography>Select Subject</Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{ padding: 0, paddingRight: '10px' }}>
                            <List>
                                {
                                    selectedMajor && props.subjectMajors[selectedMajor] && props.majors && props.subjectMajors ?
                                        props.subjectMajors[selectedMajor].map((subject) => ((
                                            <ListItem disablePadding key={subject.id}>
                                                <ListItemButton dense onClick={() => {
                                                    handleToggleSubject(subject.id);
                                                }}>
                                                    <ListItemIcon>
                                                        <Checkbox
                                                            edge="start"
                                                            tabIndex={-1}
                                                            value={subject.id}
                                                            checked={selectedSubjects && selectedSubjects.indexOf(subject.id) !== -1}
                                                            onChange={() => { handleToggleSubject(subject.id); }}
                                                            disableRipple
                                                        />
                                                    </ListItemIcon>
                                                    <ListItemText primary={`${subject.name}`} />
                                                </ListItemButton>
                                            </ListItem>)))
                                        : null
                                }

                            </List>
                        </AccordionDetails>
                    </Accordion>
                </Grid>

            </Grid>
        </CardActions>
    </Card>);
}
const mapStateToProps = (state) => {
    return {
        majors: state.major.majors,
        subjectMajors: state.major.subjectMajors
    }
};
export default connect(mapStateToProps, {
    fetchAllMajor, fetchAllSubjectByMajor
})(FilterContainer);