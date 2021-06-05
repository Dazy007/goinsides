import React from 'react';
import { Switch, Route } from 'react-router-dom';
import RouteController from './route.controller';
import './App.css';

function App() {
  return (
    <Switch>
      {RouteController.map((route) => {
        return (
          <Route
            exact={route.exact}
            path={route.path}
            component={route.component}
          />
        );
      })}
    </Switch>
  );
}

export default App;
