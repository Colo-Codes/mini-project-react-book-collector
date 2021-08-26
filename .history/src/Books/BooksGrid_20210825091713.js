import { Button, makeStyles, Container, Grid, Card, CardContent, CardActions, Typography, CardHeader, Avatar } from '@material-ui/core';

const BooksGrid = props => {

    return (
        <Container>
            <Grid container>
                <Grid item>
                    <Card raised>
                        <CardHeader avatar={<Avatar color="secondary"><TurnedIn /></Avatar>}>
                        </CardHeader>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Book Title
                            </Typography>
                            <Typography variant="body1">
                                A short book description
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button variant="outlined" size="small" color="secondary">
                                Delete
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
}

export default BooksGrid;