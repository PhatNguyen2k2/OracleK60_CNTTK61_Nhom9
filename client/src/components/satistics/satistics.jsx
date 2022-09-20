// import React , {useEffect, useState} from 'react';
import React from 'react';
import BarChart from './barchart';
import { Chart as ChartJS } from 'chart.js/auto';
import styles from './satistics.scss';
import {MathsData, LiterData,EngData,PhyData} from './subdata';

function Statistics() {
  return (
    <div className="container">
      <div className="Statis">
        <div className="column">PHỔ ĐIỂM THI THPT QUỐC GIA - 2022</div>
        <div className="barchart">
          <BarChart
            labelData={MathsData}
          />
        </div>
        <div className="barchart">
          <BarChart
              labelData={LiterData}
            />
        </div>
        <div className="barchart">
          <BarChart
              labelData={EngData}
            />
        </div>
        <div className="barchart">
          <BarChart
              labelData={PhyData}
            />
        </div>
      </div>
    </div>
  );
}




export default Statistics;
