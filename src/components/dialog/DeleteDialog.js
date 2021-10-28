import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material';

const DeleteDialog = (props) => {
    const { handleClose, onCancel, onConfirm, open, contentText } = props;


    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">{"Please Confirm"}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    {contentText}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => {
                    if (onCancel) onCancel();
                    handleClose();
                }} color="primary">
                    Cancel
                </Button>
                <Button onClick={() => {
                    onConfirm();
                    handleClose();
                }} color="primary" autoFocus>
                    Confirm
                </Button>

            </DialogActions>
        </Dialog>
    );
}

export default DeleteDialog;