import styles from './satistics.scss';

import React from 'react';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

import { Bar } from 'react-chartjs-2';

function Statistics() {
  <div>
    <Bar
      data={{
        labels: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
        datasets: [
          {
            label: 'Math',
            data: [3, 6, 2, 8, 5, 8, 7, 5, 3, 6, 9],
            backgroundColor: 'red'
          }
        ]
      }}
      return
      height={600}
      width={800}
      options={{ maintainAspectRatio: false }}
    />
  </div>;
}

export default Statistics;
