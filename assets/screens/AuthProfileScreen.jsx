import React, {Component} from 'react';
import SidebarComponent from "../components/User/SidebarComponent";
import PanelComponent from "../components/User/PanelComponent";
import {withRouter} from "react-router";
import {withTranslation} from "react-i18next";
import "bulma-extensions/bulma-divider/dist/css/bulma-divider.min.css";
import "bulma-extensions/bulma-tooltip/dist/css/bulma-tooltip.min.css";

class AuthProfileScreen extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const {t} = this.props;

    return (
      <PanelComponent>
        <div className="columns is-multiline">
          <SidebarComponent title={t('navbar.account')}>
            <article className="media account-profil-widget">
              <figure className="media-left">
                <p className="image is-64x64">
                  <img  className="is-rounded" src="https://bulma.io/images/placeholders/128x128.png"/>
                </p>
              </figure>
              <div className="media-content">
                <h5 className="title is-5 m-t-5" style={{fontSize: 14}}>Clément de Louvencourt</h5>
                <h5 className="subtitle is-5 has-text-weight-light" style={{fontSize: 12}}>Comptable</h5>
              </div>
            </article>
            <h5 className="title is-5 is-uppercase m-t-15" style={{color: "rgb(154, 154, 154)", fontSize: 12, marginBottom: 15}}>PERMISSIONS</h5>
            <div className="row-content space-between">
              <a className="tooltip is-tooltip-bottom" data-tooltip={"Clients"}><i className="fas fa-users icon-link"></i></a>
              <a className="tooltip is-tooltip-bottom" data-tooltip={"Factures"}><i className="fas fa-tags icon-link is-active"></i></a>
              <a className="tooltip is-tooltip-bottom" data-tooltip={"Devis"}><i className="fas fa-users icon-link"></i></a>
              <a className="tooltip is-tooltip-bottom" data-tooltip={"Taxes"}><i className="fas fa-users icon-link is-active"></i></a>
              <a className="tooltip is-tooltip-bottom" data-tooltip={"Contract"}><i className="fas fa-users icon-link" ></i></a>
            </div>
            <h5 className="title is-5 is-uppercase m-t-30" style={{color: "rgb(154, 154, 154)", fontSize: 12}}>ACTIONS</h5>
            <a className="button user-button-panel is-fullwidth m-t-15">Activer la 2FA</a>
            <a className="button user-button-panel is-fullwidth m-t-15">Modifier le mot de passe</a>
            <div className="is-divider" style={{borderTop: "1px solid #eff1f5", margin: '1rem 0'}}></div>
            <a className="button user-button-panel is-red is-fullwidth m-t-15">Déconnexion</a>
            <a className="button user-button-panel is-dangerdanger is-fullwidth m-t-15">Supprimer mon compte</a>
          </SidebarComponent>
          <div className="column is-9 is-12-mobile">
            <div className="card is-fullwidth" style={{minHeight: 600}}>
              <div className="card-content">

              </div>
            </div>
          </div>
        </div>
      </PanelComponent>
    );
  }
}

export default withTranslation()(withRouter(AuthProfileScreen));
