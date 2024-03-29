import 'styles/bulma.css';
import 'styles/app.scss';

import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import NotFound from 'components/NotFound/NotFound';
import DashboardScreen from "./screens/DashboardScreen";
import AuthLoginScreen from "./screens/Auth/AuthLoginScreen";
import ClientsScreen from "./screens/ClientsScreen";
import AdminUsersScreen from "./screens/Admin/AdminUsersScreen";
import AdminSocietyScreen from "./screens/Admin/AdminSocietyScreen";
import AuthProfileScreen from "./screens/AuthProfileScreen";
import {Redirect} from "react-router";

import Store from "./Store";
import {Provider} from "react-redux";
import AuthLoadingScreen from "./screens/Auth/AuthLoadingScreen";
import {ConfigProvider} from "react-avatar";
import Config from "./Config";


export const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} render={props => (
      localStorage.getItem('user-jwt')
        ? Store.getState().auth.isAuthenticated ? <Component {...props} /> : <Redirect to={{ pathname: '/loading', state: { from: props.location } }} />
        : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    )} />
  );
};

const Root = ({ store }) => (
  <ConfigProvider colors={Config.COLORS}>
    <Provider store={store}>
      <Router>
        <Switch>
          <PrivateRoute path="/" exact component={DashboardScreen} />

          <Route path="/loading" component={AuthLoadingScreen} />
          <Route path="/login" component={AuthLoginScreen} />

          <PrivateRoute path="/profile" exact component={AuthProfileScreen} />

          <PrivateRoute path="/clients" exact component={ClientsScreen} />

          <PrivateRoute path="/admin/users" exact component={AdminUsersScreen} />
          <PrivateRoute path="/admin/society" exact component={AdminSocietyScreen} />

          <Route component={NotFound} />
        </Switch>
      </Router>
    </Provider>
  </ConfigProvider>
);

ReactDom.render(<Root store={Store}/>, document.getElementById('app'));
