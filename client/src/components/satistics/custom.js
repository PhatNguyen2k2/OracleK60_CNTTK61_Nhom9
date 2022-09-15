let xml = new XMLHttpRequest();
let url = "http://localhost:3000/statistics/js/data.json";
xml.open("GET",ulr,true);
xml.send();
xml.onreadystatechange = function(){
    if(this.readyState == 4 && this.status ==200){
        let data = JSON.parse(this.responseText);
        // console.log(data);
        Diem = data.date.map(function(e){
            return e.Diem;
        })
        // console.log(date)
        SoLuong = data.date.map(function(e){
            return e.SoLuong;
        })

    }
}

const ctx = document.getElementById('canvas').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: [//'0', '0.25', '0.5', '0.75', '1', '1.25','1.5','1.75','2','2.25','2.5','2.75','3','3.25','3.5',
               // '3.75','4','4.25','4.5','4.75','5','5.25','5.5','5.75','6','6.25','6.5','6.75','7','7.25',
               // '7.5','7.75','8','8.25','8.5','8.75','9','9.25','9.5','9.75','10'
],
        datasets: [{
            label: 'Thong ke Vat Li',
            data: [//8,0,1,10,20,69,170,292,485,801,1.146,1.560,2.099,2.555,3.100,3.570,
               // 4.321,4.903,5.627,6.403,7.350,8.387,9.498,10.706,12.252,13.590,15.260,
                //17.063,19.295,21.386,22.986,23.214,21.588,18.290,13.406,8.314,4.588,1.847,541,136,10
            ],
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