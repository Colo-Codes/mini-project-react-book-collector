import React, { useState } from 'react';

import { Box, Button, Divider, makeStyles } from '@material-ui/core';
import { Home } from '@material-ui/icons';

import AddBookForm from './Books/AddBookForm';
import Copyright from './UI/Copyright';
import Header from './UI/Header';
import BooksGrid from './Books/BooksGrid';

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(5),
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
    marginBottom: theme.spacing(20),

  },
  footer: {
    marginV: theme.spacing(4),
  },
}));

function App() {
  const [showAddBookForm, setShowAddBookForm] = useState(false);
  const [bookList, setBookList] = useState('');

  const classes = useStyles();

  const addNewBookHandler = () => {
    setShowAddBookForm(true);
  }

  const hideFormHandler = () => {
    setShowAddBookForm(false);
  }

  // 'Lifting state up' function
  const newBookHandler = newBook => {
    setBookList(prevBook => [...prevBook, newBook]);
  }

  // 'Lifting state up' function
  const deleteBookHandler = bookId => {
    setBookList(prevBook => prevBook.filter(book => book.id !== bookId));
  }

  return (
    <React.Fragment>
      <header className={classes.paper}>
        {showAddBookForm && <AddBookForm onNewBook={newBookHandler} onHideForm={hideFormHandler} />} {/* Conditional Rendering */}
        {!showAddBookForm && <Header headerIcon={<Home className={classes.icon} />} headerContent={'Welcome to BookCollector'} textContent={'Click the button below to add a new book'} />} {/* Conditional Rendering */}
        {!showAddBookForm && <Button variant="contained" color="primary" onClick={addNewBookHandler} className={classes.button} >Add new book</Button>} {/* Conditional Rendering */}
      </header>
      <main>
        <Divider></Divider>
        <BooksGrid bookList={bookList} onDeleteBook={deleteBookHandler} />
      </main>
      <footer>
        <Box my={8}><Copyright /></Box>
      </footer>
    </React.Fragment>
  );
}

export default App;
