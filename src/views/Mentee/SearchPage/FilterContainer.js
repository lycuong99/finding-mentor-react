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
import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { fetchAllMajor } from '../../../actions';
import { connect } from 'react-redux';


const MENTOR = 'MENTOR';
const COURSE = 'COURSE';

const FilterContainer = (props) => {
    const { variant } = props;
    const typeSearchList = []
    const [typeSearch, setTypeSearch] = useState(MENTOR);

    useEffect(() => {
        props.fetchAllMajor();
    }, []);

    useEffect(() => {

    }, [])


    return (<Card variant={variant} sx={{ paddingBottom: '5em', paddingTop: '0.5em', minHeight: '40em', borderWidth: 2, borderRadius: 2 }}>
        <CardHeader title="Filter By" sx={{ paddingLeft: '1.5em', }} titleTypographyProps={{
            variant: 'h2'
        }} disableTypography={false} />
        <CardActions>
            <Grid container direction="column" >
                <Grid item sx={{ paddingLeft: '1em' }}>
                    <ToggleButtonGroup
                        color="primary"
                        value={typeSearch}
                        onChange={
                            (e, value) => {
                                if (value)
                                    setTypeSearch(value);
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
                                                <ListItemButton dense>
                                                    <ListItemIcon>
                                                        <Checkbox
                                                            edge="start"
                                                            value={major.id}
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
                                <ListItem disablePadding>
                                    <ListItemButton dense>
                                        <ListItemIcon>
                                            <Checkbox
                                                edge="start"
                                                tabIndex={-1}
                                                disableRipple

                                            />
                                        </ListItemIcon>
                                        <ListItemText primary={`Major`} />
                                    </ListItemButton>
                                </ListItem>
                            </List>
                        </AccordionDetails>
                    </Accordion>
                </Grid>

            </Grid>
        </CardActions>
    </Card>);
}
const mapStateToProps = (state) => ({
    majors: state.major.majors
});
export default connect(mapStateToProps, {
    fetchAllMajor
})(FilterContainer);