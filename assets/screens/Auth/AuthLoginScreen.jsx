import React, {Component} from 'react';
import "../../styles/auth.scss";
import AuthFormLoginComponent from "../../components/Forms/Auth/AuthFormLoginComponent";
import FormSelectLanguageInputComponent from "../../components/Forms/Inputs/FormSelectLanguageInputComponent";
import APIAuth from "../../api/services/APIAuth";

export default class AuthLoginScreen extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="login-background">
          <div className="columns">
            <div className="column is-4 is-offset-4 is-12-mobile is-offset-0-mobile center-content" style={{height: '100vh'}}>
              <img src={require('../../images/logo.png')} className={"login-auth"}/>
              <div className="card m-t-20 animated fadeInUp" style={{minWidth: 300}}>
                <div className="card-content">
                  <AuthFormLoginComponent/>
                  <FormSelectLanguageInputComponent containerClassName={"m-t-10"}/>
                </div>
              </div>
            </div>
          </div>
      </div>
    );
  }
}
