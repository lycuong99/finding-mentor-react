import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Grid, TextField, FormControl, FormLabel } from '@mui/material';
import { useFormik } from 'formik';

const AskQuestionDialog = (props) => {
    const { handleClose, onCancel, onSubmit, open, contentText } = props;

    const formik = useFormik({
        initialValues: {
            title: '',
            content: ''
        },
        onSubmit: (values) => {
            console.log(values);
            onSubmit(values);
            formik.resetForm();
            handleClose();

        },
        validate: (values) => {
            const errors = {};
        }
    });

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            component='form'
            onSubmit={formik.handleSubmit}
            maxWidth="md"
        >
            <DialogTitle id="alert-dialog-title">{"Question Editor"}</DialogTitle>
            <DialogContent sx={{ minWidth: '800px' }}>
                <DialogContentText id="alert-dialog-description">
                    New Question
                </DialogContentText>
                <Grid container
                    direction="column" rowGap={3} sx={{ marginTop: '2em' }}
                    justifyContent="space-between" >
                    <Grid item>
                        <FormControl component="fieldset" fullWidth>
                            <FormLabel component="legend">Title</FormLabel>
                            <TextField fullWidth
                                name='title'
                                value={formik.values.title}
                                onChange={(e) => {
                                    formik.handleChange(e);
                                }} />
                        </FormControl>

                    </Grid>

                    <Grid item>
                        <FormControl component="fieldset" fullWidth>
                            <FormLabel component="legend">Content</FormLabel>
                            <TextField fullWidth
                                name='content'
                                multiline
                                rows={4}
                                value={formik.values.content}
                                onChange={(e) => {
                                    formik.handleChange(e);
                                }} />
                        </FormControl>

                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => {
                    if (onCancel) onCancel();
                    handleClose();
                }} color="primary">
                    Cancel
                </Button>
                <Button type="submit" color="primary" autoFocus>
                    Submit
                </Button>

            </DialogActions>

        </Dialog>
    );
}

export default AskQuestionDialog;