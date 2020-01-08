import React, {Component} from 'react';
import {withTranslation} from "react-i18next";
import SplineChart from "../../Charts/SplineChart";

class DashboardGraphComponent extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const {t} = this.props;

    return (
        <SplineChart height={200} data={[{
          name: 'Page A', uv: 4000, pv: 2400
        },
          {
            name: 'Page B', uv: 3000, pv: 1398
          },
          {
            name: 'Page C', uv: 2000, pv: 9800
          },
          {
            name: 'Page D', uv: 2780, pv: 3908
          },
          {
            name: 'Page E', uv: 1890, pv: 4800
          },
          {
            name: 'Page F', uv: 2390, pv: 3800
          },
          {
            name: 'Page G', uv: 3490, pv: 4300
          },]}/>
    );
  }
}

export default withTranslation()(DashboardGraphComponent);
