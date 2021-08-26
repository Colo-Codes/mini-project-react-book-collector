import { Container, Grid } from '@material-ui/core';
import { useState } from 'react';
import BooksGridItem from './BooksGridItem';

const BooksGrid = props => {
    const [items, setItems] = useState('');

    const id = Math.random().toString();

    setItems(() => {
        {...items, }


return
    };

return (
    <Container>
        <Grid container>
            <BooksGridItem key={id} title={props.newBookInfo.title} author={props.newBookInfo.author} />
            <BooksGridItem key={id} title={props.newBookInfo.title} author={props.newBookInfo.author} />
            <BooksGridItem key={id} title={props.newBookInfo.title} author={props.newBookInfo.author} />
        </Grid>
    </Container>
);
}

export default BooksGrid;