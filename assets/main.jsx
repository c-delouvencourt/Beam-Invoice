import 'styles/app.scss';

import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import NotFound from 'components/NotFound/NotFound';
import DashboardScreen from "./screens/DashboardScreen";

ReactDom.render(
  <Router>
    <Switch>
      <Route path="/" exact component={DashboardScreen} />
      <Route component={NotFound} />
    </Switch>
  </Router>, document.getElementById('app'));
