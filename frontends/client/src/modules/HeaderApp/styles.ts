import { makeStyles, Theme, createStyles, fade } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    logo: {
      color: theme.palette.common.white,
    },
    bar: {
      padding: '5px 30px',
    },
    barMenu: {
      background: 'rgb(9 37 122 / 90%)',
      padding: '5px 30px',
    },
    menu: {
      color: '#fff',
      marginRight: 15,
    },
  }),
);
