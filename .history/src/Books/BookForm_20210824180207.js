import { TextField } from "@material-ui/core";

const BookForm = props => {

    return (
        <form>
            <TextField variant="outlined" margin="normal" fullwidth id="book-title" label="Book Title" autoFocus />
            <TextField variant="outlined" margin="normal" fullwidth id="description" label="Short Description" />
        </form>
    );
}

export default BookForm;