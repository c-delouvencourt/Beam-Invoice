import React, {Component} from 'react';
import "../../styles/user.scss";
import {Link} from "react-router-dom";
import "bulma-extensions/bulma-divider/dist/css/bulma-divider.min.css";
import {withTranslation} from "react-i18next";
import {withRouter} from "react-router";
import keydown, {Keys} from 'react-keydown';
import PanelComponent from "../../components/User/PanelComponent";
import AdminPanelComponent from "../../components/Admin/AdminPanelComponent";

const { up, down } = Keys;

class AdminUsersScreen extends Component {

  constructor(props) {
    super(props);
  }

  @keydown(up)
  onUpPress(){
    this.props.history.push("/contracts");
  }

  @keydown(down)
  onDownPress(){
    this.props.history.push("/");
  }

  render() {
    const {t} = this.props;

    return (
      <AdminPanelComponent title={t('admin.users')}>
        <div className="columns is-multiline m-t-30">
          <h1>test</h1>
        </div>
      </AdminPanelComponent>
    );
  }
}

export default withTranslation()(withRouter(AdminUsersScreen));
