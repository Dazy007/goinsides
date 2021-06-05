import React from 'react';
import { hydrate } from 'react-dom';
import Application from './Client';
import './App.css';

hydrate(<Application />, document.getElementById('__APP_GO__'));
