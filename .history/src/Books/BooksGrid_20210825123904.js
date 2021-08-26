import { Container, Grid } from '@material-ui/core';
import { useState } from 'react';
import BooksGridItem from './BooksGridItem';

const BooksGrid = props => {

    return (
        <Container>
            <Grid container>
                {updatedBookList.length > 0 && updatedBookList.map(bookItem =>
                    <BooksGridItem key={bookItem.id} title={bookItem.title} author={bookItem.author} onDelete={deleteHandler} />
                )}
            </Grid>
        </Container>
    );
}

export default BooksGrid;