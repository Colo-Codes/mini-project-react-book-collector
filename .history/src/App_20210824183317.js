import './App.css';

import { Box } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Link } from '@material-ui/core';

import AddBook from './Books/AddBook';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function App() {
  return (
    <div>
      <AddBook />
      <Box mt={8}><Copyright /></Box>
    </div>
  );
}

export default App;
