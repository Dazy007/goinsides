import { createStyles, makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((_theme: Theme) =>
  createStyles({
    root: {
      textTransform: 'none',
    },
    white: {
      color: '#fff',
    },
  }),
);
