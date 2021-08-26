import { Container, Grid } from '@material-ui/core';
import { useState } from 'react';
import BooksGridItem from './BooksGridItem';

const BooksGrid = props => {

    return (
        <Container>
            <Grid container spacing={2} direction="row"
                justifyContent="center"
                alignItems="center">
                {props.bookList.length > 0 && props.bookList.map(bookItem =>
                    <BooksGridItem key={bookItem.id} id={bookItem.id} title={bookItem.title} author={bookItem.author} onDelete={props.onDeleteBook} />
                )}
            </Grid>
        </Container>
    );
}

export default BooksGrid;