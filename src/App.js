import React, { PureComponent, Fragment } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ArrowBack from '@material-ui/icons/ArrowBack';
import IconButton from '@material-ui/core/IconButton';
import Navigation from './navigation/Navigation';
import Model from './model/Model';


const styles = {
  app: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  row: {
    display: 'flex',
    flex: 1,
  },
  column: {
    display: 'flex',
    flex: 1,
  },
};

class App extends PureComponent {
  render() {
    const { classes } = this.props;

    return (
      <Router>
        <Fragment>
          <CssBaseline />
          <div className={classes.app}>
            <AppBar position="static">
              <Toolbar>
                <IconButton color="inherit" aria-label="Menu">
                  <ArrowBack />
                </IconButton>
                <Typography variant="title" color="inherit">
                  Solar System
                </Typography>
              </Toolbar>
            </AppBar>
            <div className={classes.row}>
              <div className={classes.column}>
                <Navigation />
              </div>
              <div className={classes.column}>
                <Model />
              </div>
            </div>
          </div>
        </Fragment>
      </Router>
    );
  }
}

export default withStyles(styles)(App);
