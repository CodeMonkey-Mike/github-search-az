import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { history } from './store';

import Search from './pages/Search/';
import NotFound from './pages/NotFound/';

import { Layout } from './components';

// Routes with exact paths must be listed last
const Routes = () => (
  <Router history={history}>
    <Switch>
      <Layout>
        <Switch>
          <Route exact path="/" name="Home" component={Search} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </Switch>
  </Router>
);

export default Routes;
