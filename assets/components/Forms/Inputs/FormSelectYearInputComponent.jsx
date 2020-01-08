import React, {Component} from 'react';
import FormUtils from "../../../utils/FormUtils";
import {withTranslation} from "react-i18next";
import LanguageUtils from "../../../utils/LanguageUtils";

class FormSelectYearInputComponent extends Component {

  constructor(props) {
    super(props);

    this.state = {
      active: false
    };
  }

  render() {
    const { t } = this.props;

    return (
      <div className={"dropdown " +
      "is-active " + this.props.containerClassName} style={{marginTop: -10}}>
        <div className="dropdown-trigger">
          <button className="button" style={{borderRadius: 50, border: 'none'}} aria-haspopup="true" aria-controls="dropdown-menu" onClick={() => this.setState({active: !this.state.active})}>
            <p className="has-text-weight-semibold">2020</p>
            <span className="icon is-small has-text-primary" style={{marginLeft: 0}}>
              <i className="fas fa-angle-down" aria-hidden="true"></i>
            </span>
          </button>
        </div>
        {this.state.active && (
          <div className="dropdown-menu animated fadeIn" style={{animationDuration: '500ms'}} id="dropdown-menu" role="menu">
            <div className="dropdown-content">
              <a onClick={() => {
                this.setState({active: false});
              }} className="dropdown-item">
                {"2019"}
              </a>
              <a onClick={() => {
                this.setState({active: false});
              }} className="dropdown-item">
                {"2020"}
              </a>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default withTranslation()(FormSelectYearInputComponent);
