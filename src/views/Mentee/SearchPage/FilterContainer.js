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
    Divider
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { COURSE, MENTOR } from '../../../constants/searchType';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { fetchAllMajor, fetchAllSubjectByMajor } from '../../../actions';
import { connect } from 'react-redux';



const FilterContainer = (props) => {
    const { variant } = props;
    const typeSearchList = []


    // ............ 
    const [selectedMajors, setSelectedMajors] = useState([]);
    // const [selectedMajors, setSelectedMajors] = useState([]);

    const handleToggleMajor = (value) => () => {
        // console.log(selectedMajors);
        props.fetchAllSubjectByMajor(value);
        const currentIndex = selectedMajors.indexOf(value);
        const newChecked = [...selectedMajors];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setSelectedMajors(newChecked);
    };

    useEffect(() => {
        props.fetchAllMajor();
    }, []);

    useEffect(() => {
        if (props.subjectMajors) {

        }
    }, [props.subjectMajors])


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
                    <Accordion disableGutters elevation={0}>
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
                                                <ListItemButton dense onClick={handleToggleMajor(major.id)}>
                                                    <ListItemIcon>
                                                        <Checkbox
                                                            edge="start"
                                                            checked={selectedMajors.indexOf(major.id) !== -1}
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
                    <Accordion disableGutters elevation={0}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>Select Subject</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <List>
                                {
                                    props.majors && props.subjectMajors ?
                                        selectedMajors.map((majorId) => {
                                            if (!props.subjectMajors[majorId]) return;
                                            return props.subjectMajors[majorId].map((subject) => ((
                                                <ListItem disablePadding key={subject.id}>
                                                    <ListItemButton dense>
                                                        <ListItemIcon>
                                                            <Checkbox
                                                                edge="start"
                                                                tabIndex={-1}
                                                                disableRipple
                                                            />
                                                        </ListItemIcon>
                                                        <ListItemText primary={`${subject.name}`} />
                                                    </ListItemButton>
                                                </ListItem>
                                            )))
                                        })
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

    // let subjectMajors = state.major.subjectMajors.map(majorSubject => ({majorSubject.}));
    // let 
    return {
        majors: state.major.majors,
        subjectMajors: state.major.subjectMajors
    }
};
export default connect(mapStateToProps, {
    fetchAllMajor, fetchAllSubjectByMajor
})(FilterContainer);