import { Switch, Route } from 'react-router-dom';
import React from 'react';
import { Homepage } from './pages/homepage';
import { Login } from './pages/login';
import { Signup } from './pages/signup';
export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
    </Switch>
  );
}
