import { TextField } from "@material-ui/core";

const BookForm = props => {

    return (
        <form>
            <TextField variant="outlined" margin="normal" fullwidth id="book-title" label="Book Title" autoFocus placeholder="Eloquent JavaScript" />
            <TextField variant="outlined" margin="normal" fullwidth id="description" label="Short Description" placeholder="Learning JavaScript to master the language of the web" />
        </form>
    );
}

export default BookForm;