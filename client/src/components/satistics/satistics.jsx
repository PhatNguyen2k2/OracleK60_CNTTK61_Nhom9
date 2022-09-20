// import React , {useEffect, useState} from 'react';
import React from 'react';
import BarChart from './barchart';
import { Chart as ChartJS } from 'chart.js/auto';
import styles from './satistics.scss';
import $ from 'jquery';
import {
  MathsData,
  LiterData,
  EngData,
  PhyData,
  ChemistryData,
  BioData,
  HisData,
  GeoData,
  CivicData
} from './subdata';

function Statistics() {
  return (
    <div className="container">
      <div className="Statis">
        <div className="column">PHỔ ĐIỂM THI THPT QUỐC GIA - 2022</div> <hr /><br />
        <div className="subject">
          <a id="toan">Toán Học</a>
          <a id="van">Ngữ Văn</a>
          <a id="av">Ngoại Ngữ</a>
          <a id="ly">Vật Lý</a>
          <a id="hoa">Hóa Học</a>
          <a id="sinh">Sinh Học</a>
          <a id="su">Lịch Sử</a>
          <a id="dia">Địa Lý</a>
          <a id="gdcd">GDCD</a>
        </div>
        <h1 className="phodiem">Phổ điểm môn Toán </h1>
        <div className="barchart">
          <BarChart labelData={MathsData} />
        </div>
        <h1 className="phodiem">Phổ điểm môn Văn </h1>
        <div className="barchart">
          <BarChart labelData={LiterData} />
        </div>
        <h1 className="phodiem">Phổ điểm môn Ngoại ngữ </h1>
        <div className="barchart">
          <BarChart labelData={EngData} />
        </div>
        <h1 className="phodiem">Phổ điểm môn Vật Lý </h1>
        <div className="barchart">
          <BarChart labelData={PhyData} />
        </div>
        <h1 className="phodiem">Phổ điểm môn Hóa </h1>
        <div className="barchart">
          <BarChart labelData={ChemistryData} />
        </div>
        <h1 className="phodiem">Phổ điểm môn Sinh </h1>
        <div className="barchart">
          <BarChart labelData={BioData} />
        </div>
        <h1 className="phodiem">Phổ điểm môn Sử </h1>
        <div className="barchart">
          <BarChart labelData={HisData} />
        </div>
        <h1 className="phodiem">Phổ điểm môn Địa </h1>
        <div className="barchart">
          <BarChart labelData={GeoData} />
        </div>
        <h1 className="phodiem">Phổ điểm môn GDCD </h1>
        <div className="barchart">
          <BarChart labelData={CivicData} />
        </div>
      </div>
    </div>
  );
}

// $(window).scroll(function () {
//   console.log($(this).scrollTop());
// });
$(document).ready(function () {
  $('#toan').click(function () {
    $('html, body').animate({ scrollTop: 328 }, 1000);
  });
});
$(document).ready(function () {
  $('#van').click(function () {
    $('html, body').animate({ scrollTop: 940 }, 1000);
  });
});
$(document).ready(function () {
  $('#av').click(function () {
    $('html, body').animate({ scrollTop: 1600 }, 1000);
  });
});
$(document).ready(function () {
  $('#ly').click(function () {
    $('html, body').animate({ scrollTop: 2300 }, 1000);
  });
});
$(document).ready(function () {
  $('#hoa').click(function () {
    $('html, body').animate({ scrollTop: 3000 }, 1000);
  });
});
$(document).ready(function () {
  $('#sinh').click(function () {
    $('html, body').animate({ scrollTop: 3600 }, 1000);
  });
});
$(document).ready(function () {
  $('#su').click(function () {
    $('html, body').animate({ scrollTop: 4300 }, 1000);
  });
});
$(document).ready(function () {
  $('#dia').click(function () {
    $('html, body').animate({ scrollTop: 5000 }, 1000);
  });
});
$(document).ready(function () {
  $('#gdcd').click(function () {
    $('html, body').animate({ scrollTop: 5600 }, 1000);
  });
});

export default Statistics;
