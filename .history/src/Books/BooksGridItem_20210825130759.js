import { Button, makeStyles, Container, Grid, Card, CardContent, CardActions, Typography, CardHeader, Avatar } from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import { TurnedIn } from '@material-ui/icons';


const useStyles = makeStyles(theme => ({
    card: {
        color: 'black',
    },
    'card:hover': {
        color: 'red',
    }
}));

const BooksGridItem = props => {
    const classes = useStyles();

    const clickHandler = () => {
        props.onDelete(props.id);
    }

    return (
        <Grid item>
            <Card raised className={classes.card}>
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