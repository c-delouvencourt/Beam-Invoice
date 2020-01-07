import React, {Component} from 'react';
import UserNavbar from "./UserNavbar";

class PanelComponent extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="columns">
        <UserNavbar/>
        <div className="column is-11-desktop is-12-mobile margin-desktop">
          <div className="container is-fluid animated fadeIn" style={{animationDuration: '500ms'}}>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default PanelComponent;
