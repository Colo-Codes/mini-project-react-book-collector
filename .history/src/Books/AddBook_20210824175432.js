import { Container } from '@material-ui/core';
import { Avatar } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Button } from "@material-ui/core";

const AddBook = props => {

    return (
        <Container maxWidth="sm">
            <Avatar className={classes.}></Avatar>
            <Typography variant="h6" component="h2">Add a new book to the system</Typography>
            <Button variant="contained" color="primary">Add new book</Button>
        </Container>
    );
}

export default AddBook;