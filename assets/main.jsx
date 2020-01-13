import 'styles/bulma.css';
import 'styles/app.scss';

import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import i18n from "./locales/i18n";

import NotFound from 'components/NotFound/NotFound';
import DashboardScreen from "./screens/DashboardScreen";
import AuthLoginScreen from "./screens/Auth/AuthLoginScreen";
import ClientsScreen from "./screens/ClientsScreen";
import LoadingScreen from "./screens/LoadingScreen";
import AdminUsersScreen from "./screens/Admin/AdminUsersScreen";
import AdminSocietyScreen from "./screens/Admin/AdminSocietyScreen";

ReactDom.render(
  <Router>
    <Switch>
      <Route path="/" exact component={DashboardScreen} />

      <Route path="/loading" exact component={LoadingScreen} />
      <Route path="/login" exact component={AuthLoginScreen} />

      <Route path="/clients" exact component={ClientsScreen} />

      <Route path="/admin/users" exact component={AdminUsersScreen} />
      <Route path="/admin/society" exact component={AdminSocietyScreen} />

      <Route component={NotFound} />
    </Switch>
  </Router>, document.getElementById('app'));
