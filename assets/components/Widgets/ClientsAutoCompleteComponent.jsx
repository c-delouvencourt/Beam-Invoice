import React from "react";
import Autosuggest from 'react-autosuggest';

export default class ClientsAutoCompleteComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  getSuggestions(value) {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0 ? [] : this.props.clients.filter(lang =>
      lang.name.toLowerCase().slice(0, inputLength) === inputValue
    );
  }

  getSuggestionValue(suggestion) {
    return suggestion.entrepriseName ? suggestion.entrepriseName : suggestion.fullName;
  }

  renderSuggestion(suggestion) {
    return (
      <div>
        {suggestion.name}
      </div>
    );
  }

  render(){
    return (
      <Autosuggest
        suggestions={this.props.clients}
        getSuggestionValue={this.getSuggestionValue}
        renderSuggestion={this.renderSuggestion}
      />
    );
  }

}
