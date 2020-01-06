import React, {Component} from 'react';
import UserNavbar from "../components/User/UserNavbar";
import DashboardAmountComponent from "../components/User/Dashboard/DashboardAmountComponent";
import DashboardGraphComponent from "../components/User/Dashboard/DashboardGraphComponent";

export default class DashboardScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className="app">
        <UserNavbar/>
        <div className="container is-fluid">
          <div className="columns is-multiline">
            <DashboardAmountComponent/>
            <DashboardGraphComponent/>
          </div>
        </div>
      </div>
    );
  }
}
