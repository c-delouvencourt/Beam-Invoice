import React, {Component} from 'react';
import "../../../styles/plugins/autocomplete.css";
import AlgoliaPlaces from 'algolia-places-react';
import {Config} from "../../../Config";

export default class FormAdresseInputComponent extends Component {

  state = {
    choosen: false,
    adresse: "",
    city: "",
    postalCode: ""
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.state.choosen ? (
          <div className={"animated fadeIn"}>
            <div className="field">
              <label className="label">Adresse</label>
              <div className="control has-icons-left">
                <input name="adresse" className="input input_form_custom is-disabled" type="text" disabled={true} value={this.state.adresse}/>
                <span className="icon is-small is-left">
                  <i className={"fas fa-location-arrow"}/>
                </span>
              </div>
            </div>
            <div className="field">
              <label className="label">Ville</label>
              <div className="control has-icons-left">
                <input name="city" className="input input_form_custom is-disabled" type="text" disabled={true} value={this.state.city}/>
                <span className="icon is-small is-left">
                  <i className={"fas fa-location-arrow"}/>
                </span>
              </div>
            </div>
            <div className="field">
              <label className="label">Code Postal</label>
              <div className="control has-icons-left">
                <input name="postalCode" className="input input_form_custom is-disabled" type="text" disabled={true} value={this.state.postalCode}/>
                <span className="icon is-small is-left">
                  <i className={"fas fa-location-arrow"}/>
                </span>
              </div>
            </div>

            <a className="button is-link is-small" onClick={() => this.setState({choosen: false})}>Modifier l'adresse</a>
          </div>
        ) : (
          <div>
            <label className="label">Votre adresse</label>
          <AlgoliaPlaces
            placeholder='Rechercher une adresse...'
            autoComplete="ad_dD789D789D7D986D6D"
            options={{
              appId: Config.ALGOLIA.APP_ID,
              apiKey: Config.ALGOLIA.SEARCH_API_KEY,
              language: 'fr',
              countries: ['fr'],
              type: 'address',
              useDeviceLocation: true
            }}
            onChange={({ query, rawAnswer, suggestion, suggestionIndex }) => {
              this.setState({choosen: true, adresse: suggestion.name, city: suggestion.city, postalCode: suggestion.postcode});
              this.props.onAdresseChange(suggestion.name);
              this.props.onCityChange(suggestion.city);
              this.props.onPostalCodeChange(suggestion.postcode);
            }}
          />
          </div>
        )}

      </div>
    )
  }
}
