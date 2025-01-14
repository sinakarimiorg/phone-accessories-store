import React from 'react';
import {
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    CartesianGrid,
    Tooltip
} from 'recharts'

import './Chart.css'

export default function Chart({data, dataKey, grid}) {
  return (
      <div>
          <ResponsiveContainer width="100%" aspect={4}>
              <LineChart data={data}>
                  <XAxis dataKey="name" stroke='#5550bd' />
                  <Line type="monotone" dataKey={dataKey} stroke='#5550bd' />
                  <Tooltip formatter={(value) => new Intl.NumberFormat('en').format(value)}/>
                  {grid && <CartesianGrid stroke='#e0dfdf' strokeDasharray="10" />}
              </LineChart>
          </ResponsiveContainer>
      </div>
  )
}