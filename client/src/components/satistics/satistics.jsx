// import React , {useEffect, useState} from 'react';
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import styles from './satistics.scss';

function Statistics() {
  //   useEffect(()=>{
  //     fetch("https://dog.ceo/api/breeds/image/random").then(data=>data.json()).then(result=>{
  //       setResult(result.message)
  //     })
  //   },[])
  // <img src={result} alt="" />
  return (
    <div className="container">
      <div className="Statis" onChange={OptionChange}>
        <div className="column">PHỔ ĐIỂM THI THPT QUỐC GIA - 2022</div>
        <div className="dropdown">
          <select className="dropdown-content">
            <option value="Toán" selected>
              Toán
            </option>
            <option value="Ngữ Văn">Ngữ Văn</option>
            <option value="Ngoại Ngữ">Ngoại Ngữ</option>
            <option value="Vật Lý">Vật Lý</option>
            <option value="Hóa Học">Hóa Học</option>
            <option value="Sinh Học">Sinh Học</option>
            <option value="Lịch Sử">Lịch Sử</option>
            <option value="Địa Lý">Địa Lý</option>
            <option value="GDCD">GDCD</option>
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
                  label: ' OptionChange()',
                  data: [3, 6, 2, 8, 5, 8, 7, 5, 3, 6, 9, 42, 5, 25, 60, 45],
                  backgroundColor: '#FFA500'
                }
              ]
            }}
            options={{ maintainAspectRatio: false ,
                        scales:{
                          y:{
                            beginAtZero:true
                          }
                        }
            }}
            redraw={true}
          />
        </div>
      </div>
    </div>
  );
}

function OptionChange() {
  const select = document.querySelector('.dropdown-content');
  const bar = document.querySelector('.barchart');
  console.log(bar);
  if (select === null) return 'Toán';
  else {
    const label = select.options[select.selectedIndex].value;
    console.log(label);
    return label;
  }
}

export default Statistics;