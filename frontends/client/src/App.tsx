import { Switch, Route } from 'react-router-dom';
import React from 'react';
import { MainApp } from './modules';
// import Homepage from './pages/Homepage';
const modules = require('./module.json');
import loadable from '@loadable/component';

const Homepage = loadable(() => import('./pages/Homepage'), {
  fallback: <div>Loading ....</div>,
});
const Login = loadable(() => import('./pages/Login'), {
  fallback: <div>Loading ....</div>,
});
const Signup = loadable(() => import('./pages/Signup'), {
  fallback: <div>Loading ....</div>,
});

const Test = import('./pages/Homepage').then((module) => module.default);
export default function App() {
  return (
    <Switch>
      <MainApp>
        {/* {modules.map((module: any) => {
          return (
            <Route
              exact
              path={module.path}
              component={React.lazy(
                () => import(`./pages/${module.component}`),
              )}
            />
          );
        })} */}
        <Route exact path="/" component={Homepage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
      </MainApp>
    </Switch>
  );
}
