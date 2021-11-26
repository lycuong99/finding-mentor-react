import { Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Paper, Divider, Typography } from '@mui/material';
import _ from 'lodash';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchAllMajor, fetchMenteesInCourse } from '../../../actions';

import { format } from 'date-fns';

const studentList = [
    {
        id: '1',
        name: 'Mentee1',
        avatarURL: '',
        majorId: 'CN',
    },
    {
        id: '2',
        name: 'Mentee2',
        avatarURL: '',
        majorId: 'CN',
    },
    {
        id: '2',
        name: 'Mentee3',
        avatarURL: '',
        majorId: 'CN',
    }
];

const columns = [
    { id: 'fullname', label: 'Name', minWidth: 170, align: 'center' },
    { id: 'majorId', label: 'Major', minWidth: 100, align: 'center' },
    { id: 'startDate', label: 'DateStart', minWidth: 100, align: 'center', type: 'date' },
];

const MenteeList = (props) => {

    useEffect(() => {
        if (_.isEmpty(props.majors)) {
            props.fetchAllMajor();
        }

        props.fetchMenteesInCourse(props.courseId);
    }, []);
    return (
        <Paper>
            <Typography variant="h2" sx={{ padding: '1em' }}>Mentees</Typography>
            <Divider />
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align="center" >
                                #
                            </TableCell>
                            <TableCell align="center" >
                                Name
                            </TableCell>
                            <TableCell align="center" >
                                Major
                            </TableCell>
                            <TableCell align="center" >
                                DateStart
                            </TableCell>
                            <TableCell align="center" >
                                Action
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            !_.isEmpty(props.majors) && props.mentees ? props.mentees.lenght == 0 ? '0 Mentee' :
                                (
                                    props.mentees.map((mentee, index) => ((
                                        <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                                            <TableCell align="center">{index}</TableCell>
                                            {columns.map((column) => {
                                                let value = mentee[column.id];
                                                if (column.id == 'majorId') {
                                                    let tmp = props.majors.find(m => m.id == value);

                                                    value = tmp ? tmp?.name : 'unknown';
                                                }
                                                if (column.type == 'date') {
                                                    value = format(new Date(value), 'dd/MM/yyyy');
                                                }
                                                return (
                                                    <TableCell key={column.id} align={column.align}>
                                                        {value}
                                                    </TableCell>
                                                );
                                            })}
                                            <TableCell align="center">Action</TableCell>
                                        </TableRow>
                                    )))
                                )
                                : '...loading'
                        }
                    </TableBody>
                </Table>
            </TableContainer >
        </Paper>

    );
}
const mapStateToProps = (state) => {
    return {
        majors: state.major.majors,
        mentees: state.course.mentees
    }
};

export default connect(mapStateToProps, { fetchAllMajor, fetchMenteesInCourse })(MenteeList);