
import React from 'react';
import  './satistics.scss';
// let xml = new XMLHttpRequest();
// // let url = "http://localhost:3000/statistics/js/....data.json";
// xml.open("GET",ulr,true);
// xml.send();
// xml.onreadystatechange = function(){
//     if(this.readyState == 4 && this.status ==200){
//         let data = JSON.parse(this.responseText);
//         console.log(data);
//     }
// }

const ctx = document.getElementById('canvas').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: 'Thong ke',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(54, 162, 235, 0.2)',
            ],
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
function Statistics() {
  return (
    <div className="container">
    <canvas id="canvas" width="250" height="200"></canvas>
    <h1>BIỂU ĐỒ PHÂN BỐ ĐIỂM THI TỐT NGHIỆP THPT MÔN NGỮ VĂN NĂM 2021</h1>
    </div>
  )
}
export default Statistics;




