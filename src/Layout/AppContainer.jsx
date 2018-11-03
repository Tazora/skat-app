
import React from 'react';
import PropTypes from 'prop-types';
import AppBar from './AppBar';
import TestCard from '../Components/TestCard';
import TestExpansion from '../Components/TestExpansion';
import { withStyles } from '@material-ui/core/styles';
import withRoot from './withRoots';

const styles = theme => ({
  root: {
    marginTop: 0,
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(900 + theme.spacing.unit * 3 * 2)]: {
      width: 900,
      marginLeft: 'auto',
      marginRight: 'auto',
  }}});

function Index(props) {
  const { classes } = props;
    return (
      <div className={classes.root}>
        <AppBar props={props.gameName} />
        <TestExpansion />
      </div>
    );
  }

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Index));