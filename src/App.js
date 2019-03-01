import React, { PureComponent, Fragment } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ArrowBack from '@material-ui/icons/ArrowBack';
import IconButton from '@material-ui/core/IconButton';
import { path } from 'ramda';

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
  navLink: {
    color: 'inherit',
    textDecoration: 'none',
    height: '24px',
    display: 'inline-block',
  }
};

class App extends PureComponent {
  render() {
    const { classes } = this.props;

    return (
      <Router>
        <Fragment>
          <CssBaseline />
            <Route path="/details/:name">
              {({ match, history }) => {
                const details = path(['params', 'name'], match);
                const onPlanetClick = (name) => history.push(`/details/${name}`);

                return (
                  <div className={classes.app}>
                    <AppBar position="static">
                      <Toolbar>
                        {match ? (
                          <IconButton color="inherit" aria-label="Menu">
                            <Link to="/" className={classes.navLink}>
                              <ArrowBack />
                            </Link>
                          </IconButton>
                        ) : null}
                        <Typography variant="title" color="inherit">
                          {details || 'Solar System'}
                        </Typography>
                      </Toolbar>
                    </AppBar>
                    <div className={classes.row}>
                      <div className={classes.column}>
                        <Navigation details={details} onPlanetClick={onPlanetClick} />
                      </div>
                      <div className={classes.column}>
                        <Model details={details} onPlanetClick={onPlanetClick} />
                      </div>
                    </div>
                  </div>
                );
              }}
            </Route>
        </Fragment>
      </Router>
    );
  }
}

export default withStyles(styles)(App);
