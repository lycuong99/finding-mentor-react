import React, { useEffect, useState } from 'react';
import { Button, Grid, IconButton, Stack, TextField, Typography, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Lecture from './Lecture';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import AddIcon from '@mui/icons-material/Add';

import { styled, makeStyles } from '@mui/styles';
import DeleteDialog from '../../components/dialog/DeleteDialog';
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

const useStyle = makeStyles(() => ({

}));
const Section = (props) => {
    const classes = useStyle();

    const { data, index, onTitleChange, onLecturesChange, editable } = props;
    const [title, setTitle] = useState(data.title);
    const [lectures, setLectures] = useState(data.lectures);
    const [expanded, setExpadned] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const [isHover, setIsHover] = useState(false);

    const [openDeleteLectureDialog, setOpenDeleteLectureDialog] = useState(false);
    const [openDeleteSectionDialog, setOpenDeleteSectionDialog] = useState(false);
    // useEffect(() => {
    //     console.log("UPDAAA");
    //     setLectures(data.lectures);
    // }, [props.data.lectures]);
    const renderDeleteLectureDialog = () => {

        const handleClose = () => {
            setOpenDeleteLectureDialog(false);
        }

        return (
            <DeleteDialog open={openDeleteLectureDialog}
                handleClose={handleClose}
                contentText={`You are about to remove a curriculum item. Are you sure you want to continue?`}
            />
        );
    }

    const renderDeleteSectionDialog = () => {

        const handleClose = () => {
            setOpenDeleteSectionDialog(false);
        }

        return (
            <DeleteDialog open={openDeleteSectionDialog}
                handleClose={handleClose}
                contentText={`You are about to remove a curriculum item. Are you sure you want to continue?`}
            />
        );
    }

    useEffect(() => {
        if (editable) {
            onLecturesChange(lectures);
        }

    }, [lectures]);

    if (editable)
        return (
            <Accordion expanded={expanded}>
                <AccordionSummary
                    expandIcon={editMode ? null : <IconButton disabled={editMode}
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
                                    <Typography fontWeight={600}> {`Section ${index} : `}</Typography>
                                    <TextField value={title} onChange={(e) => { setTitle(e.target.value) }} size="small" />
                                </Grid>
                                <Grid item container justifyContent="end">
                                    <Grid item>
                                        <Button onClick={() => { setEditMode(false) }}>Cancel</Button>
                                        <Button variant="contained" onClick={() => {
                                            onTitleChange(title);
                                            setEditMode(false);
                                        }}>Save</Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        ) : (
                            <Stack direction="row" alignItems="center"
                            >
                                <Typography fontWeight={600}> {`Section ${index} : `}</Typography>
                                <Typography fontSize="1rem">{data.title}</Typography>
                                <><IconButton
                                    sx={{ visibility: isHover ? 'visible' : 'hidden' }}
                                    onClick={() => {
                                        setEditMode(true)

                                    }}><ModeEditOutlineOutlinedIcon /></IconButton>
                                    <IconButton
                                        sx={{ visibility: isHover ? 'visible' : 'hidden' }}
                                        onClick={() => {
                                            setOpenDeleteSectionDialog(true);
                                        }}><DeleteOutlineIcon /></IconButton>
                                </>

                            </Stack>
                        )
                    }

                </AccordionSummary>
                <AccordionDetails>
                    <Grid container direction="column" rowGap={3} sx={{ padding: '2em' }} >
                        {
                            lectures.map((lecture, index) => (
                                <Grid item key={index}>
                                    <Lecture
                                        data={lecture}
                                        index={index + 1}
                                        onDelete={() => {
                                            setOpenDeleteLectureDialog(true);
                                        }}
                                        onLectureChange={(newValue) => {
                                            let newLectures = lectures;
                                            newLectures[index] = newValue;
                                            setLectures(newLectures);
                                        }} />
                                </Grid>
                            ))
                        }
                        <Grid item>
                            <IconButton color="primary" variant="outlined" onClick={() => {
                                let newLectures = [...lectures, {
                                    title: 'New Lecture',
                                    description: ''
                                }];

                                setLectures(newLectures);

                            }}><AddIcon /></IconButton>
                        </Grid>
                    </Grid>
                </AccordionDetails>
                {renderDeleteLectureDialog()}
                {renderDeleteSectionDialog()}
            </Accordion>
        );

    return (
        <Accordion expanded={expanded}>
            <AccordionSummary
                expandIcon={editMode ? null : <IconButton disabled={editMode}
                    onClick={() => { setExpadned(!expanded) }}><ExpandMoreIcon /></IconButton>}
            >
                <Stack direction="row" alignItems="center"
                >
                    <Typography fontWeight={600}> {`Section ${index} : `}</Typography>
                    <Typography fontSize="1rem">{data.title}</Typography>
                </Stack>

            </AccordionSummary>
            <AccordionDetails>
                <Grid container direction="column" rowGap={3} sx={{ padding: '2em' }} >
                    {
                        lectures.map((lecture, index) => (
                            <Grid item key={index}>
                                <Lecture
                                    data={lecture}
                                    index={index + 1}
                                />
                            </Grid>
                        ))
                    }
                </Grid>
            </AccordionDetails>
        </Accordion>
    );

}

export default Section;