import React from "react";
import Autocomplete from 'react-autocomplete';
import Avatar from "react-avatar";

export default class ClientsAutoCompleteComponent extends React.Component {

  state = {
    value: "",
    clients: []
  };

  constructor(props){
    super(props);
    this.getSuggestions = this.getSuggestions.bind(this);
  }

  componentDidMount() {
    this.setState({clients: this.props.clients})
  }

  getSuggestions(value) {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
    this.setState({value});

    this.setState({clients: inputLength === 0 ? [] : this.state.clients.filter(client =>
        client.entrepriseName.trim().toLowerCase().slice(0, inputLength) === inputValue || client.fullName.trim().toLowerCase().slice(0, inputLength) === inputValue
      )});
  }

  render(){
    return (
      <Autocomplete
        getItemValue={(item) => item.entrepriseName ? item.entrepriseName : item.fullName}
        items={this.state.clients}
        renderInput={(props) => (
          <div className="dropdown-trigger">
            <div className="field is-fullwidth">
              <p className="control is-expanded has-icons-right is-fullwidth">
                <input className="input input_form_custom is-fullwidth" type="text" placeholder={"Rechercher un client..."} {...props}/>
                <span className="icon is-small is-right"><i className="fas fa-search"></i></span>
              </p>
            </div>
          </div>
        )}
        renderMenu={(items, value, style) => (
          <div className="dropdown is-active">
            <div className="dropdown-menu" id="dropdown-menu" role="menu">
                <div className="dropdown-content" children={items}>
                </div>
            </div>
          </div>
        )}
        renderItem={(item, isHighlighted) =>
          <div className="dropdown-item" style={{ background: isHighlighted ? 'lightgray' : 'white', flexDirection: 'row' }}>
            <Avatar name={item.entrepriseName ? item.entrepriseName : item.fullName} round="50px" size={30} style={{marginRight: 10}} />
            {item.entrepriseName ? item.entrepriseName : item.fullName}
          </div>
        }
        value={this.state.value}
        onChange={(e) => this.getSuggestions(e.target.value)}
        onSelect={(val) => this.setState({value: val})}
      />

    );
  }

}
