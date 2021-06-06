import express from 'express';
import favicon from 'serve-favicon';
import webpackDevBundler from './bundler';
import path from 'path';
import cors from 'cors';

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Application from '../src/App';
import { ServerStyleSheets, ThemeProvider } from '@material-ui/core';
import theme from './../src/theme';
const CURRENT_WD = process.cwd();
const app = express();

// Webpack Development bundle
if (process.env.NODE_ENV === 'development') {
  webpackDevBundler.Bundler(app);
}
// app.use(favicon(path.join(CURRENT_WD, "public", "images", "icon.png")));

app.use(express.static(path.join(CURRENT_WD, '/static/')));
app.use(express.static(path.join(CURRENT_WD, '/build/')));
app.use('*', express.static(path.join(CURRENT_WD, '/build/')));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('*', (req, res) => {
  const context = {};
  const sheets = new ServerStyleSheets();
  const html = ReactDOMServer.renderToString(
    sheets.collect(
      <StaticRouter location={req.url} context={context}>
        <ThemeProvider theme={theme}>
          <Application />
        </ThemeProvider>
      </StaticRouter>,
    ),
  );
  if (context.url) {
    return res.redirect(303, context.url);
  }
  let bundleFile;
  const serverCss = sheets.toString();
  if (process.env.NODE_ENV === 'development') {
    bundleFile = '/build/bundle.js';
  } else {
    bundleFile = '/bundle.js';
  }
  res.status(200).send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <base href="/">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Goinsides - Marketing tools</title>
        <meta name="description" content="Goinsides is a CRM like tools to provides more sales with your client">
        <meta name="keywords" content="Reactjs, Nodejs, Jsx, Express, MongoDB, JavaScript, Mern">
        <meta name="author" content="Mahady Manana">
        <base href="/">
        <style>${serverCss}</style>
		<style>
		
			body {
				margin: 0;
			}
			* {
				word-wrap: normal;
			}
			a {
				text-decoration: none;
			}
			a:hover {
				text-decoration: none;
			}
			
		
		</style>
    </head>
    <body>
        <div id="__APP_GO__">${html}</div>
        <script src=${bundleFile}></script> 
	</body>
    </html>
    `);
});

app.listen(4000, (error) => {
  if (error) {
    console.log(error);
  }
  console.log(`Server running at : 4000 \nVisit : http://localhost:4000`);
});
