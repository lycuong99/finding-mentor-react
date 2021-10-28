
import { Avatar, Button, Card, Checkbox, Chip, Container, FormControl, FormControlLabel, FormGroup, FormLabel, Grid, MenuItem, Paper, Radio, RadioGroup, Rating, Select, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import MultipleSelectChip from '../../components/MultipleSelectChip';
import { fetchAllMajor } from '../../actions/major.action';
import { CheckBox } from '@mui/icons-material';
import history from '../../history';
import _ from 'lodash';
import { updateMajor } from '../../services';
const AdditionalInformationAfterSignUp = (props) => {

    const [selectedMajor, setSelectedMajor] = useState(null);
    useEffect(() => {
        props.fetchAllMajor();
    }, []
    );

    useEffect(() => {
        if (!_.isEmpty(props.majors)) {
            setSelectedMajor(props.majors[0].id)
        }
    }, [props.majors]
    );

    return (
        <Container maxWidth="md" sx={{ minHeight: '100vh', paddingTop: '2em' }}>

            <Paper sx={{ paddingLeft: '2em', paddingRight: '2em', paddingTop: '2em', paddingBottom: '3em', borderRadius: 3, borderWidth: '2px' }} variant="outlined">
                <Typography variant="h1">Additional Information</Typography>

                <Grid container direction="column" rowGap={3} sx={{ marginTop: '2em' }}>
                    <Grid item>
                        <FormControl component="fieldset" fullWidth>
                            <FormLabel component="legend">What is your major ?</FormLabel>
                            <Select value={selectedMajor} onChange={(e) => { setSelectedMajor(e.target.value) }}>
                                {props.majors ? props.majors.map(major => (
                                    <MenuItem value={major.id}>{major.name}</MenuItem>
                                )) : null}
                            </Select>
                        </FormControl>
                    </Grid>




                    <Grid item>
                        <Button disabled={selectedMajor === null} variant="contained" onClick={() => {
                            updateMajor(selectedMajor);
                            history.push('/mentee/');
                        }}>Submit</Button>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    );
}
const mapStateToProps = (state) => ({
    majors: state.major.majors
});

export default connect(mapStateToProps, {
    fetchAllMajor
})(AdditionalInformationAfterSignUp);