import { List, ListItem } from '@mui/material';
import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import MentorCard from '../../../components/MentorCard';

const MentorResults = (props) => {
    return (
        <List>
            {
                _.isEmpty(props.mentorResults) ? null :
                    props.mentorResults.map((mentor) =>
                        ((<MentorCard data={mentor} />))
                    )
            }
        </List>);
}

const mapStateToProps = (state) => ({
    mentorResults: state.mentor.searchResults
});
export default connect(mapStateToProps, {})(MentorResults);