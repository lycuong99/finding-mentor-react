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
import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import SelectFilter from './SelectFilter';
import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MentorCard from '../../../components/MentorCard';
import FilterContainer from './FilterContainer';
import SearchSection from './SearchSection';



const SearchPage = () => {



    // const []

    return (
        <Container sx={{}}>
            <Grid container spacing={3} >
                <Grid item sx={{ width: '20em' }}>
                    <FilterContainer variant="outlined" />
                </Grid>
                <Grid item xs container>
                    <Grid container direction="column">
                        <Grid item height="7em">
                            <SearchSection />
                        </Grid>
                        <Grid item sx={{ paddingY: '1em', paddingX: '1em' }}>
                            <Typography variant="h2">
                                358 Results
                            </Typography>
                        </Grid>

                        <Grid item >
                            <List>
                                <ListItem>
                                    <MentorCard />
                                </ListItem>
                                <ListItem>
                                    <MentorCard />
                                </ListItem>
                                <ListItem>
                                    <MentorCard />
                                </ListItem>
                            </List>
                        </Grid>

                    </Grid>

                </Grid>
            </Grid>
        </Container>
    );
}

export default SearchPage;