
const HomeHeader = props => {
    return (
        <div>

            <Avatar className={classes.avatar}>
                <Book className={classes.icon} />
            </Avatar>
            <Typography variant="h5" component="h2">Add a new book to the system</Typography>
        </div>
    );
}

export default HomeHeader;