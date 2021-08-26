import './App.css';

import { Box } from '@material-ui/core';

import AddBook from './Books/AddBook';

function App() {
  return (
    <div>
      <AddBook />
      <Box color="text.secondary" mt={8}>Test</Box>
    </div>
  );
}

export default App;
