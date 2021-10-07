import { Grid } from '@mui/material';
import React from 'react';
import { connect } from 'react-redux';
import {fetchUser} from '../../actions';

class ManageUserPage extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        console.log('render mup');
        return (
            <div>
              {/* <DataGrid rows={rows} columns={columns}  pageSize={5} rowsPerPageOptions={[5]} checkboxSelection /> */}

            </div>
        );
    }
}

export default connect(

)(ManageUserPage);