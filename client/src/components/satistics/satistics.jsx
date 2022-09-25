import React from 'react';
import { Chart as ChartJS } from 'chart.js/auto';
import { Chart } from 'chart.js';
import styles from './satistics.scss';
import $ from 'jquery';

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
          <canvas id="mathsChart"></canvas>
        </div>
        <h1 className="phodiem">Phổ điểm môn Ngữ Văn </h1>
        <div className="barchart">
          <canvas id="literChart"></canvas>
        </div>
        <h1 className="phodiem">Phổ điểm môn Ngoại Ngữ </h1>
        <div className="barchart">
          <canvas id="engChart"></canvas>
        </div>
        <h1 className="phodiem">Phổ điểm môn Vật Lý </h1>
        <div className="barchart">
          <canvas id="phyChart"></canvas>
        </div>
        <h1 className="phodiem">Phổ điểm môn Hóa Học </h1>
        <div className="barchart">
          <canvas id="cheChart"></canvas>
        </div>
        <h1 className="phodiem">Phổ điểm môn Sinh Học</h1>
        <div className="barchart">
          <canvas id="bioChart"></canvas>
        </div>
        <h1 className="phodiem">Phổ điểm môn Lịch Sử </h1>
        <div className="barchart">
          <canvas id="hisChart"></canvas>
        </div>
        <h1 className="phodiem">Phổ điểm môn Địa Lý </h1>
        <div className="barchart">
          <canvas id="geoChart"></canvas>
        </div>
        <h1 className="phodiem">Phổ điểm môn Giáo Dục Công Dân </h1>
        <div className="barchart">
          <canvas id="civicChart"></canvas>
        </div>
      </div>
    </div>
  );
}
$(document).ready(function () {
  $('#toan').click(function () {
    $('html, body').animate({ scrollTop: 328 }, 1000);
  });
});
$(document).ready(function () {
  $('#van').click(function () {
    $('html, body').animate({ scrollTop: 990 }, 1000);
  });
});
$(document).ready(function () {
  $('#av').click(function () {
    $('html, body').animate({ scrollTop: 1650 }, 1000);
  });
});
$(document).ready(function () {
  $('#ly').click(function () {
    $('html, body').animate({ scrollTop: 2350 }, 1000);
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
    $('html, body').animate({ scrollTop: 5550 }, 1000);
  });
});

fetch('http://localhost:8080/api/statistics/marks/Toán', {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})
  .then((marks) => {
    return marks.text();
  })
  .then((mark) => {
    const ruby = mark.replaceAll('.00', '');
    const score = ruby.split(',');
    score.shift();
    fetch('http://localhost:8080/api/statistics/counts/Toán', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then((counts) => {
        return counts.text();
      })
      .then((count) => {
        const ncount = count.split(',');
        ncount.shift();
        new Chart(document.getElementById('mathsChart'), {
          type: 'bar',
          data: {
            labels: score,
            datasets: [
              {
                label: 'Toán',
                data: ncount,
                backgroundColor: '#FFA500'
              }
            ]
          },
          options: { maintainAspectRatio: false }
        });
      });
  });

fetch('http://localhost:8080/api/statistics/marks/Văn', {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})
  .then((marks) => {
    return marks.text();
  })
  .then((mark) => {
    const ruby = mark.replaceAll('.00', '');
    const score = ruby.split(',');
    score.shift();
    fetch('http://localhost:8080/api/statistics/counts/Văn', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then((counts) => {
        return counts.text();
      })
      .then((count) => {
        const ncount = count.split(',');
        ncount.shift();
        new Chart(document.getElementById('literChart'), {
          type: 'bar',
          data: {
            labels: score,
            datasets: [
              {
                label: 'Văn',
                data: ncount,
                backgroundColor: '#FFA500'
              }
            ]
          },
          options: { maintainAspectRatio: false }
        });
      });
  });

fetch('http://localhost:8080/api/statistics/marks/Anh', {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})
  .then((marks) => {
    return marks.text();
  })
  .then((mark) => {
    const ruby = mark.replaceAll('.00', '');
    const score = ruby.split(',');
    score.shift();
    fetch('http://localhost:8080/api/statistics/counts/Anh', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then((counts) => {
        return counts.text();
      })
      .then((count) => {
        const ncount = count.split(',');
        ncount.shift();
        new Chart(document.getElementById('engChart'), {
          type: 'bar',
          data: {
            labels: score,
            datasets: [
              {
                label: 'Ngoại Ngữ',
                data: ncount,
                backgroundColor: '#FFA500'
              }
            ]
          },
          options: { maintainAspectRatio: false }
        });
      });
  });

fetch('http://localhost:8080/api/statistics/marks/Lí', {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})
  .then((marks) => {
    return marks.text();
  })
  .then((mark) => {
    const ruby = mark.replaceAll('.00', '');
    const score = ruby.split(',');
    score.shift();
    fetch('http://localhost:8080/api/statistics/counts/Lí', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then((counts) => {
        return counts.text();
      })
      .then((count) => {
        const ncount = count.split(',');
        ncount.shift();
        new Chart(document.getElementById('phyChart'), {
          type: 'bar',
          data: {
            labels: score,
            datasets: [
              {
                label: 'Vật Lý',
                data: ncount,
                backgroundColor: '#FFA500'
              }
            ]
          },
          options: { maintainAspectRatio: false }
        });
      });
  });

fetch('http://localhost:8080/api/statistics/marks/Hóa', {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})
  .then((marks) => {
    return marks.text();
  })
  .then((mark) => {
    const ruby = mark.replaceAll('.00', '');
    const score = ruby.split(',');
    score.shift();
    fetch('http://localhost:8080/api/statistics/counts/Hóa', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then((counts) => {
        return counts.text();
      })
      .then((count) => {
        const ncount = count.split(',');
        ncount.shift();
        new Chart(document.getElementById('cheChart'), {
          type: 'bar',
          data: {
            labels: score,
            datasets: [
              {
                label: 'Hóa Học',
                data: ncount,
                backgroundColor: '#FFA500'
              }
            ]
          },
          options: { maintainAspectRatio: false }
        });
      });
  });

fetch('http://localhost:8080/api/statistics/marks/Sinh', {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})
  .then((marks) => {
    return marks.text();
  })
  .then((mark) => {
    const ruby = mark.replaceAll('.00', '');
    const score = ruby.split(',');
    score.shift();
    fetch('http://localhost:8080/api/statistics/counts/Sinh', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then((counts) => {
        return counts.text();
      })
      .then((count) => {
        const ncount = count.split(',');
        ncount.shift();
        new Chart(document.getElementById('bioChart'), {
          type: 'bar',
          data: {
            labels: score,
            datasets: [
              {
                label: 'Sinh Học',
                data: ncount,
                backgroundColor: '#FFA500'
              }
            ]
          },
          options: { maintainAspectRatio: false }
        });
      });
  });

fetch('http://localhost:8080/api/statistics/marks/Sử', {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})
  .then((marks) => {
    return marks.text();
  })
  .then((mark) => {
    const ruby = mark.replaceAll('.00', '');
    const score = ruby.split(',');
    score.shift();
    fetch('http://localhost:8080/api/statistics/counts/Sử', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then((counts) => {
        return counts.text();
      })
      .then((count) => {
        const ncount = count.split(',');
        ncount.shift();
        new Chart(document.getElementById('hisChart'), {
          type: 'bar',
          data: {
            labels: score,
            datasets: [
              {
                label: 'Lịch Sử',
                data: ncount,
                backgroundColor: '#FFA500'
              }
            ]
          },
          options: { maintainAspectRatio: false }
        });
      });
  });

fetch('http://localhost:8080/api/statistics/marks/Địa', {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})
  .then((marks) => {
    return marks.text();
  })
  .then((mark) => {
    const ruby = mark.replaceAll('.00', '');
    const score = ruby.split(',');
    score.shift();
    fetch('http://localhost:8080/api/statistics/counts/Địa', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then((counts) => {
        return counts.text();
      })
      .then((count) => {
        const ncount = count.split(',');
        ncount.shift();
        new Chart(document.getElementById('geoChart'), {
          type: 'bar',
          data: {
            labels: score,
            datasets: [
              {
                label: 'Địa Lý',
                data: ncount,
                backgroundColor: '#FFA500'
              }
            ]
          },
          options: { maintainAspectRatio: false }
        });
      });
  });

fetch('http://localhost:8080/api/statistics/marks/GDCD', {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})
  .then((marks) => {
    return marks.text();
  })
  .then((mark) => {
    const ruby = mark.replaceAll('.00', '');
    const score = ruby.split(',');
    score.shift();
    fetch('http://localhost:8080/api/statistics/counts/GDCD', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then((counts) => {
        return counts.text();
      })
      .then((count) => {
        const ncount = count.split(',');
        ncount.shift();
        new Chart(document.getElementById('civicChart'), {
          type: 'bar',
          data: {
            labels: score,
            datasets: [
              {
                label: 'GDCD',
                data: ncount,
                backgroundColor: '#FFA500'
              }
            ]
          },
          options: { maintainAspectRatio: false }
        });
      });
  });

export default Statistics;
