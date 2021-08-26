import { Button, makeStyles, Container, Grid, Card, CardContent, CardActions, Typography, CardHeader, Avatar } from '@material-ui/core';
import { TurnedIn } from '@material-ui/icons';

const BooksGrid = props => {

    return (
        <Container>
            <Grid container>
                <BooksGridItem />
            </Grid>
        </Container>
    );
}

export default BooksGrid;