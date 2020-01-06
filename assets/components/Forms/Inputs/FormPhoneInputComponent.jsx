import React, {Component} from 'react';
import FormUtils from "../../../utils/FormUtils";

export default class FormPhoneInputComponent extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="field">
        <label className="label">{this.props.label}</label>
        <div className="control has-icons-left">
          <input name={this.props.element} className={FormUtils.ifError(this.props.errors[this.props.element] && this.props.touched[this.props.element], "input input_form_custom")} type="tel" placeholder={this.props.placeholder} onChange={(text) => this.props.handleChange(text)} onBlur={(text) => this.props.handleBlur(text)} value={this.props.values[this.props.element]}/>
          <span className="icon is-small is-left">
            <i className={this.props.icon}/>
          </span>
        </div>
        {this.props.errors[this.props.element] && this.props.touched[this.props.element] && <p className="help is-danger">{this.props.errors[this.props.element]}</p>}
      </div>
    )
  }
}
