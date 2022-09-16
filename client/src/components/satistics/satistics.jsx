import styles from './satistics.scss';

import React from 'react';

import { Bar } from 'react-chartjs-2';

import { Chart as ChartJS } from 'chart.js/auto';

function Statistics() {
  return (
    <div className="container">
      <div className="Statis">
        <div className="dropdown">
          <select className="dropdown-content">
            <option value="">Toán</option>
            <option value="">Văn</option>
            <option value="">Anh</option>
            <option value="">Lý</option>
            <option value="">Hóa</option>
            <option value="">Sinh</option>
            <option value="">Sử</option>
            <option value="">Địa</option>
            <option value="">GD Công Dân</option>
          </select>
        </div>
        <div className="barchart">
          <Bar
            data={{
              labels: [
                '0',
                '0.2',
                '0.4',
                '0.6',
                '0.8',
                '1',
                '1.2',
                '1.4',
                '1.6',
                '1.8',
                '2',
                '2.2',
                '2.4',
                '2.6',
                '2.8',
                '3',
                '3.2',
                '3.4',
                '3.6',
                '3.8',
                '4',
                '4.2',
                '4.4',
                '4.6',
                '4.8',
                '5',
                '5.2',
                '5.4',
                '5.6',
                '5.8',
                '6',
                '6.2',
                '6.4',
                '6.6',
                '6.8',
                '7',
                '7.2',
                '7.4',
                '7.6',
                '7.8',
                '8',
                '8.2',
                '8.4',
                '8.6',
                '8.8',
                '9',
                '9.2',
                '9.4',
                '9.6',
                '9.8',
                '10'
              ],
              datasets: [
                {
                  label: 'Toán',
                  data: [3, 6, 2, 8, 5, 8, 7, 5, 3, 6, 9, 42, 5, 25, 60, 45],
                  backgroundColor: '#66FFFF'
                }
              ]
            }}
            options={{ maintainAspectRatio: false }}
          />
        </div>
      </div>
    </div>
  );
}

export default Statistics;
