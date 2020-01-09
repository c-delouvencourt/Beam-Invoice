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

class LoadingScreen extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const {t} = this.props;

    return (
      <section className="hero is-white is-fullheight">

      </section>
    );
  }
}

export default withTranslation()(LoadingScreen);
