import { Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Paper } from '@mui/material';
import _ from 'lodash';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchAllMajor } from '../../../actions';
const studentList = [
    {
        id: '1',
        name: 'Ly Van Cuong',
        avatarURL: '',
        majorId: 'CN',
    },
    {
        id: '2',
        name: 'Ly Van Cuong',
        avatarURL: '',
        majorId: 'CN',
    }
];

const columns = [
    { id: 'name', label: 'Name', minWidth: 170, align: 'center' },
    { id: 'majorId', label: 'Major', minWidth: 100, align: 'center' },
];

const MenteeList = (props) => {

    useEffect(() => {
        if (_.isEmpty(props.majors)) {
            props.fetchAllMajor();
        }
    }, []);
    return (
        <Paper>
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
                                Action
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            !_.isEmpty(props.majors) ?
                                studentList.map((mentee, index) => ((
                                    <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                                        <TableCell align="center">{index}</TableCell>
                                        {columns.map((column) => {
                                            let value = mentee[column.id];
                                            if (column.id == 'majorId') {
                                                value = props.majors.find(m => m.id == value).name;
                                            }
                                            return (
                                                <TableCell key={column.id} align={column.align}>
                                                    {value}
                                                </TableCell>
                                            );
                                        })}
                                        <TableCell align="center">Action</TableCell>
                                    </TableRow>
                                ))) : '...loading'
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
    }
};

export default connect(mapStateToProps, { fetchAllMajor })(MenteeList);