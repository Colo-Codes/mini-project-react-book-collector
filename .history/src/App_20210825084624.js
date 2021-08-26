import React, { useState } from 'react';

import { Box, Button, makeStyles, Container, Grid, Card, CardContent, CardActions, Typography, CardHeader } from '@material-ui/core';
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
  button: {
    marginTop: theme.spacing(4),
  }
}));

function App() {
  const [showAddBookForm, setShowAddBookForm] = useState(false);

  const classes = useStyles();

  const addNewBookHandler = () => {
    setShowAddBookForm(true);
  }

  return (
    <React.Fragment>
      <header className={classes.paper}>
        {showAddBookForm && <AddBookForm />} {/* Conditional Rendering */}
        {!showAddBookForm && <Header headerIcon={<Home className={classes.icon} />} headerContent={'Welcome to BookCollector'} textContent={'Click the button below to add a new book'} />} {/* Conditional Rendering */}
        {!showAddBookForm && <Button variant="contained" color="primary" onClick={addNewBookHandler} className={classes.button} >Add new book</Button>} {/* Conditional Rendering */}
      </header>
      <main>
        <Container>
          <Grid container>

            <Grid item>
              <Card variant="outlined">
                <CardHeader>

                </CardHeader>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Book Title
                  </Typography>
                  <Typography variant="body1">
                    A short book description
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button variant="outlined" size="small" color="secondary">
                    Delete
                  </Button>
                </CardActions>
              </Card>

            </Grid>
          </Grid>

        </Container>
      </main>
      <footer>
        <Box mt={8}><Copyright /></Box>
      </footer>
    </React.Fragment>
  );
}

export default App;
