import React, {Component} from 'react';
import SidebarComponent from "../components/User/SidebarComponent";
import {withTranslation} from "react-i18next";
import PanelComponent from "../components/User/PanelComponent";
import FormSelectIndependantInputComponent from "../components/Forms/Inputs/FormSelectIndependantInputComponent";
import ClientsComponent from "../components/User/Clients/ClientsComponent";
import {withRouter} from "react-router";
import keydown, {Keys} from "react-keydown";
import ModalComponent from "../components/Modals/ModalComponent";
import ClientsFormAddComponent from "../components/Forms/Clients/ClientsFormAddComponent";
import {loginUser} from "../redux/actions/auth/AuthActions";
import {connect} from "react-redux";
import {updateClients} from "../redux/actions/clients/ClientsActions";
import APIClients from "../api/services/APIClients";
import HandleBeamAPI from "../api/HandleBeamAPI";
import ClientsAutoCompleteComponent from "../components/Widgets/ClientsAutoCompleteComponent";

const { up, down } = Keys;

class ClientsScreen extends Component {

  state = {
    addClientModal: false
  };

  constructor(props) {
    super(props);
  }

  @keydown(up)
  onUpPress(){
    this.props.history.push("/");
  }

  @keydown(down)
  onDownPress(){
    this.props.history.push("/clients");
  }

  componentDidMount() {
    APIClients.list(false).then(r => HandleBeamAPI.handleWithError(r, (r) => {
      this.setState({loading: false});
    })).then(data => {
      this.props.updateClients(data.clients);
    }).catch(e => HandleBeamAPI.error(e));
  }

  onSuggestionsFetchRequested(value, reason){

  }

  render() {
    const {t} = this.props;

    return (
      <PanelComponent>
        <div className="columns is-multiline">
          <SidebarComponent title={t('navbar.clients')}>
            <div className="field">
              <ClientsAutoCompleteComponent clients={this.props.clients}/>
            </div>
            <a className="button user-button is-primary is-fullwidth m-b-10" onClick={() => {
              this.setState({ addClientModal: true });
            }}>{t('clients.create')}</a>
            <label className="label m-t-50">{t('clients.filter')}</label>
            <FormSelectIndependantInputComponent selected={t('clients.since')} data={[{title: "1 an", value: "1y"}]}
                                                 containerClassName={"m-t-5"}/>
            <FormSelectIndependantInputComponent selected={t('clients.hasfacture')}
                                                 data={[{title: "Oui", value: "y"}, {title: "Non", value: "y"}]}
                                                 containerClassName={"m-t-15"}/>
            <label className="label m-t-50">{t('clients.order')}</label>
            <a className="button dark-button-card is-active">{t('clients.name')}</a>
            <a className="button dark-button-card">{t('clients.date')}</a>
          </SidebarComponent>
          <div className="column is-9 is-12-mobile">
            <div className="columns is-multiline">
              {this.props.clients.map((c, k) => (
                <ClientsComponent client={c} delay={150 * k}/>
              ))}
            </div>
          </div>
        </div>
        <ModalComponent title={t('clients.create')} isActive={this.state.addClientModal} onClose={() => {
          this.setState({addClientModal: !this.state.addClientModal});
        }} buttons={(
          <button className="button is-primary custom-button" style={{width: 125}}>{t('form.add')}</button>
        )}>
          <ClientsFormAddComponent onClose={() => {
            this.setState({addClientModal: !this.state.addClientModal});
          }}/>
        </ModalComponent>
      </PanelComponent>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateClients: (data) => {
      dispatch(updateClients(data));
    }
  }
};

const mapStateToProps = state => ({
  clients: state.clients.clients
});

export default withTranslation()(connect(mapStateToProps, mapDispatchToProps)(withRouter(ClientsScreen)));
