import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './styles';
import Box from '@material-ui/core/Box';
import FlightLandIcon from '@material-ui/icons/FlightLand';
import { CustomButton } from '../../../libs';
import { Button } from '@material-ui/core';
import { Build, BuildOutlined } from '@material-ui/icons';
import AirplanemodeActiveIcon from '@material-ui/icons/AirplanemodeActive';
import { Link } from 'react-router-dom';
const menus = require('./../../module.json');
export const CustomMenu = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.barMenu}>
      <Box display="flex" justifyContent="flex-start" alignItems="center">
        {menus.map((menu: any) => {
          return (
            <Link
              key={`menu-item-${menu.id}`}
              to={menu.path}
              className={classes.menu}
            >
              {menu.label}
            </Link>
          );
        })}
      </Box>
    </AppBar>
  );
};
