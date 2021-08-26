import { useState } from "react";

import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from "@material-ui/core";

const ErrorDialog = props => {
    const [isOpen, setIsOpen] = useState(props.open);
    console.log(props.open);

    const handleClose = () => {
        setIsOpen(false);
    }

    return (
        <Dialog
            open={isOpen}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Let Google help apps determine location. This means sending anonymous location data to
                    Google, even when no apps are running.
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary" autoFocus>
                    Ok, I'll try again
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default ErrorDialog;