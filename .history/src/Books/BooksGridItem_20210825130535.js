import { Button, makeStyles, Container, Grid, Card, CardContent, CardActions, Typography, CardHeader, Avatar } from '@material-ui/core';
import { TurnedIn } from '@material-ui/icons';


const useStyles = makeStyles(theme => ({
    cardHover: {
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(15),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    icon: {
        color: 'white',
        width: theme.spacing(4),
        height: theme.spacing(4),
    },
    button: {
        marginTop: theme.spacing(4),
    },
    grid: {
        marginTop: theme.spacing(4),
    }
}));

const BooksGridItem = props => {

    const clickHandler = () => {
        props.onDelete(props.id);
    }

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