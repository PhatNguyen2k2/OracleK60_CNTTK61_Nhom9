import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
function BarChart({labelData}) {
  return (
    <Bar
      data={labelData}
      options={{ maintainAspectRatio: false }}
    />
  );
}

export default BarChart;
