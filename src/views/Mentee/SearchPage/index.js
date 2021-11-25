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
import FilterContainer from './FilterContainer';
import MentorResults from './MentorResults';
import SearchSection from './SearchSection';
import { COURSE, MENTOR } from '../../../constants/searchType';
import { connect } from 'react-redux';
import { fetchMentors, fetchCourses } from '../../../actions';
import { propsToClassKey } from '@mui/styles';
import CourseResults from './CourseResults';
const SearchPage = (props) => {


    // const []
    const [keySearch, setKeySearch] = useState("");
    const [deboundpKeySearch, setDeboundKeySearch] = useState("");
    const [searchType, setSearchType] = useState(MENTOR);
    const [selectedMajor, setSelectedMajor] = useState(null);
    const [selectedSubjects, setSelectedSubjects] = useState([]);

    const handleChangeSearchType = (value) => {
        if (searchType != value) {
            setSearchType(value);

        }
    }

    const handleChangeSearchKey = (value) => {
        if (keySearch !== value) {
            setKeySearch(value);
        }
    }

    const handleChangeMajor = (newValue) => {
        setSelectedMajor(newValue);
    }
    const handleChangeSubjects = (newValue) => {
        setSelectedSubjects(newValue);
    }

    useEffect(() => {
        let timeoutId = setTimeout(() => {
            setDeboundKeySearch(keySearch);
        }, 1000);
        return () => {
            clearTimeout(timeoutId);
        }
    },
        [keySearch]);
        
    useEffect(() => {
        switch (searchType) {
            case COURSE: props.fetchCourses(keySearch); return;
            case MENTOR: props.fetchMentors(keySearch); return;
            default:
        }

    },
        [deboundpKeySearch]);


    const onSubmitSearch = () => {
        // props.fetchMentors(searchType);
    }
    return (
        <Container sx={{}}>
            <Grid container spacing={3} >
                <Grid item sx={{ width: '20em' }}>
                    <FilterContainer variant="outlined" searchType={searchType}
                        onChangeSearchType={handleChangeSearchType}
                        onChangeMajor={handleChangeMajor}
                        onChangeSelectedSubjects={handleChangeSubjects} />
                </Grid>
                <Grid item xs container>
                    <Grid container direction="column">
                        <Grid item height="7em">
                            <SearchSection searchKey={keySearch}
                                onChangeSearchKey={handleChangeSearchKey}
                            />
                        </Grid>
                        <Grid item sx={{ paddingY: '1em', paddingX: '1em' }}>
                            <Typography variant="h2">
                                {
                                    searchType == MENTOR ? `${props.countMentorResult} Results` : `${props.countCourseResult} Results`
                                }
                            </Typography>
                        </Grid>

                        <Grid item >
                            {
                                searchType == MENTOR ? (<MentorResults />) : <CourseResults />
                            }
                        </Grid>

                    </Grid>

                </Grid>
            </Grid>
        </Container>
    );
}
const mapStateToProps = (state) => ({
    countMentorResult: state.mentor.searchResults.length,
    countCourseResult: state.course.searchResults.length,
});
export default connect(mapStateToProps, { fetchMentors, fetchCourses })(SearchPage);