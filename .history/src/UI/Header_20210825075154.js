import { Avatar, Book, Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(10),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        width: theme.spacing(8),
        height: theme.spacing(8),
        backgroundColor: theme.palette.primary.main,
    },
    icon: {
        color: 'white',
        width: theme.spacing(4),
        height: theme.spacing(4),
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

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