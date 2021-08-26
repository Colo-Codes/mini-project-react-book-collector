import { Container, Grid } from '@material-ui/core';
import { useState } from 'react';
import BooksGridItem from './BooksGridItem';

const BooksGrid = props => {
    const [bookItems, updateBookItems] = useState('');

    // Update the books array
    if (bookItems.length > 0)
        updateBookItems(prevBooks => {
            console.log("BOOKS GRID", bookItems);
            return [...prevBooks, props.newBookInfo]
        });


    return (
        <Container>
            <Grid container>
                {bookItems.length > 0 && bookItems.map(bookItem =>
                    <BooksGridItem key={bookItem.id} title={bookItem.title} author={bookItem.author} />
                )}
            </Grid>
        </Container>
    );
}

export default BooksGrid;