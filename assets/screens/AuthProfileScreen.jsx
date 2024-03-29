import React, {Component, Fragment} from 'react';
import SidebarComponent from "../components/User/SidebarComponent";
import PanelComponent from "../components/User/PanelComponent";
import {withRouter} from "react-router";
import {withTranslation} from "react-i18next";
import "bulma-extensions/bulma-divider/dist/css/bulma-divider.min.css";
import "bulma-extensions/bulma-tooltip/dist/css/bulma-tooltip.min.css";
import {loginUser, logoutUser} from "../redux/actions/auth/AuthActions";
import {connect} from "react-redux";
import AuthFormProfileComponent from "../components/Forms/Auth/AuthFormProfileComponent";
import ModalComponent from "../components/Modals/ModalComponent";
import AuthUploadPictureComponent from "../components/Auth/AuthUploadPictureComponent";
import Avatar from "react-avatar";

class AuthProfileScreen extends Component {

  state = {
    changePasswordModal: false
  };

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
                  <Avatar name={this.props.user.firstName + " " + this.props.user.name} round="50px" size={64} />
                </p>
              </figure>
              <div className="media-content">
                <h5 className="title is-5 m-t-5" style={{fontSize: 14}}>{this.props.user.firstName + " " + this.props.user.name}</h5>
                <h5 className="subtitle is-5 has-text-weight-light" style={{fontSize: 12}}>{this.props.user.rank}</h5>
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
            <a className="button user-button-panel is-fullwidth m-t-15" onClick={() => this.setState({changePasswordModal: true})}>Modifier le mot de passe</a>
            <div className="is-divider" style={{borderTop: "1px solid #eff1f5", margin: '1rem 0'}}></div>
            <a className="button user-button-panel is-red is-fullwidth m-t-15" onClick={() => {
              this.props.logoutUser();
              localStorage.removeItem("user-jwt");
              this.props.history.push("/login");
            }}>Déconnexion</a>
            <a className="button user-button-panel is-dangerdanger is-fullwidth m-t-15">Supprimer mon compte</a>
          </SidebarComponent>
          <div className="column is-9 is-12-mobile">
            <div className="card is-fullwidth" style={{minHeight: 600}}>
              <div className="card-content">
                <AuthUploadPictureComponent/>
                <hr/>
                <AuthFormProfileComponent/>
              </div>
            </div>
          </div>
        </div>
        <ModalComponent title={t('profile.change-password')} isActive={this.state.changePasswordModal} onClose={() => {
          this.setState({changePasswordModal: !this.state.changePasswordModal});
        }} buttons={(
          <button className="button is-primary custom-button" style={{width: 125}}>{t('form.edit')}</button>
        )}>

        </ModalComponent>
      </PanelComponent>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loginUser: (data) => {
      dispatch(loginUser(data));
    },
    logoutUser: (data) => {
      dispatch(logoutUser(data))
    }
  }
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user
});

export default withTranslation()(connect(mapStateToProps, mapDispatchToProps)(withRouter(AuthProfileScreen)));
