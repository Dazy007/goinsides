import { createStyles, makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      color: theme.palette.primary.main,
      border: 'none',
      padding: '10px 50px',
      cursor: 'pointer',
      width: ' 200px',
    },

    primary: {
      background: theme.palette.primary.main,
      color: '#fff',
    },

    secondary: {
      background: theme.palette.primary.main,
    },
  }),
);
