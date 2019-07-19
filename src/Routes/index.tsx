// react libraries
import * as React from 'react';

// third party packages
import { Route, Switch } from 'react-router-dom';

// components
import Home from '../pages/Home';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    {/* <Route exact path="/health" component={HealthCheck} /> */}
  />
  </Switch>
);

export default Routes;
