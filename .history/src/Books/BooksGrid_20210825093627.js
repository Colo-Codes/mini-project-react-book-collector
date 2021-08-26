import { Container, Grid } from '@material-ui/core';
import BooksGridItem from './BooksGridItem';

const BooksGrid = props => {

    return (
        <Container>
            <Grid container>
                <BooksGridItem title={props.title} author={props.author} />
            </Grid>
        </Container>
    );
}

export default BooksGrid;