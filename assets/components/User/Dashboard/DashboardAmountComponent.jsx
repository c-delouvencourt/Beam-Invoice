import React, {Component} from 'react';
import {withTranslation} from "react-i18next";
import StringUtils from "../../../utils/StringUtils";

class DashboardAmountComponent extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const {t} = this.props;

    return (
      <div className="columns is-multiline">
        <div className="column is-12">
          <h5 className="title is-5 is-uppercase" style={{color: "rgb(154, 154, 154)", fontSize: 14}}>{t('dashboard.cards.profit')}</h5>
          <h2 className="subtitle is-2 is-uppercase has-text-weight-light has-text-primary" >{StringUtils.formatPrice(270000)}</h2>
        </div>
        <hr className="separator"/>
        <div className="column is-6">
          <div className="columns is-multiline">
            <div className="column">
              <h5 className="title is-5 is-uppercase" style={{color: "rgb(154, 154, 154)", fontSize: 12}}>{t('dashboard.cards.income')}</h5>
              <h5 className="subtitle is-4 is-uppercase "><span className="stat-badge has-text-success"><i className="fas fa-angle-double-up"></i></span>{StringUtils.formatPrice(289506)}</h5>
            </div>
          </div>
        </div>
        <div className="column is-6">
          <div className="columns is-multiline">
            <div className="column">
              <h5 className="title is-5 is-uppercase" style={{color: "rgb(154, 154, 154)", fontSize: 12}}>{t('dashboard.cards.taxes')}</h5>
              <h5 className="subtitle is-4 is-uppercase"><span className="stat-badge has-text-danger"><i className="fas fa-angle-double-down"></i></span>{StringUtils.formatPrice(10205)}</h5>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withTranslation()(DashboardAmountComponent);
