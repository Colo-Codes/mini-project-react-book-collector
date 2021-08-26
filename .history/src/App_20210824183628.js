import './App.css';

import { Box } from '@material-ui/core';

import AddBook from './Books/AddBook';
import Copyright from './UI/Copyright';

function App() {
  return (
    <div>
      <AddBook />
      <Box mt={8}><Copyright /></Box>
    </div>
  );
}

export default App;
