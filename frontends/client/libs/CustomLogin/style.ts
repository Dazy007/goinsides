import { createStyles, makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      color: theme.palette.primary.main,
    },
    primary: {
      background: theme.palette.primary.main,
    },
    secondary: {
      background: theme.palette.secondary.main,
      border: 'none',
      padding: '10px 50px',
      cursor: 'pointer',
      width: ' 200px',
    },
  }),
);
