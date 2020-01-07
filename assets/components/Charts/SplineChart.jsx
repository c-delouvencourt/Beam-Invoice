import React from "react";
import {Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis} from 'recharts';

export default class SplineChart extends React.Component {

  render() {
    return (
      <ResponsiveContainer width="100%" height={this.props.height}>
        <AreaChart data={this.props.data}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#48c774" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#48c774" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#f14668" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#f14668" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <XAxis dataKey="name" axisLine={false}/>
          <Tooltip/>
          <Area type="monotone" dataKey="uv" stroke="#48c774" fillOpacity={1} fill="url(#colorUv)"/>
          <Area type="monotone" dataKey="pv" stroke="#f14668" fillOpacity={1} fill="url(#colorPv)"/>
        </AreaChart>
      </ResponsiveContainer>
    );
  }

}
