// react libraries
import * as React from 'react';

// third party packages
import { Route, Switch } from 'react-router-dom';

// components
import Signup from '../pages/SignUp';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Signup} />
  </Switch>
)

export default Routes;
