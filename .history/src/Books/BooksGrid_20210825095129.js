import { Container, Grid } from '@material-ui/core';
import { useState } from 'react';
import BooksGridItem from './BooksGridItem';

const BooksGrid = props => {

    const [newBook, setNewBook] = useState(false);

    if (props.title && props.author) {
        setNewBook();
    }

    return (
        <Container>
            <Grid container>
                <BooksGridItem title={props.title} author={props.author} />
            </Grid>
        </Container>
    );
}

export default BooksGrid;