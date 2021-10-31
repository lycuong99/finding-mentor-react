import { List, ListItem } from '@mui/material';
import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import CourseCard from '../../../components/CourseCard';

const CourseResults = (props) => {
    return (
        <List>
            {
                _.isEmpty(props.courseResults) ? null :
                    props.courseResults.map((mentor) =>
                        ((<CourseCard />))
                    )
            }
        </List>);
}

const mapStateToProps = (state) => ({
    courseResults: state.course.searchResults
});
export default connect(mapStateToProps, {})(CourseResults);