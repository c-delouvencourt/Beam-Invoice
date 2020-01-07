import React, {Component} from 'react';
import {withTranslation} from "react-i18next";
import {Link} from "react-router-dom";

class SidebarComponent extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <div className="column is-3 is-hidden-mobile">
          <h4 className="title is-4"><Link to={"/"} className="has-text-grey-dark m-r-10" style={{fontSize: 16}}><i className="fas fa-chevron-left"></i></Link>{this.props.title}</h4>
          {this.props.children}
        </div>
        <div className="column is-12 is-hidden-desktop">
          <h4 className="title is-4">{this.props.title}</h4>
        </div>
      </React.Fragment>
    );
  }
}

export default withTranslation()(SidebarComponent);
