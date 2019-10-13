
(async function getData(){
  let response = await fetch('https://api.wheretheiss.at/v1/satellites/25544');
  let data = await response.json();
  let {latitude, longitude} = data;
  document.getElementById('latitude').textContent=latitude;
  document.getElementById('longitude').textContent=longitude;

  let mymap = L.map('mapid').setView([latitude,longitude], 13);
  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	id: 'mapbox.streets',
	accessToken: 'pk.eyJ1IjoieW9wZW5zb3VyY2UiLCJhIjoiY2sxbnluamZ4MGZjYzNtbzdoZDhiOGdzaiJ9.Pm6DTozwrKY9NVE96XeXVw'
}).addTo(mymap);

}());
