import { createStyles, makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: '10px 50px',
      cursor: 'pointer',
    },

    primary: {
      background: theme.palette.primary.main,
      color: '#fff',
      border: 'none',
      width: ' 200px',
    },

    secondary: {
      background: theme.palette.secondary.main,
      color: '#fff',
      border: 'none',
    },
  }),
);
