import { Container } from '@material-ui/core';
import { Button } from "@material-ui/core";

const AddBook = props => {

    return (
        <Container maxWidth="sm">
            <Button variant="contained" color="primary">Add new book</Button>
        </Container>
    );
}

export default AddBook;