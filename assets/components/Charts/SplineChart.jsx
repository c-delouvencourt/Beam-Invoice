import React from "react";
import {Area, AreaChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis} from 'recharts';

export default class SplineChart extends React.Component {

  render() {
    return (
      <ResponsiveContainer width="99%" height={this.props.height} style={{marginTop: 75}}>
        <AreaChart data={this.props.data}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3c4bdf" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#3c4bdf" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ed59d2" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#ed59d2" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <Tooltip/>
          <Area type="monotone" dataKey="uv" stroke="#3c4bdf" fillOpacity={1} fill="url(#colorUv)"/>
          <Area type="monotone" dataKey="pv" stroke="#ed59d2" fillOpacity={1} fill="url(#colorPv)"/>
          <Legend verticalAlign="bottom" />
        </AreaChart>
      </ResponsiveContainer>
    );
  }

}
