import { useState, forwardRef } from "react";

import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button, Slide } from "@material-ui/core";

// Dialog transition
const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const ErrorDialog = props => {
    const [isOpen, setIsOpen] = useState(props.open);
    console.log('1--', props.open);
    console.log('2--', isOpen);

    const handleClose = () => {
        setIsOpen(false);
    }

    return (
        <Dialog
            open={isOpen}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">{"Input fields cannot be empty"}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Please, fill up the 'Book Title' and 'Author' fields so the book can be added into the list. Please, try again.
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