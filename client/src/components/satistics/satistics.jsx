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
        <div className="column">PHỔ ĐIỂM THI THPT QUỐC GIA - 2022</div> <hr />
        <br />
        <div className="subject">
          <div className="sub" id="toan">
            Toán
          </div>
          <div className="sub" id="van">
            Ngữ Văn
          </div>
          <div className="sub" id="av">
            Ngoại Ngữ
          </div>
          <div className="sub" id="ly">
            Vật Lý
          </div>
          <div className="sub" id="hoa">
            Hóa Học
          </div>
          <div className="sub" id="sinh">
            Sinh Học
          </div>
          <div className="sub" id="su">
            Lịch Sử
          </div>
          <div className="sub" id="dia">
            Địa Lý
          </div>
          <div className="sub" id="gdcd">
            GDCD
          </div>
        </div>
        <div className="phodiem">
          <strong>Phổ điểm môn Toán </strong>
        </div>
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
        <h1 className="phodiem">Phổ điểm môn Hóa Học </h1>
        <div className="barchart">
          <BarChart labelData={ChemistryData} />
        </div>
        <h1 className="phodiem">Phổ điểm môn Sinh Học</h1>
        <div className="barchart">
          <BarChart labelData={BioData} />
        </div>
        <h1 className="phodiem">Phổ điểm môn Lịch Sử </h1>
        <div className="barchart">
          <BarChart labelData={HisData} />
        </div>
        <h1 className="phodiem">Phổ điểm môn Địa Lý </h1>
        <div className="barchart">
          <BarChart labelData={GeoData} />
        </div>
        <h1 className="phodiem">Phổ điểm môn Giáo Dục Công Dân </h1>
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
    $('html, body').animate({ scrollTop: 4900 }, 1000);
  });
});
$(document).ready(function () {
  $('#gdcd').click(function () {
    $('html, body').animate({ scrollTop: 5600 }, 1000);
  });
});

export default Statistics;
