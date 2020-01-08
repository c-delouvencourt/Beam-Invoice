import React, {Component} from 'react';
import {withTranslation} from "react-i18next";

class DashboardInvoicesComponent extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const {t} = this.props;

    return (
      <div className="columns is-multiline" style={{borderRight: '1px solid #e7e7e7'}}>
        <div className="column is-12">
          <h5 className="title is-5" style={{marginBottom: 50}}>{t('dashboard.cards.lastinvoice')}</h5>
        </div>
        <div className="column is-12">
          <div className="columns is-multiline">
            <div className="column is-4 is-12-mobile">
                <div className="card">
                  <div className="card-content">
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withTranslation()(DashboardInvoicesComponent);
