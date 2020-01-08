import React, {Component} from 'react';
import "../styles/user.scss";
import DashboardAmountComponent from "../components/User/Dashboard/DashboardAmountComponent";
import DashboardGraphComponent from "../components/User/Dashboard/DashboardGraphComponent";
import PanelComponent from "../components/User/PanelComponent";
import DashboardInvoicesComponent from "../components/User/Dashboard/DashboardInvoicesComponent";
import DashboardCardComponent from "../components/User/Dashboard/DashboardCardComponent";

export default class DashboardScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <PanelComponent>
        <div className="header-dashboard animated fadeInDown">
          <nav className="breadcrumb m-b-50" aria-label="breadcrumbs">
            <ul>
              <li><a href="#" className="has-text-weight-bold" style={{fontSize: 12}}>Tableau de Bord</a> | <span
                className="has-text-weight-bold m-l-10">Bonjour Clément</span></li>
            </ul>
          </nav>

          <div className="columns m-t-30">
            <div className="column is-7 is-12-mobile">
              <DashboardInvoicesComponent/>
            </div>
            <div className="column is-4 is-offset-1 is-12-mobile">
              <DashboardAmountComponent/>
            </div>
          </div>
        </div>
        <div className="columns is-multiline m-t-30">
          <DashboardGraphComponent/>
          <DashboardCardComponent title={"test"} height={400} size={3}>
          </DashboardCardComponent>
          <DashboardCardComponent title={"test"} height={400} size={6}>
          </DashboardCardComponent>
        </div>
      </PanelComponent>
    );
  }
}
