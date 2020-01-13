import React, {Component} from 'react';
import FormUtils from "../../../utils/FormUtils";
import {withTranslation} from "react-i18next";
import LanguageUtils from "../../../utils/LanguageUtils";

class FormSelectLanguageSmallInputComponent extends Component {

  constructor(props) {
    super(props);

    this.state = {
      active: false
    };
  }

  render() {
    const { t, i18n } = this.props;

    return (
      <div className={"dropdown is-up " +
      "is-active " + this.props.containerClassName}>
        <div className="dropdown-trigger">
          <button className="button" style={{borderRadius: 50}} aria-haspopup="true" aria-controls="dropdown-menu" onClick={() => this.setState({active: !this.state.active})}>
            <img src={LanguageUtils.getImage(i18n.language)} style={{height: 20}}/>
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
              <a onClick={() => {
                i18n.changeLanguage("es");
                localStorage.setItem("language", "es");
                this.setState({active: false});
              }} className="dropdown-item">
                <img src={LanguageUtils.getImage("es")} style={{height: 11}}/> {LanguageUtils.getTitle("es")}
              </a>
              <a onClick={() => {
                i18n.changeLanguage("it");
                localStorage.setItem("language", "it");
                this.setState({active: false});
              }} className="dropdown-item">
                <img src={LanguageUtils.getImage("it")} style={{height: 11}}/> {LanguageUtils.getTitle("it")}
              </a>
              <a onClick={() => {
                i18n.changeLanguage("de");
                localStorage.setItem("language", "de");
                this.setState({active: false});
              }} className="dropdown-item">
                <img src={LanguageUtils.getImage("de")} style={{height: 11}}/> {LanguageUtils.getTitle("de")}
              </a>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default withTranslation()(FormSelectLanguageSmallInputComponent);
