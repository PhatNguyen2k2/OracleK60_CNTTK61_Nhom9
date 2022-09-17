// import React , {useEffect, useState} from 'react';
// import ReactDOM from 'react-dom';
// import {BrowserRouter as Router, json} from 'react-router-dom'
// import {ComboBoxComponent} from '@syncfusion/ej2-react-dropdowns';
// import  './satistics.scss';
// import jsondata from './jsondata.json';
// import { Bar } from "react-chartjs-2";
// import { Chart as ChartJS } from "chart.js/auto";
// import { Chart } from "react-chartjs-2";

import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import styles from './satistics.scss';
// // let Diem, SoLuong;
// Statistics();
// // var xml = new XMLHttpRequest();
// // var url = "http://localhost:3000/satistics/js/jsondata.json";
// // xml.open("GET",url, true);
// // xml.send();
// // xml.onreadystatechange = function(){
// //   if(this.readyState == 4 && this.status == 200){
// //     var Diemtoan  = JSON.parse(this.responseText);
// //     Diem = Diemtoan.data_points.map(function(elem){
// //       return elem.Diem;
// //     })
// //     SoLuong = Diemtoan.data_points.map(function(elem){
// //       return elem.SoLuong;
// //     })
// //   }
// // }
// function Statistics() {
//     // const myChart = {
//     //     type: "bar",
//     //     data: {
//     //       labels: [
//     //         "0",
//     //         "0.25",
//     //         "0.5",
//     //         "0.75",
//     //         "1",
//     //         "1.25",
//     //         "1.5",
//     //         "1.75",
//     //         "2",
//     //         "2.25",
//     //         "2.5",
//     //         "2.75",
//     //         "3",
//     //         "3.25",
//     //         "3.5",
//     //         "3.75",
//     //         "4",
//     //         "4.25",
//     //         "4.5",
//     //         "4.75",
//     //         "5",
//     //         "5.25",
//     //         "5.5",
//     //         "5.75",
//     //         "6",
//     //         "6.25",
//     //         "6.5",
//     //         "6.75",
//     //         "7",
//     //         "7.25",
//     //         "7.5",
//     //         "7.75",
//     //         "8",
//     //         "8.25",
//     //         "8.5",
//     //         "8.75",
//     //         "9",
//     //         "9.25",
//     //         "9.5",
//     //         "9.75",
//     //         "10",
//     //       ],
//     //       datasets: [
//     //         {
//     //           label: "Thong ke Vat Li",
//     //           data: [
//     //             8, 0, 1, 10, 20, 69, 170, 292, 485, 801, 1.146, 1.56, 2.099, 2.555,
//     //             3.1, 3.57, 4.321, 4.903, 5.627, 6.403, 7.35, 8.387, 9.498, 10.706,
//     //             12.252, 13.59, 15.26, 17.063, 19.295, 21.386, 22.986, 23.214,
//     //             21.588, 18.29, 13.406, 8.314, 4.588, 1.847, 541, 136, 10,
//     //           ],
//     //           backgroundColor: ["rgba(54, 162, 235, 0.2)"],
//     //         },
//     //       ],
//     //     },
//     //     options: {
//     //       scales: {
//     //         y: {
//     //           beginAtZero: true,
//     //         },
//     //       },
//     //     },
//     //   };
//       // const toan = {
//       //   type: "bar",
//       //   data: {
//       //     labels:Diem,
//       //       // "0",
//       //       // "0.2",
//       //       // "0.4",
//       //       // "0.6",
//       //       // "0.8",
//       //       // "1",
//       //       // "1.2",
//       //       // "1.4",
//       //       // "1.6",
//       //       // "1.8",
//       //       // "2",
//       //       // "2.2",
//       //       // "2.4",
//       //       // "2.6",
//       //       // "2.8",
//       //       // "3",
//       //       // "3.2",
//       //       // "3.4",
//       //       // "3.6",
//       //       // "3.8",
//       //       // "4",
//       //       // "4.2",
//       //       // "4.4",
//       //       // "4.6",
//       //       // "4.8",
//       //       // "5",
//       //       // "5.2",
//       //       // "5.4",
//       //       // "5.6",
//       //       // "5.8",
//       //       // "6",
//       //       // "6.2",
//       //       // "6.4",
//       //       // "6.6",
//       //       // "6.8",
//       //       // "7",
//       //       // "7.2",
//       //       // "7.4",
//       //       // "7.6",
//       //       // "7.8",
//       //       // "8",
//       //       // "8.2",
//       //       // "8.4",
//       //       // "8.6",
//       //       // "8.8",
//       //       // "9",
//       //       // "9.2",
//       //       // "9.4",
//       //       // "9.6",
//       //       // "9.8",
//       //       // "10",
//       //     datasets: [
//       //       {
//       //         label: "Thong ke Toan",
//       //         data:SoLuong,
//       //           // 1  ,0,0,11,22,33,44,55,66,77,88,99,100,150,200,300,400,500,600,700,
//       //           // 800,2000,2100,2200,2300,2400,2500,2600,2700,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
//       //         backgroundColor: ["rgba(54, 162, 235, 0.2)"],
//       //       },
//       //     ],
//       //   },
//       //   options: {
//       //     scales: {
//       //       y: {
//       //         beginAtZero: true,
//       //       },
//       //     },
//       //   },
//       // };

//       // const [result, setResult] = useState("");
//       //   const [arrOptions, setArrOptions] = useState([
//       //     "Toán", 
//       //     "Lí",
//       //     "Hóa",
//       //     "Văn",
//       //     "Sinh",
//       //     "Anh",
//       //     "Sử",
//       //     "Địa",
//       //     "GDCD"
//       //   ]);
//       // // }
//       // const option = (
//       //   <ul>
//       //     {arrOptions.map((course, index) => 
//       //         <li key={index}> {arrOption.className}</li>
//       //     )}
//       //   </ul>
//       // );
//       // ReactDOM.render(option,document.getElementById('root'))
//       // const dataSource 
//      const subjectData=[
//       {Id: 'Sub1', SubObject :'Mon Toan'},
//       {Id: 'Sub2', SubObject :'Mon Ly'},
//       {Id: 'Sub3', SubObject :'Mon Hoa'},
//       {Id: 'Sub4', SubObject :'Mon Sinh'},
//       {Id: 'Sub5', SubObject :'Mon Anh'},
//       {Id: 'Sub6', SubObject :'Mon Van'},
//       {Id: 'Sub7', SubObject :'Mon Su'},
//       {Id: 'Sub8', SubObject :'Mon Dia'},
//       {Id: 'Sub9', SubObject :'Mon GDCD'},
//      ]
//       return (
//         <div className="container">
//           <div className='Statistics'>
//           <h1>PHỔ ĐIỂM TỐT NGHIỆP TRUNG HỌC PHỔ THÔNG-2021</h1>
//             <div className="point">
//             <ComboBoxComponent  placeholder="Mon Hoc"
//                 dataSource={subjectData}
//                 fields = {{value:'Id',text:"SubObject"}}
//             >
//             </ComboBoxComponent>
//             </div>
//             {/* <Bar type={toan.type} data={toan.data} options= {toan.options} id="canvas"></Bar> */}
            {/* <img src={result} alt="" /> */}
//           </div>
//       </div>);
// }
// {/* <Bar type={myChart.type} data={myChart.data} options= {myChart.options} id="canvas"></Bar> */}
// export default Statistics;



//                     {/* <a href="#">Môn toán</a>
//                     <a href="#">Môn lý</a>
//                     <a href="#">Môn hóa</a>
//                     <a href="#">Môn văn</a>
//                     <a href="#">Môn sinh</a>
//                     <a href="#">Môn sử</a>
//                     <a href="#">Môn Địa</a>
//                     <a href="#">Môn Anh</a> */}







   function Statistics() {
//   useEffect(()=>{
//     fetch("https://dog.ceo/api/breeds/image/random").then(data=>data.json()).then(result=>{
//       setResult(result.message)
//     })
//   },[])
  // <img src={result} alt="" /> 
  return (
    <div className="container">
      <div className="Statis">
      <div className="column">PHỔ ĐIỂM THI THPT QUỐC GIA - 2021</div>
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
                  // backgroundColor: '#66FFFF'
                  backgroundColor:'#747aee'
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
