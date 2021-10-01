import React from 'react';
import { Switch, Route } from 'react-router-dom';

import MicrofrontendAsRoute from './Components/MfrontendAsRoute';
import MicrofrontendAsComponent from './Components/MfrontendAsComponent';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={MicrofrontendAsComponent} />
    <Route exact path="/microfrontend" component={MfrontendAsRoute} />
  </Switch>
);

export default Routes;
