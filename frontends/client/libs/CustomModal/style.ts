import { createStyles, makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles(() =>
  createStyles({
    root: {
      
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 'none',
      padding: '10px 50px',
      cursor:'pointer',
      color: 'white',
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      letterSpacing:'2px'

    },
  

    
   
  }),
);
