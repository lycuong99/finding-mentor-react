import { Avatar, Button, Card, Checkbox, Chip, Container, FormControl, FormControlLabel, FormGroup, FormLabel, Grid, Paper, Radio, RadioGroup, Rating, TextField, Typography } from '@mui/material';
import React from 'react';

const BecomeMentorPage = () => {

    return (
        <Container maxWidth="md" sx={{ minHeight: '100vh' }}>
            <Typography variant="h1">Apply as a mentor</Typography>
            <Paper sx={{ paddingLeft: '2em', paddingRight: '2em', paddingTop: '2em', paddingBottom: '3em', borderRadius: 3, borderWidth:'2px' }} variant="outlined">
                <Grid container direction="column" rowGap={3}>
                    <Grid item>
                        <FormControl component="fieldset">
                            <FormLabel component="legend">What is you major ?</FormLabel>
                            <RadioGroup
                                aria-label="gender"
                                defaultValue="female"
                                name="radio-buttons-group"
                            >
                                <FormControlLabel value="female" control={<Radio />} label="Female" />
                                <FormControlLabel value="male" control={<Radio />} label="Male" />
                                <FormControlLabel value="other" control={<Radio />} label="Other" />
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                    <Grid item>
                        <FormControl component="fieldset" variant="standard">
                            <FormLabel component="legend">What subject you can mentor ?</FormLabel>
                            <FormGroup>
                                <FormControlLabel
                                    control={
                                        <Checkbox name="gilad" />
                                    }
                                    label="Gilad Gray"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox name="jason" />
                                    }
                                    label="Jason Killian"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox name="antoine" />
                                    }
                                    label="Antoine Llorca"
                                />
                            </FormGroup>

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