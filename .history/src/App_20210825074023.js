import { useState } from 'react';

import './App.css';

import { Box } from '@material-ui/core';
import { Button } from '@material-ui/core';

import AddBookForm from './Books/AddBookForm';
import Copyright from './UI/Copyright';

function App() {
  const [showAddBookForm, setShowAddBookForm] = useState(false);

  const addNewBookHandler = () => {
    setShowAddBookForm(true);
  }

  return (
    <div>
      {showAddBookForm && <AddBookForm />}
      <Button onClick={addNewBookHandler}>Add new book</Button>
      <Box mt={8}><Copyright /></Box>
    </div>
  );
}

export default App;
