import React from 'react';
import { hydrate } from 'react-dom';
import Application from './Client';
import { loadableReady } from '@loadable/component';

import './App.css';

// hydrate(<Application />, document.getElementById('__APP_GO__'));
loadableReady(() => {
  hydrate(<Application />, document.getElementById('__APP_GO__'));
});
