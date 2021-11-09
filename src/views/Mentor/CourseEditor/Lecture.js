import React, { useEffect, useState } from 'react';
import { Button, Grid, IconButton, Stack, TextField, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import _ from 'lodash';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { styled, makeStyles } from '@mui/styles';

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary

        {...props}
    />
))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, .05)'
            : 'rgba(0, 0, 0, .03)',
    // flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

const useStyle = makeStyles((theme) => ({
    description: {
        paddingTop: '5px',
        paddingBottom: '7px',
        border: `1px solid transparent`,
        boxSizing: 'border-box',
        '&:hover': {
            border: `1px solid ${theme.palette.divider}`,
            cursor: 'pointer'
        }
    }
}));

const Lecture = (props) => {
    const classes = useStyle();
    const { data, index, onLectureChange, onDelete } = props;
    const [title, setTitle] = useState(data.title);
    const [description, setDescription] = useState(data.description);
    const [expanded, setExpadned] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const [isHover, setIsHover] = useState(false);
    const [editDescription, setEditDesciption] = useState(false);

    useEffect(() => {
        onLectureChange({
            title, description
        })
    }, [title, description]);
    return (
        <Accordion expanded={expanded}>
            <AccordionSummary
                expandIcon={editMode ? null :
                    <IconButton disabled={editMode}
                        onClick={() => { setExpadned(!expanded) }}><ExpandMoreIcon /></IconButton>}
                onMouseOver={() => {
                    setIsHover(true);
                }}
                onMouseOut={() => {
                    setIsHover(false);
                }}>

                {
                    editMode ? (
                        <Grid container direction="column">
                            <Grid item container alignItems="center" gap={1}>
                                <Typography fontWeight={600}> {`Lecture ${index} : `}</Typography>
                                <TextField value={title} onChange={(e) => { setTitle(e.target.value) }} size="small" />
                            </Grid>
                            <Grid item container justifyContent="end">
                                <Grid item>
                                    <Button onClick={() => { setEditMode(false) }}>Cancel</Button>
                                    <Button variant="contained" onClick={() => {
                                        setEditMode(false);
                                    }}>Save</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    ) : (
                        <Stack direction="row" alignItems="center"
                        >
                            <Typography fontWeight={600}> {`Lecture ${index} : `}</Typography>
                            <Typography fontSize="1rem">{data.title}</Typography>
                            <><IconButton
                                sx={{ visibility: isHover ? 'visible' : 'hidden' }}
                                onClick={() => {
                                    setEditMode(true)

                                }}><ModeEditOutlineOutlinedIcon /></IconButton>
                                <IconButton
                                    sx={{ visibility: isHover ? 'visible' : 'hidden' }}
                                    onClick={() => {
                                        onDelete();
                                    }}><DeleteOutlineIcon /></IconButton>
                            </>

                        </Stack>
                    )
                }

            </AccordionSummary>
            <AccordionDetails>
                <Grid container direction="column" rowGap={3} sx={{ padding: '2em' }} >
                    {editDescription ? (
                        <Grid item container direction="column">
                            <Grid item>
                                <Typography fontWeight={600}> {`Lecture Desciption: `}</Typography>

                            </Grid>
                            <Grid item >
                                <TextField fullWidth multiline rows={3}
                                    value={description} onChange={(e) => { setDescription(e.target.value) }} size="small" />
                            </Grid>
                            <Grid item container justifyContent="end">
                                <Grid item>
                                    <Button onClick={() => { setEditDesciption(false) }}>Cancel</Button>
                                    <Button variant="contained" onClick={() => {
                                        setEditDesciption(false);
                                    }}>Save</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    ) : _.isEmpty(description) ?
                        (<Button variant="outlined" onClick={() => { setEditDesciption(true) }}>Add Desciption</Button>)
                        : (<div className={classes.description} onClick={() => { setEditDesciption(true) }}>{description}</div>)}


                </Grid>
            </AccordionDetails>
        </Accordion>
    );
}

export default Lecture;