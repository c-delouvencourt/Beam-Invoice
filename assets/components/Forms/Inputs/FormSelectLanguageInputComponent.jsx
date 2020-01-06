import React, {Component} from 'react';
import FormUtils from "../../../utils/FormUtils";
import {withTranslation} from "react-i18next";
import LanguageUtils from "../../../utils/LanguageUtils";

class FormSelectLanguageInputComponent extends Component {

  constructor(props) {
    super(props);

    this.state = {
      active: false
    };
  }

  render() {
    const { t, i18n } = this.props;

    return (
      <div className={"dropdown is-active " + this.props.containerClassName}>
        <div className="dropdown-trigger">
          <button className="button" aria-haspopup="true" aria-controls="dropdown-menu" onClick={() => this.setState({active: !this.state.active})}>
            <span style={{marginTop: -5}}>
              <img src={LanguageUtils.getImage(i18n.language)} style={{height: 11}}/>
              <i style={{marginLeft: 5, top: -10, fontSize: 13}}>{LanguageUtils.getTitle(i18n.language)}</i>
            </span>
            <span className="icon is-small">
              <i className="fas fa-angle-down" aria-hidden="true"></i>
            </span>
          </button>
        </div>
        {this.state.active && (
          <div className="dropdown-menu animated fadeIn" style={{animationDuration: '500ms'}} id="dropdown-menu" role="menu">
            <div className="dropdown-content">
              <a onClick={() => {
                i18n.changeLanguage("fr");
                localStorage.setItem("language", "fr");
                this.setState({active: false});
              }} className="dropdown-item">
                <img src={LanguageUtils.getImage("fr")} style={{height: 11}}/> {LanguageUtils.getTitle("fr")}
              </a>
              <a onClick={() => {
                i18n.changeLanguage("en");
                localStorage.setItem("language", "en");
                this.setState({active: false});
              }} className="dropdown-item">
                <img src={LanguageUtils.getImage("en")} style={{height: 11}}/> {LanguageUtils.getTitle("en")}
              </a>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default withTranslation()(FormSelectLanguageInputComponent);
