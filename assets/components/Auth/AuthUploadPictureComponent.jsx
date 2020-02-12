import React from "react";
import {loginUser, logoutUser} from "../../redux/actions/auth/AuthActions";
import {connect} from "react-redux";
import {withRouter} from "react-router";
import Avatar from "react-avatar";

class AuthUploadPictureComponent extends React.Component {

  render(){
    return (
      <div className="picture-uploader">
        {this.props.user.picture ? (
          <Avatar name={"Clément de Louvencourt"} round="50px" size={100} />
        ) : (
          <Avatar name={this.props.user.firstName + " " + this.props.user.name} round="50px" size={100} />
        )}
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AuthUploadPictureComponent));
