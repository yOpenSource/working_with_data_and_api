(async function getData(){
  let response = await fetch('https://api.wheretheiss.at/v1/satellites/25544');
  let data = await response.json();
  let {latitude, longitude} = data;
  document.getElementById('latitude').textContent=latitude;
  document.getElementById('longitude').textContent=longitude;
}());
