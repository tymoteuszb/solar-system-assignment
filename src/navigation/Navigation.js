import React, { PureComponent } from 'react';
import { Route, Link } from 'react-router-dom';
import SwipeableViews from 'react-swipeable-views';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import solarSystemData from '../solarSystem.data';


const styles = {
  root: {
    flexGrow: '1',
  },
};

class Navigation extends PureComponent {
  handleChangeIndex = () => {};

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Route path="/selected/:name">
          {({ match }) => (
            <SwipeableViews index={match ? 1 : 0} onChangeIndex={this.handleChangeIndex}>
              <div>
                <List component="nav">
                  {solarSystemData.map(planetName => (
                    <ListItem button>
                      <ListItemText primary={planetName} />
                    </ListItem>
                  ))}
                </List>
              </div>
              <div>
                
              </div>
            </SwipeableViews>
          )}
        </Route>
      </div>
    );
  }
}

export default withStyles(styles)(Navigation);