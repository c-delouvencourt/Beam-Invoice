import React, {Component} from 'react';
import "../styles/user.scss";
import DashboardAmountComponent from "../components/User/Dashboard/DashboardAmountComponent";
import DashboardGraphComponent from "../components/User/Dashboard/DashboardGraphComponent";
import PanelComponent from "../components/User/PanelComponent";
import DashboardCardComponent from "../components/User/Dashboard/DashboardCardComponent";
import TimeComponent from "../components/Widgets/TimeComponent";
import {Link} from "react-router-dom";
import "bulma-extensions/bulma-divider/dist/css/bulma-divider.min.css";
import FormSelectYearInputComponent from "../components/Forms/Inputs/FormSelectYearInputComponent";
import {withTranslation} from "react-i18next";
import {withRouter} from "react-router";
import keydown, {Keys} from 'react-keydown';

const { up, down } = Keys;

class DashboardScreen extends Component {

  constructor(props) {
    super(props);
  }

  @keydown(up)
  onUpPress(){
    this.props.history.push("/admin/users");
  }

  @keydown(down)
  onDownPress(){
    this.props.history.push("/clients");
  }

  render() {
    const {t} = this.props;

    return (
      <PanelComponent>
        <div className="header-dashboard animated fadeInDown">
          <nav className="breadcrumb m-b-50" aria-label="breadcrumbs">
            <Link to="/" className="has-text-weight-bold" style={{fontSize: 12, float: 'left', marginTop: 3}}>{t('navbar.dashboard')}</Link> |
            <span className="has-text-weight-bold m-l-10"> {t('dashboard.hello')} Clément</span>
            <span style={{float: 'right'}}><TimeComponent/></span>
          </nav>

          <div className="columns m-t-30">
            <div className="column is-7 is-12-mobile">
              <div>
                <h5 className="title is-5" style={{marginBottom: 50, float: 'left'}}>{t('dashboard.cards.summary')}</h5>
                <div style={{float: 'right'}}><FormSelectYearInputComponent/></div>
              </div>
              <DashboardGraphComponent/>
            </div>
            <div className="column is-1 is-0-mobile is-hidden-mobile">
              <div className="is-divider-vertical" data-content="&" style={{height: 275}}></div>
            </div>
            <div className="column is-4 is-12-mobile"  style={{display: 'flex', flexDirection: 'column'}}>
              <div>
                <h5 className="title is-5" style={{marginBottom: 50, float: 'left'}}>{t('dashboard.cards.stats')}</h5>
                <div style={{float: 'right'}}><FormSelectYearInputComponent/></div>
              </div>
              <DashboardAmountComponent/>
            </div>
          </div>
        </div>
        <div className="columns is-multiline m-t-30">
          <DashboardCardComponent title={"test"} height={400} size={6} delay={100}>
          </DashboardCardComponent>
          <DashboardCardComponent title={"test"} height={400} size={3} delay={200}>
          </DashboardCardComponent>
          <DashboardCardComponent title={"test"} height={400} size={3} delay={300}>
          </DashboardCardComponent>
        </div>
      </PanelComponent>
    );
  }
}

export default withTranslation()(withRouter(DashboardScreen));
