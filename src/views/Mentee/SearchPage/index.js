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
const FilterContainer = styled((props) => {
    const { variant } = props;
    return (<Card variant={variant} sx={{ paddingBottom: '5em' }}>
        <CardHeader title="Filter By" sx={{ paddingLeft: '1.5em' }} />
        <CardActions>
            <Grid container direction="column" >
                <Grid item sx={{ paddingLeft: '1em' }}>
                    <ToggleButtonGroup
                        color="primary"
                        value='web'
                        exclusive
                        size="small"
                    >
                        <ToggleButton value="web">Mentor</ToggleButton>
                        <ToggleButton value="android">Course</ToggleButton>
                    </ToggleButtonGroup>
                </Grid>
                <Grid item >
                    <Accordion disableGutters elevation={0}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}

                        >
                            <Typography>Select Major</Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{ padding: 0 }}>
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
                                        <ListItemText primary={`Major A`} />
                                    </ListItemButton >
                                </ListItem>

                                <ListItem disablePadding>
                                    <ListItemButton dense>
                                        <ListItemIcon>
                                            <Checkbox
                                                edge="start"

                                                tabIndex={-1}
                                                disableRipple

                                            />
                                        </ListItemIcon>
                                        <ListItemText primary={`Major B`} />
                                    </ListItemButton>
                                </ListItem>

                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon dense>
                                            <Checkbox
                                                edge="start"

                                                tabIndex={-1}
                                                disableRipple

                                            />
                                        </ListItemIcon>
                                        <ListItemText primary={`Major C`} />
                                    </ListItemButton>
                                </ListItem>
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
})(({ theme }) => ({
    width: '100%'
}));

const SearchPage = () => {

    const [keySearch, setKeySearch] = useState("");

    return (
        <Container sx={{ paddingTop: '2em' }}>
            <Grid container spacing={4} >
                <Grid item xs={3}>
                    <FilterContainer variant="outlined" />
                </Grid>
                <Grid item xs container>
                    <Grid container direction="column">
                        <Grid item height="7em">
                            <Card variant="outlined" sx={{ p: 1 }}>
                                <CardActions>
                                    <Grid container justifyContent="space-between">
                                        <Grid item md={8}>
                                            <TextField variant="outlined"
                                                fullWidth
                                                placeholder="Seach for anything"
                                                value={keySearch}
                                                onChange={(e) => { setKeySearch(e.target.value) }}
                                                InputProps={{
                                                    endAdornment: (
                                                        <InputAdornment position="start">
                                                            <SearchIcon color="primary" />
                                                        </InputAdornment>
                                                    ),
                                                }} />
                                        </Grid>
                                        <Grid item>
                                            <SelectFilter />
                                        </Grid>
                                    </Grid>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item sx={{ paddingY: '1em', paddingX: '1em' }}>
                            <Typography variant="h2">
                                358 Results
                            </Typography>
                        </Grid>

                        <Grid item container direction='column' spacing={2}>
                            <Grid item>
                                <MentorCard />
                            </Grid>
                            <Grid item>
                                <MentorCard />
                            </Grid>
                            <Grid item>
                                <MentorCard />
                            </Grid>

                        </Grid>
                    </Grid>

                </Grid>
            </Grid>
        </Container>
    );
}

export default SearchPage;