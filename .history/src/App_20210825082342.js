import { useState } from 'react';

import './App.css';

import { Box, Button, makeStyles } from '@material-ui/core';
import { Home } from '@material-ui/icons';

import AddBookForm from './Books/AddBookForm';
import Copyright from './UI/Copyright';
import Header from './UI/Header';

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(10),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  icon: {
    color: 'white',
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
}));

function App() {
  const [showAddBookForm, setShowAddBookForm] = useState(false);

  const classes = useStyles();

  const addNewBookHandler = () => {
    setShowAddBookForm(true);
  }

  return (
    <div className={classes.paper}>

      {showAddBookForm && <AddBookForm />} {/* Conditional Rendering */}
      {!showAddBookForm && <Header headerIcon={<Home className={classes.icon} />} headerContent={'Welcome to BookCollector'} textContent={'Click the button below to add a new book'} />} {/* Conditional Rendering */}
      {!showAddBookForm && <Button variant="contained" color="primary" onClick={addNewBookHandler} mt={4}>Add new book</Button>} {/* Conditional Rendering */}
      <Box mt={8}><Copyright /></Box>
    </div>
  );
}

export default App;
