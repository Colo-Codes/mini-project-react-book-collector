import './App.css';

import { Box } from '@material-ui/core';
import { Button } from '@material-ui/core';

import AddBookForm from './Books/AddBookForm';
import Copyright from './UI/Copyright';

function App() {
  return (
    <div>
      <AddBookForm />
      <Button>Add new book</Button>
      <Box mt={8}><Copyright /></Box>
    </div>
  );
}

export default App;
