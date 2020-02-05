import React, {Component} from 'react';
import "../../styles/auth.scss";
import APIAuth from "../../api/services/APIAuth";
import Loading from "../../components/Loading";
import {loginUser, logoutUser} from "../../redux/actions/auth/AuthActions";
import {connect} from "react-redux";
import {withRouter} from "react-router";
import HandleBeamAPI from "../../api/HandleBeamAPI";

class AuthLoadingScreen extends Component {

  state = {
    exit: false
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(this.props);
    APIAuth.token().then(r => HandleBeamAPI.handleWithError(r, (r) => {
      localStorage.removeItem("user-jwt");
      this.props.logoutUser();
      setTimeout(() => {
        this.setState({exit: true});
      }, 1000);
      setTimeout(() => {
        this.props.history.push('/login')
      }, 2000);
    })).then(data => {
      localStorage.setItem("user-jwt", data.user.jwt);
      this.props.loginUser(data.user);
      setTimeout(() => {
        this.setState({exit: true});
      }, 1000);
      setTimeout(() => {
        this.props.history.push(this.props.location.state.from ? this.props.location.state.from.pathname === "/loading" ? "/" : this.props.location.state.from.pathname : "/")
      }, 2000);
    }).catch(e => HandleBeamAPI.error(e));
  }

  render() {
    return (
      <div style={{background: this.state.exit ? '#f7f8fb': '#f7f8fb'}}>
        <div className={"login-background-2 animated " + (this.state.exit ? "fadeOutUp" : "fadeInDown")} style={{animationDelay: (this.state.exit ? "200ms" : "0ms")}}>
            <div className="columns">
              <div className="column is-4 is-offset-4 is-12-mobile is-offset-0-mobile center-content" style={{height: '100vh'}}>
                <img src={require('../../images/logo.png')} className={"login-auth animated " + (this.state.exit ? "fadeOut" : "fadeInUp")} style={{animationDelay: (this.state.exit ? "0ms" : "200ms")}}/>
                <Loading addClass={" animated " + (this.state.exit ? "fadeOut" : "fadeIn")} addStyle={{animationDelay: (this.state.exit ? "0ms" : "400ms")}}/>
              </div>
            </div>
        </div>
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AuthLoadingScreen));
