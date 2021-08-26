import { Container, Grid } from '@material-ui/core';
import { useState } from 'react';
import BooksGridItem from './BooksGridItem';

const BooksGrid = props => {
    const [bookItems, updateBookItems] = useState('');

    // Update the books array
    if (props.newBookInfo)
        updateBookItems(prevBooks => {
            console.log("BOOKS GRID", prevBooks);
            return [...prevBooks, props.newBookInfo]
        });


    return (
        <Container>
            <Grid container>
                {props.newBookInfo.length > 0 && props.newBookInfo.map(bookItem =>
                    <BooksGridItem key={bookItem.id} title={bookItem.title} author={bookItem.author} />
                )}
            </Grid>
        </Container>
    );
}

export default BooksGrid;