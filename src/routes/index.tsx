import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository/Index';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/repository/:repository+" component={Repository} />
      <Redirect to="/" />
    </Switch>
  );
};

export default Routes;
