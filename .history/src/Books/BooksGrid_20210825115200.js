import { Container, Grid } from '@material-ui/core';
import { useState } from 'react';
import BooksGridItem from './BooksGridItem';

const BooksGrid = props => {
    const [bookItems, updateBookItems] = useState({ title: '', author: '', id: '' }, { title: '', author: '', id: '' });

    // Update the books array
    updateBookItems(prevBooks => [...bookItems, props.newBookInfo]);
    console.log(bookItems);
    return (
        <Container>
            <Grid container>
                {/* {bookItems.map(bookItem => */}
                {/* <BooksGridItem key={bookItem.id} title={bookItem.title} author={bookItem.author} /> */}
                <BooksGridItem key={props.newBookInfo.id} title={props.newBookInfo.title} author={props.newBookInfo.author} />
                {/* )} */}
            </Grid>
        </Container>
    );
}

export default BooksGrid;