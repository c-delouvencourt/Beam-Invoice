import React, { Component } from 'react';
import {useTranslation, withTranslation} from "react-i18next";

class UserNavbar extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { t, i18n } = this.props;

    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <img src={require('../../images/logo.png')} height="28"/>
          </a>

          <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false"
             data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item">
              {t('navbar.dashboard')}
            </a>

            <a className="navbar-item">
              {t('navbar.clients')}
            </a>

            <a className="navbar-item">
              {t('navbar.devis')}
            </a>

            <a className="navbar-item">
              {t('navbar.factures')}
            </a>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a className="button is-small is-primary" onClick={() => i18n.changeLanguage('fr')}>
                  <strong>Français</strong>
                </a>
                <a className="button is-small is-primary" onClick={() => i18n.changeLanguage('en')}>
                  <strong>English</strong>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default withTranslation()(UserNavbar);
