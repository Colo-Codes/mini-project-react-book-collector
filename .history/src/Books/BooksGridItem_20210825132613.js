import { useState } from 'react';

import { Button, makeStyles, Container, Grid, Card, CardContent, CardActions, Typography, CardHeader, Avatar } from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import { TurnedIn } from '@material-ui/icons';


const useStyles = makeStyles(theme => ({
    root: {
        width: '10rem',
        maxWidth: '10rem',
    },
}));

const BooksGridItem = props => {
    const [raised, setRaised] = useState(false);

    const classes = useStyles();

    const toggleRaised = () => setRaised(!raised)

    const clickHandler = () => {
        props.onDelete(props.id);
    }

    return (
        <Grid item>
            <Card onMouseOver={toggleRaised} onMouseOut={toggleRaised} raised={raised}>
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