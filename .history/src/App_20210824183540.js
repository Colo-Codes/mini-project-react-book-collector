import './App.css';

import { Box } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Link } from '@material-ui/core';

import AddBook from './Books/AddBook';



function App() {
  return (
    <div>
      <AddBook />
      <Box mt={8}><Copyright /></Box>
    </div>
  );
}

export default App;
