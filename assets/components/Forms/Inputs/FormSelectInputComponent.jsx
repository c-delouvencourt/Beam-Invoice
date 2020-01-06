import React, {Component} from 'react';
import FormUtils from "../../../utils/FormUtils";

export default class FormSelectInputComponent extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="field" style={{marginBottom: 0}}>
        <label className="label">{this.props.label}</label>
        <div className="control">
          <div className="select is-fullwidth">
            <select name={this.props.element} onChange={(text) => this.props.handleChange(text)} onBlur={(text) => this.props.handleBlur(text)} value={this.props.values[this.props.element]} className={FormUtils.ifError(this.props.errors[this.props.element] && this.props.touched[this.props.element], "select select_form_custom")}>
              <option disabled={true}>{this.props.placeholder}</option>
              {this.props.options.map(option => (
                <option value={option.key}>{option.label}</option>
              ))}
            </select>
          </div>
        </div>
        {this.props.errors[this.props.element] && this.props.touched[this.props.element] && <p className="help is-danger">{this.props.errors[this.props.element]}</p>}
      </div>
    )
  }
}
