import React, { Component } from 'react';
import UserNavbar from "../components/User/UserNavbar";

export default class DashboardScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div class="app">
        <UserNavbar/>
        <div class="container">

        </div>
      </div>
    );
  }
}
