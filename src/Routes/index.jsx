// react libraries
import * as React from 'react';

// third party packages
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// components
import Home from '.././pages/Home';
import Feeds from '../pages/Feeds';
import NotFound from '../pages/NotFound';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact={true} path="/" component={Home} />
      <Route exact path="/feeds" component={Feeds} />
      <Route component={NotFound} />
    />
    </Switch>
  </BrowserRouter>
);

export default Routes;
