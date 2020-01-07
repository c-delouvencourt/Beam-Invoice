import React, {Component} from 'react';
import {withTranslation} from "react-i18next";
import FormSelectLanguageInputComponent from "../Forms/Inputs/FormSelectLanguageInputComponent";
import {Link} from "react-router-dom";

class UserNavbar extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const {t, i18n} = this.props;

    return (
      <nav className="navbar m-b-30" role="navigation" aria-label="main navigation">
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
            <Link to={"/"} className="navbar-item">
              {t('navbar.dashboard')}
            </Link>

            <Link to={"/clients"} className="navbar-item">
              {t('navbar.clients')}
            </Link>

            <a className="navbar-item">
              {t('navbar.devis')}
            </a>

            <a className="navbar-item">
              {t('navbar.factures')}
            </a>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <FormSelectLanguageInputComponent/>
            </div>
            <div className="navbar-item row-content start">
              <figure className="image is-32x32" style={{height: 28, width: 28}}>
                <img className="is-rounded" src="https://bulma.io/images/placeholders/128x128.png"/>
              </figure>
              <div className="m-l-5">
                <h5 className="title is-5" style={{fontSize: 12}}>Clément de Louvencourt</h5>
                <h6 className="subtitle is-6" style={{fontSize: 10, marginTop: -24}}>Comptable</h6>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default withTranslation()(UserNavbar);
