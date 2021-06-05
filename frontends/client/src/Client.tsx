import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import theme from './theme';
import { hot } from 'react-hot-loader';
import App from './App';

const Application = () => {
  // React.useEffect(() => {
  // 	const jsStyles = document.querySelector("#js-server");
  // 	if (jsStyles) {
  // 		jsStyles.parentNode.removeChild(jsStyles);
  // 	}
  // }, []);
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default hot(module)(Application);
