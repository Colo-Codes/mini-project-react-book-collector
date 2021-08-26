import { Container, Grid } from '@material-ui/core';
import { useState } from 'react';
import BooksGridItem from './BooksGridItem';

const BooksGrid = props => {
    const [items, updateItems] = useState('');

    // Add an id to use as key
    const id = Math.random().toString();
    props.newBookInfo.id = id;

    // Update the books array
    updateItems(prevBooks => [...items, props.newBookInfo]);

    return (
        <Container>
            <Grid container>
                {items.map(bookItem =>
                    <BooksGridItem key={bookItem.id} title={bookItem.title} author={bookItem.author} />
                )}
            </Grid>
        </Container>
    );
}

export default BooksGrid;