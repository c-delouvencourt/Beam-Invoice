import React, {Component} from 'react';
import "../../styles/user.scss";
import {Link} from "react-router-dom";
import "bulma-extensions/bulma-divider/dist/css/bulma-divider.min.css";
import {withTranslation} from "react-i18next";
import {withRouter} from "react-router";
import keydown, {Keys} from 'react-keydown';
import PanelComponent from "../../components/User/PanelComponent";
import AdminPanelComponent from "../../components/Admin/AdminPanelComponent";
import AdminFormUsersComponent from "../../components/Forms/Admin/AdminFormUsersComponent";

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
          <div className="column is-7 is-12-mobile">
          </div>
          <div className="column is-5 is-12-mobile">
            <div className="card">
              <div className="card-content">
                <h5 className="title is-5">{t('admin.usersContent.add_user')}</h5>
                <AdminFormUsersComponent/>
              </div>
            </div>
          </div>
        </div>
      </AdminPanelComponent>
    );
  }
}

export default withTranslation()(withRouter(AdminUsersScreen));
