import React from "react";
import {Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis} from 'recharts';

export default class SplineChart extends React.Component {

  render() {
    return (
      <ResponsiveContainer width="100%" height={this.props.height}>
        <AreaChart data={this.props.data}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#d59b9b" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#d59b9b" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <XAxis dataKey="name"/>
          <YAxis/>
          <CartesianGrid strokeDasharray="3 3" vertical={false}/>
          <Tooltip/>
          <Area type="monotone" dataKey="uv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorUv)"/>
          <Area type="monotone" dataKey="pv" stroke="#d59b9b" fillOpacity={1} fill="url(#colorPv)"/>
        </AreaChart>
      </ResponsiveContainer>
    );
  }

}
