import React, {Component} from 'react';
import "../../styles/auth.scss";

export default class AuthLoginScreen extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className="login-background">
        <div className="container">
          <div className="columns">
            <div className="column is-6 m-t-50">
              <img src={require('../../images/logo.png')} className={"login-auth"}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
