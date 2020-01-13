import React, {Component} from 'react';
import AdminTabsComponent from "./AdminTabsComponent";
import UserNavbar from "../User/UserNavbar";

class AdminPanelComponent extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="columns">
        <UserNavbar/>
        <div className="container is-fluid column is-11-desktop is-12-mobile margin-desktop">
          <div className="is-inline-flex">
            <h3 className="title is-3">Administration <span className="has-text-grey-lighter has-text-weight-light">|</span></h3>
            <h3 className="title is-3 has-text-weight-light animated fadeInDown m-l-5">{this.props.title}</h3>
          </div>

          <AdminTabsComponent/>
          <div className="animated fadeIn" style={{animationDuration: '500ms'}}>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default AdminPanelComponent;
