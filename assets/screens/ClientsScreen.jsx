import React, {Component} from 'react';
import SidebarComponent from "../components/User/SidebarComponent";
import {withTranslation} from "react-i18next";
import PanelComponent from "../components/User/PanelComponent";
import FormSelectIndependantInputComponent from "../components/Forms/Inputs/FormSelectIndependantInputComponent";
import ClientsComponent from "../components/User/Clients/ClientsComponent";

class ClientsScreen extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const {t} = this.props;

    return (
      <PanelComponent>
        <div className="columns is-multiline">
          <SidebarComponent title={t('navbar.clients')}>
            <div className="field">
              <div className="control has-icons-left">
                <input className="input custom-input" type="text" placeholder={t('clients.search')}/>
                <span className="icon is-small is-left">
                    <i className="fas fa-search"></i>
                  </span>
              </div>
            </div>
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
            <div className="card">
              <div className="card-content">
                <div className="columns is-multiline">
                  <ClientsComponent/>
                  <ClientsComponent/>
                  <ClientsComponent/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PanelComponent>
    );
  }
}

export default withTranslation()(ClientsScreen);
