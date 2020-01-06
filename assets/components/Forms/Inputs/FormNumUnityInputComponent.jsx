import React, {Component} from 'react';
import FormUtils from "../../../utils/FormUtils";

export default class FormNumUnityInputComponent extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="mt-10">
        <label className="label">{this.props.label}</label>
        <div className="field has-addons">
          <div className="control has-icons-left is-expanded">
            <input name={this.props.element} className={FormUtils.ifError(this.props.errors[this.props.element] && this.props.touched[this.props.element], "input input_form_custom")} type="number" min={this.props.min} max={this.props.max} step={this.props.step} placeholder={this.props.placeholder} onChange={(text) => this.props.handleChange(text)} onBlur={(text) => this.props.handleBlur(text)} value={this.props.values[this.props.element]}/>
            <span className="icon is-small is-left">
            <i className={this.props.icon}/>
          </span>
          </div>
          <p className="control">
            <a className="button is-static">
              {this.props.unity}
            </a>
          </p>
        </div>
        {this.props.errors[this.props.element] && this.props.touched[this.props.element] && <p className="help is-danger">{this.props.errors[this.props.element]}</p>}
      </div>
    )
  }
}
