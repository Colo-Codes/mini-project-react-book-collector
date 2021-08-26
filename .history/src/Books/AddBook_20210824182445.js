import { Container } from '@material-ui/core';
// import { useTheme } from '@material-ui/styles';
import { makeStyles } from '@material-ui/core';
import { Avatar } from '@material-ui/core';
import { Book } from '@material-ui/icons';
import { Typography } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { Button } from "@material-ui/core";

// Use Dialogs

const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(10),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.info.main,
    },
    icon: {
        color: white,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const AddBook = props => {
    const classes = useStyles();

    return (
        <Container maxWidth="sm">
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <Book className={classes.icon} />
                </Avatar>
                <Typography variant="h6" component="h2">Add a new book to the system</Typography>
                <form>
                    <TextField variant="outlined" margin="normal" fullWidth id="book-title" label="Book Title" placeholder="Eloquent JavaScript" />
                    <TextField variant="outlined" margin="normal" fullWidth id="description" label="Short Description" placeholder="Master the language of the web" />
                    <Button variant="contained" color="primary" fullWidth>Add new book</Button>
                </form>
            </div>
        </Container>
    );
}

export default AddBook;