import React, {Component} from 'react';
import UserNavbar from "../components/User/UserNavbar";
import DashboardAmountComponent from "../components/User/Dashboard/DashboardAmountComponent";
import DashboardGraphComponent from "../components/User/Dashboard/DashboardGraphComponent";
import PanelComponent from "../components/User/PanelComponent";

export default class DashboardScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <PanelComponent>
          <div className="columns is-multiline">
            <DashboardAmountComponent/>
            <DashboardGraphComponent/>
          </div>
      </PanelComponent>
    );
  }
}
