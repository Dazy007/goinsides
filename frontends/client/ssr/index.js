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
import { Template } from './template';
// import { ChunkExtractor, ChunkExtractorManager } from '@loadable/server';

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
  const statsFile = path.join(CURRENT_WD, 'build/loadable-stats.json');
  // const extractor = new ChunkExtractor({ statsFile });

  const html = ReactDOMServer.renderToString(
    sheets.collect(
      <StaticRouter location={req.url} context={context}>
        {/* <ChunkExtractorManager extractor={extractor}> */}
        <ThemeProvider theme={theme}>
          <Application />
        </ThemeProvider>
        {/* </ChunkExtractorManager> */}
      </StaticRouter>,
    ),
  );
  // const scriptTags = extractor.getScriptTags();
  if (context.url) {
    return res.redirect(303, context.url);
  }
  // let bundleFile;
  const serverCss = sheets.toString();
  const bundleFile = '/bundle.js';

  res.status(200).send(Template(serverCss, html, bundleFile));
});

app.listen(4000, (error) => {
  if (error) {
    console.log(error);
  }
  console.log(`Server running at : 4000 \nVisit : http://localhost:4000`);
});
