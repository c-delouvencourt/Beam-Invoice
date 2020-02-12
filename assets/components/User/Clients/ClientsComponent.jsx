import React, {Component} from 'react';
import {withTranslation} from "react-i18next";
import Avatar from "react-avatar";

class ClientsComponent extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const {t} = this.props;

    return (
      <div className="column is-12 animated fadeInUp" style={{animationDelay: this.props.delay + "ms"}}>
        <div className="card">
          <div className="card-content">
            <article className="media">
              <figure className="media-left">
                <p className="image is-64x64">
                  <Avatar name={this.props.client.entrepriseName ? this.props.client.entrepriseName : this.props.client.fullName} round="50px" size={64} />
                </p>
              </figure>
              <div className="media-content">
                <div className="content">
                  <p style={{color: "#b9c2cf"}}>
                    <strong>{this.props.client.entrepriseName ? this.props.client.entrepriseName : this.props.client.fullName }</strong> <small>Il y a 3 mois</small>
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
        </div>
      </div>
    );
  }
}

export default withTranslation()(ClientsComponent);
