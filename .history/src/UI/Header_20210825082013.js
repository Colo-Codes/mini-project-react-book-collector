import { Avatar, Typography, makeStyles } from "@material-ui/core";
import { Home } from '@material-ui/icons';

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
    lightGray: {
        color: theme.palette.text.secondary,
    },
}));

const Header = props => {
    const classes = useStyles();

    return (
        <div>
            <Avatar className={classes.avatar}>
                <div className={classes.icon}>{props.headerIcon}</div>
            </Avatar>
            <Typography variant="h4" component="h2">{props.headerContent}</Typography>
            <Typography variant="body1" className={classes.lightGray}>{props.textContent}</Typography>
        </div>
    );
}

export default Header;