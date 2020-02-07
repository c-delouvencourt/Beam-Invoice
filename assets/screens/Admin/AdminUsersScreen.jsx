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
import APIAdminUsers from "../../api/services/Admin/APIAdminUsers";
import HandleBeamAPI from "../../api/HandleBeamAPI";
import Avatar from 'react-avatar';
import Config from "../../Config";
import Loading from "../../components/Loading";

const { up, down } = Keys;

class AdminUsersScreen extends Component {

  state = {
    loading: true,
    users: []
  };

  constructor(props) {
    super(props);

    this._getUsers = this._getUsers.bind(this);
  }

  @keydown(up)
  onUpPress(){
    this.props.history.push("/contracts");
  }

  @keydown(down)
  onDownPress(){
    this.props.history.push("/");
  }

  componentDidMount() {
    this._getUsers();
  }

  _getUsers(){
    APIAdminUsers.list().then(r => HandleBeamAPI.handleWithError(r, (r) => {
      this.setState({loading: false});
    })).then(data => {
      this.setState({loading: false, users: data.users});
    }).catch(e => HandleBeamAPI.error(e));
  }

  render() {
    const {t} = this.props;

    return (
      <AdminPanelComponent title={t('admin.users')}>
        <div className="columns is-multiline m-t-30">
          <div className="column is-7 is-12-mobile">
            <div className="columns is-multiline">
              {this.state.loading && (<Loading/>)}
              {this.state.users.map(user => (
                <div className="column is-12" key={user.id}>
                  <article className="media"  style={{borderBottom: '1px solid rgb(241, 241, 241)', paddingBottom: 20}}>
                    <figure className="media-left">
                      <p className="image is-64x64">
                        <Avatar name={user.firstName + " " + user.name} round="50px" size={64} />
                      </p>
                    </figure>
                    <div className="media-content">
                      <div className="content">
                        <p>
                          <strong>{user.firstName} {user.name}</strong> <span className="tag is-primary m-l-10">{user.rank}</span>
                        </p>
                      </div>
                      <nav className="level is-mobile">
                        <div className="level-left">
                          <a className="level-item">
                            <span className="icon is-small"><i className="fas fa-reply"></i></span>
                          </a>
                          <a className="level-item">
                            <span className="icon is-small"><i className="fas fa-retweet"></i></span>
                          </a>
                          <a className="level-item">
                            <span className="icon is-small"><i className="fas fa-heart"></i></span>
                          </a>
                        </div>
                      </nav>
                    </div>
                    <div className="media-right">
                      <button className="delete"></button>
                    </div>
                  </article>
                </div>
              ))}

            </div>
          </div>
          <div className="column is-5 is-12-mobile">
            <div className="card">
              <div className="card-content">
                <h5 className="title is-5">{t('admin.usersContent.add_user')}</h5>
                <AdminFormUsersComponent onUpdate={() => {
                  this._getUsers()
                }}/>
              </div>
            </div>
          </div>
        </div>
      </AdminPanelComponent>
    );
  }
}

export default withTranslation()(withRouter(AdminUsersScreen));
