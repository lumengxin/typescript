import React from 'react';
import { Route, HashRouter, Switch } from 'react-router-dom';
import LoginPage from './Pages/Login';
import Home from './Pages/Home';

export default () => {
  return (
    <div>
      <HashRouter>
        <Switch>
          <Route path="/login" exact component={LoginPage} />
          <Route path="/" exact component={Home} />
        </Switch>
      </HashRouter>
    </div>
  )
}
