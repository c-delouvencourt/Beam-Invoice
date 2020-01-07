import React, {Component} from 'react';
import {withTranslation} from "react-i18next";
import {Link} from "react-router-dom";
import UserNavbar from "./UserNavbar";
import SidebarComponent from "./SidebarComponent";

class PanelComponent extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app">
        <UserNavbar/>
        <div className="container is-fluid animated fadeIn" style={{animationDuration: '500ms'}}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default PanelComponent;
