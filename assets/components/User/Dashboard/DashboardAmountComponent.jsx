import React, {Component} from 'react';
import DashboardCardComponent from "./DashboardCardComponent";
import {withTranslation} from "react-i18next";
import StringUtils from "../../../utils/StringUtils";
import {Line, LineChart, ResponsiveContainer, Text} from "recharts";

class DashboardAmountComponent extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const {t} = this.props;

    return (
      <DashboardCardComponent title={t('dashboard.cards.summary')} height={400} size={3}>
        <div className="columns is-multiline">
          <div className="column is-12">
            <div className="columns is-multiline">
              <div className="column">
                <h5 className="title is-5 is-uppercase" style={{fontSize: '1rem'}}>{t('dashboard.cards.income')}</h5>
                <h5 className="subtitle is-4 is-uppercase" style={{color: "#48c774"}}>{StringUtils.formatPrice(300000)}</h5>
              </div>
              <div className="column">
                <ResponsiveContainer height={32}>
                  <LineChart height={32} data={
                    [
                      {
                        name: '-', pv: 0,
                      },
                      {
                        name: '+', pv: 10,
                      },
                      {
                        name: '+', pv: 40,
                      },
                      {
                        name: '+', pv: 20,
                      }
                    ]}>
                    <Line type="monotone" dot={false} dataKey="pv" stroke="#48c774" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
          <hr className="separator"/>
          <div className="column is-12">
            <div className="columns is-multiline">
              <div className="column">
                <h5 className="title is-5 is-uppercase" style={{fontSize: '1rem'}}>{t('dashboard.cards.taxes')}</h5>
                <h5 className="subtitle is-4 is-uppercase" style={{color: "#f14668"}}>{StringUtils.formatPrice(10205)}</h5>
              </div>
              <div className="column">
                <ResponsiveContainer height={32}>
                  <LineChart height={32} data={
                    [
                      {
                        name: '-', pv: 0,
                      },
                      {
                        name: '+', pv: 20,
                      },
                      {
                        name: '+', pv: 10,
                      },
                      {
                        name: '+', pv: 30,
                      }
                    ]}>
                    <Line type="monotone" dot={false} dataKey="pv" stroke="#f14668" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
          <hr className="separator"/>
          <div className="column is-12">
            <div className="columns is-multiline">
              <div className="column">
                <h5 className="title is-5 is-uppercase" style={{fontSize: '1rem'}}>{t('dashboard.cards.profit')}</h5>
                <h5 className="subtitle is-4 is-uppercase" style={{color: "#3c4bdf"}}>{StringUtils.formatPrice(289506)}</h5>
              </div>
              <div className="column">
                <ResponsiveContainer height={32}>
                  <LineChart height={32} data={
                    [
                      {
                        name: '-', pv: 0,
                      },
                      {
                        name: '+', pv: 20,
                      },
                      {
                        name: '+', pv: 10,
                      },
                      {
                        name: '+', pv: 30,
                      }
                    ]}>
                    <Line type="monotone" dot={false} dataKey="pv" stroke="#3c4bdf" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </DashboardCardComponent>
    );
  }
}

export default withTranslation()(DashboardAmountComponent);
