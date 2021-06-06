import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './styles';
import Box from '@material-ui/core/Box';
import FlightLandIcon from '@material-ui/icons/FlightLand';
import { CustomButton } from '../../../libs';
export const TopBar = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.bar} elevation={0}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <div>
          <IconButton className={classes.logo}>
            <FlightLandIcon />
            <Typography>Go insides</Typography>
          </IconButton>
        </div>
        <div>
          <CustomButton white>Create account</CustomButton>
          <CustomButton white>Login</CustomButton>
        </div>
      </Box>
    </AppBar>
  );
};
