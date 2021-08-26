import { Container } from '@material-ui/core';
import { Avatar } from '@material-ui/core';
import { Book } from '@material-ui/icons';
import { Typography } from '@material-ui/core';
import { Button } from "@material-ui/core";

const AddBook = props => {

    return (
        <Container maxWidth="sm">
            <Avatar>
                <Book color="primary
            </Avatar>
            <Typography variant="h6" component="h2">Add a new book to the system</Typography>
            <Button variant="contained" color="primary">Add new book</Button>
        </Container>
    );
}

export default AddBook;