import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';


const styles = {
  root: {
    padding: '15px',
  },
};

class Details extends PureComponent {
  componentDidMount() {
    // TODO Api call
  }

  componentDidUpdate() {
    // TODO Api call
  }

  render() {
    const { detailsFor, classes } = this.props;

    return (
      <div className={classes.root}>
        <Typography variant="title">
          {detailsFor}
        </Typography>
        <Typography variant="body1">
          Description...
        </Typography>
      </div>
    );
  }
}

export default withStyles(styles)(Details);