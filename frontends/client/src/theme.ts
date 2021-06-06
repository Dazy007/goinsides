import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#52c7b8',
      main: '#09257a',
      dark: '#00675b',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ffd95b',
      main: '#be3b48',
      dark: '#c77800',
      contrastText: '#000',
    },
  },
});

export default theme;
