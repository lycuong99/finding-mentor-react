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

const SearchSection = (props) => {

    const [keySearch, setKeySearch] = useState("");
    const sortList = [
        {
            id: 0,
            lable: "Default"
        },
        {
            id: 1,
            lable: "Top Reviews"
        },
        {
            id: 2,
            lable: "Total Mentee"
        }
    ];
    const [sortSelected, setSortSelected] = useState(sortList[0]);

    
    return (<Card variant="outlined" sx={{ p: 1, borderWidth: 2, borderRadius: 2 }}>
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
                    <SelectFilter
                        selectList={sortList}
                        keyAttribute="id"
                        prefix="Sort By"
                        lable="lable" selected={sortSelected}
                        onChange={(item) => { setSortSelected(item) }} />
                </Grid>
            </Grid>
        </CardActions>
    </Card>);
}

export default SearchSection;