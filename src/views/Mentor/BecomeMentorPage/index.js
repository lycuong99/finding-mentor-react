import { Avatar, Button, Card, Checkbox, Chip, Container, FormControl, FormControlLabel, FormGroup, FormLabel, Grid, Paper, Radio, RadioGroup, Rating, TextField, Typography } from '@mui/material';
import React from 'react';
import MultipleSelectChip from '../../../components/MultipleSelectChip';

const BecomeMentorPage = () => {

    return (
        <Container maxWidth="md" sx={{ minHeight: '100vh', paddingTop: '2em' }}>

            <Paper sx={{ paddingLeft: '2em', paddingRight: '2em', paddingTop: '2em', paddingBottom: '3em', borderRadius: 3, borderWidth: '2px' }} variant="outlined">
                <Typography variant="h1">Apply as a mentor</Typography>

                <Grid container direction="column" rowGap={3} sx={{ marginTop: '2em' }}>
                    <Grid item>
                        <FormControl component="fieldset" fullWidth>
                            <FormLabel component="legend">What is you major ?</FormLabel>
                            <MultipleSelectChip />
                        </FormControl>
                    </Grid>
                    <Grid item>
                        <FormControl component="fieldset" variant="standard" fullWidth>
                            <FormLabel component="legend">What subject you can mentor ?</FormLabel>
                            <MultipleSelectChip />

                        </FormControl>
                    </Grid>
                    <Grid item>
                        <FormControl component="fieldset" fullWidth>
                            <FormLabel component="legend">Have you graduated yet ?</FormLabel>
                            <TextField fullWidth />
                        </FormControl>
                    </Grid>
                    <Grid item>
                        <FormControl component="fieldset" fullWidth>
                            <FormLabel component="legend">What company are you working ?</FormLabel>
                            <TextField fullWidth />
                        </FormControl>
                    </Grid>
                    <Grid item>
                        <FormControl component="fieldset" fullWidth>
                            <FormLabel component="legend">Where are you live</FormLabel>
                            <TextField fullWidth />
                        </FormControl>
                    </Grid>
                    <Grid item>
                        <FormControl component="fieldset" fullWidth>
                            <FormLabel component="legend">Tell us a little bit about yourself. </FormLabel>
                            <TextField fullWidth multiline rows={5} />
                        </FormControl>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    );
}
export default BecomeMentorPage;