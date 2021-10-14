import { Grid, Typography } from '@mui/material';
import React from 'react';

const SectionContainer = (props) => {
    return (
        <Grid container sx={{ marginTop: '1em' }}>
            <Grid item sx={{ marginBottom: '1em' }}>
                <Typography variant="h2">{props.title}</Typography>
            </Grid>
            <Grid item>
                {props.children}
            </Grid>
        </Grid>
    )
}

export default SectionContainer;