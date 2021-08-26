import { Container, Grid } from '@material-ui/core';
import { useState } from 'react';
import BooksGridItem from './BooksGridItem';

const BooksGrid = props => {
    const [bookItems, updateBookItems] = useState({ title: '', author: '' });

    // Add an id to use as key
    const id = Math.random().toString();
    props.newBookInfo.id = id;

    // Update the books array
    updateBookItems(prevBooks => [...bookItems, props.newBookInfo]);

    return (
        <Container>
            <Grid container>
                {bookItems.map(bookItem =>
                    <BooksGridItem key={bookItem.id} title={bookItem.title} author={bookItem.author} />
                )}
            </Grid>
        </Container>
    );
}

export default BooksGrid;