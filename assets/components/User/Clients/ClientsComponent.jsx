import React, {Component} from 'react';
import {withTranslation} from "react-i18next";

class ClientsComponent extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const {t} = this.props;

    return (
      <div className="column is-12">
        <article className="media" style={{borderBottom: "1px solid #f9f9f9", paddingBottom: 30}}>
          <figure className="media-left">
            <p className="image is-64x64">
              <img className="is-rounded" src="https://bulma.io/images/placeholders/128x128.png"/>
            </p>
          </figure>
          <div className="media-content">
            <div className="content">
              <p style={{color: "#b9c2cf"}}>
                <strong>Jean Dupond</strong> <small>Il y a 3 mois</small>
              </p>
            </div>
            <a className="button light-button-card">{t('clients.view')}</a>
            <a className="button light-button-card">{t('clients.edit')}</a>
            <a className="button light-button-card">{t('clients.delete')}</a>
          </div>
          <div className="media-right">
            <h5 className="title is-5 has-text-weight-bold is-uppercase" style={{fontSize: 12}}>Total</h5>
            <h3 className="subtitle is-3 has-text-weight-light">30.000€</h3>
          </div>
        </article>
      </div>
    );
  }
}

export default withTranslation()(ClientsComponent);
