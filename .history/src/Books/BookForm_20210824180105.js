import { TextField } from "@material-ui/core";

const BookForm = props => {

    return (
        <form>
            <TextField variant="outlined" margin="normal" fullwidth id="book-title" label="Book title" autoFocus />;
        </form>
    );
}

export default BookForm;