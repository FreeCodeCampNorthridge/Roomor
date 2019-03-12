import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = {
  root: {
    flexGrow: 1,
    textAlign: 'center',
    position: 'fixed',
    bottom: '0',
    width: '100%'
  },
  menuButton: {
    marginLeft: -18,
    marginRight: 10
  }
};

const Footer = props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="sticky">
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit">
            Footer
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Footer);
