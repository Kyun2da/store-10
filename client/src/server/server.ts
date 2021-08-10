import express from 'express';
import fs from 'fs';
import path from 'path';

import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from '../layouts/App';
import { Router } from '../core/router';

const PORT = 8000;

const app = express();

app.use(express.static(path.resolve(__dirname, 'build')));

app.use('*', (req, res, next) => {
  fs.readFile(path.resolve('./build/index.html'), 'utf-8', (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).send('Some error happened');
    }
    return res.send(
      data.replace(
        '<div id="root"></div>',
        `<div id="root">${ReactDOMServer.renderToString(
          React.createElement(
            Router,
            { initialPath: req.url },
            React.createElement(App, {})
          )
        )}</div>`
      )
    );
  });
});

app.listen(PORT, () => {
  console.log(`App launched on ${PORT}`);
});
