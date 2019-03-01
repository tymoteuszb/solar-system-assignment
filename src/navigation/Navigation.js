import React, { PureComponent } from 'react';
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
  render() {
    const { classes, details, onPlanetClick } = this.props;

    return (
      <div className={classes.root}>
        <SwipeableViews index={details ? 1 : 0}>
          <div>
            <List component="nav">
              {Object.keys(solarSystemData).map(name => (
                <ListItem button key={name} onClick={() => onPlanetClick(name)}>
                  <ListItemText primary={name} />
                </ListItem>
              ))}
            </List>
          </div>
          <div>
            
          </div>
        </SwipeableViews>
      </div>
    );
  }
}

export default withStyles(styles)(Navigation);