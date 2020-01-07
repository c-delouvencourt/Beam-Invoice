import 'styles/app.scss';

import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import i18n from "./locales/i18n";

import NotFound from 'components/NotFound/NotFound';
import DashboardScreen from "./screens/DashboardScreen";
import AuthLoginScreen from "./screens/Auth/AuthLoginScreen";
import ClientsScreen from "./screens/ClientsScreen";

ReactDom.render(
  <Router>
    <Switch>
      <Route path="/" exact component={DashboardScreen} />

      <Route path="/login" exact component={AuthLoginScreen} />

      <Route path="/clients" exact component={ClientsScreen} />

      <Route component={NotFound} />
    </Switch>
  </Router>, document.getElementById('app'));
