import { Button, makeStyles, Container, Grid, Card, CardContent, CardActions, Typography, CardHeader, Avatar } from '@material-ui/core';
import { TurnedIn } from '@material-ui/icons';

const BooksGridItem = props => {

    const clickHandler = () => {
        console.log('2--', props.id);
        props.onDelete(props.id);
    }
    console.log('1--', props.id);

    return (
        <Grid item>
            <Card raised>
                <CardHeader avatar={<Avatar color="secondary"><TurnedIn /></Avatar>}>
                </CardHeader>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.title}
                    </Typography>
                    <Typography variant="body1">
                        {props.author}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button variant="outlined" size="small" color="secondary" onClick={clickHandler}>
                        Delete
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    );
}

export default BooksGridItem;