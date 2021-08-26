import { Container, Grid } from '@material-ui/core';
import { useState } from 'react';
import BooksGridItem from './BooksGridItem';

const BooksGrid = props => {
    const [bookItems, updateBookItems] = useState('');

    // Update the books array
    if (bookItems.length > 0)
        updateBookItems(prevBooks => [...bookItems, props.newBookInfo]);

    console.log(bookItems);

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