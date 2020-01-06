import React, {Component} from 'react';
import DashboardCardComponent from "./DashboardCardComponent";
import {withTranslation} from "react-i18next";
import SplineChart from "../../Charts/SplineChart";

class DashboardGraphComponent extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const {t} = this.props;

    return (
      <DashboardCardComponent title={t('dashboard.cards.stats')} height={400} size={9}>
        <SplineChart width={400} height={350} data={[ {
          name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
        },
          {
            name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
          },
          {
            name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
          },
          {
            name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
          },
          {
            name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
          },
          {
            name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
          },
          {
            name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
          },]}/>
      </DashboardCardComponent>
    );
  }
}

export default withTranslation()(DashboardGraphComponent);
