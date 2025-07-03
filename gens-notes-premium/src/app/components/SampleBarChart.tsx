"use client";

import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Feb', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Mar', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Apr', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'May', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Jun', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Jul', uv: 3490, pv: 4300, amt: 2100 },
];

const SampleBarChart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#333" />
        <XAxis dataKey="name" stroke="#FFF" />
        <YAxis stroke="#FFF" />
        <Tooltip
          contentStyle={{ backgroundColor: '#333', border: 'none', borderRadius: '8px' }}
          labelStyle={{ color: '#FFF' }}
          itemStyle={{ color: '#FFF' }}
        />
        <Legend />
        <Bar dataKey="pv" fill="#8B5CF6" name="Page Views" />
        <Bar dataKey="uv" fill="#EC4899" name="Unique Visitors" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default SampleBarChart; // Added a comment to trigger re-processing
