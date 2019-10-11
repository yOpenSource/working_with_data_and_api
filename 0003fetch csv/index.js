(async function getData(){
  let response =  await fetch('ZonAnn.Ts+dSST.csv');
  let data = await response.text();
  let rows = data.split('\n');
  let new_rows=rows.slice(1);
  new_rows.forEach(
    (element,index)=>{
      let row_arr = element.split(',');
      console.log(row_arr[0],row_arr[1]);
    }
  );
})();
