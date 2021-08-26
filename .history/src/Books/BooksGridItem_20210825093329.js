const BooksGridItem = props => {

    return (
        <Grid item>
            <Card raised>
                <CardHeader avatar={<Avatar color="secondary"><TurnedIn /></Avatar>}>
                </CardHeader>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Book Title
                    </Typography>
                    <Typography variant="body1">
                        Author
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button variant="outlined" size="small" color="secondary">
                        Delete
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    );
}

export default BooksGridItem;