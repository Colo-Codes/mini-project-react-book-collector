import { Container, makeStyles, Avatar, Typography, TextField, Button } from '@material-ui/core';
import { Book } from '@material-ui/icons';
import React from 'react';
import Header from '../UI/Header';

// Use Dialogs

const useStyles = makeStyles(theme => ({
    paper: {
        // marginTop: theme.spacing(10),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    icon: {
        color: 'white',
        width: theme.spacing(4),
        height: theme.spacing(4),
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const AddBookForm = props => {
    const classes = useStyles();

    return (
        <React.Fragment>

            <Container maxWidth="xs">
                <div className={classes.paper}>
                    <Header headerIcon={<Book />} headerContent={'Add a new book'} textContent={'Write the title and description below'} />
                    <form className={classes.form}>
                        <TextField variant="outlined" margin="normal" fullWidth id="book-title" label="Book Title" placeholder="Eloquent JavaScript" />
                        <TextField variant="outlined" margin="normal" fullWidth id="description" label="Short Description" placeholder="Master the language of the web" />
                        <Button className={classes.submit} variant="contained" color="primary" type="submit" fullWidth>Add new book</Button>
                    </form>
                </div>
            </Container>
            <Container>

            </Container>
        </React.Fragment>
    );
}

export default AddBookForm;