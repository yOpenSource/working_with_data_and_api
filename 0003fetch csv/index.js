

async function getData(){
  let year_arr=[];
  let data_arr=[];
  let response =  await fetch('ZonAnn.Ts+dSST.csv');
  let data = await response.text();
  let rows = data.split('\n').slice(1);

  rows.forEach(
    (element,index)=>{
      let row_arr = element.split(',');
      year_arr.push(row_arr[0]);
      data_arr.push(parseFloat(row_arr[1])+14);
    }
  );
  return {year_arr,data_arr};
}


(async function drawChart(){
  let data = await getData();
  var ctx = document.getElementById('myChart').getContext('2d');
  var myChart = new Chart(ctx, {
      type: 'line',
      data: {
          labels: data.year_arr,
          datasets: [{
            label: 'global avg temp',
              data: data.data_arr,
              fill:false,
              backgroundColor:'rgba(255, 99, 132, 0.2)',
              borderColor: 'rgba(255, 99, 132, 1)',
              borderWidth: 1
          }]
      },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    callback: function(value, index, values) {
                        return value+ "°";//to type degree symbol type alt + 0176 on windows
                    }
                }
            }]
        }
    }
  });

})();
