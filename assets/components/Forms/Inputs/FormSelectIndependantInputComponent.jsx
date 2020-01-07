import React, {Component} from 'react';
import FormUtils from "../../../utils/FormUtils";
import {withTranslation} from "react-i18next";
import LanguageUtils from "../../../utils/LanguageUtils";

class FormSelectIndependantInputComponent extends Component {

  constructor(props) {
    super(props);

    this.state = {
      active: false
    };
  }

  render() {
    const { t } = this.props;

    return (
      <div className={"dropdown is-active " + this.props.containerClassName}>
        <div className="dropdown-trigger">
          <button className="button custom-input" aria-haspopup="true" aria-controls="dropdown-menu" onClick={() => this.setState({active: !this.state.active})}>
            <span style={{marginTop: -5, color: '#c1c1c1'}}>
              {this.props.selected}
            </span>
            <span className="icon is-small">
              <i className="fas fa-angle-down" aria-hidden="true"></i>
            </span>
          </button>
        </div>
        {this.state.active && (
          <div className="dropdown-menu animated fadeIn" style={{animationDuration: '500ms'}} id="dropdown-menu" role="menu">
            <div className="dropdown-content">
              {this.props.data.map(d => (
                <a onClick={() => {
                  this.props.onChange(d.value);
                  this.setState({active: false})
                }} className="dropdown-item">
                  {d.title}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default withTranslation()(FormSelectIndependantInputComponent);
