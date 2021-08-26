import { Container } from '@material-ui/core';
import { Avatar } from '@material-ui/core';
import { Book } from '@material-ui/icons';
import { Typography } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { Button } from "@material-ui/core";

const AddBook = props => {

    return (
        <Container maxWidth="sm">
            <Avatar>
                <Book color="primary" />
            </Avatar>
            <Typography variant="h6" component="h2">Add a new book to the system</Typography>
            <form>
                <TextField variant="outlined" margin="normal" fullWidth id="book-title" label="Book Title" placeholder="Eloquent JavaScript" />
                <TextField variant="outlined" margin="normal" fullWidth id="description" label="Short Description" placeholder="Master the language of the web" />
                <Button variant="contained" color="primary" minWidth="sm">Add new book</Button>
            </form>
        </Container>
    );
}

export default AddBook;