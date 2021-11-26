import { List, ListItem } from '@mui/material';
import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import CourseCard from '../../../components/CourseCard';

const CourseResults = (props) => {
    return (
        <List >
            {
                _.isEmpty(props.courseResults) ? null :
                    props.courseResults.map((course) =>
                    ((
                        <ListItem key={course.id} sx={{ paddingX: 0 }}>
                            <CourseCard type="detail" data={course} />
                        </ListItem>
                    ))
                    )
            }
        </List>);
}

const mapStateToProps = (state) => ({
    courseResults: state.course.searchResults
});
export default connect(mapStateToProps, {})(CourseResults);