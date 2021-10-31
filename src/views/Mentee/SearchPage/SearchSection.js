import {
    Button, Container, Grid, InputAdornment,
    Popover, TextField, Card, CardHeader,
    CardActions, ToggleButtonGroup, ToggleButton, Accordion, AccordionSummary, AccordionDetails,
} from '@mui/material';
import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import SelectFilter from './SelectFilter';
import { connect } from 'react-redux';
import { fetchMentors } from '../../../actions';

const SearchSection = (props) => {

    const { searchKey, onChangeSearchKey, onSubmitSearch } = props;;

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
                        value={searchKey}
                        onChange={(e) => { onChangeSearchKey(e.target.value) }}
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

export default connect()(SearchSection);