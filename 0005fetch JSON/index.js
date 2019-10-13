
async function getData(){
  let response = await fetch('https://api.wheretheiss.at/v1/satellites/25544');
  let data = await response.json();
  let {latitude, longitude} = data;
  document.getElementById('latitude').textContent=latitude+'°';
  document.getElementById('longitude').textContent=longitude+'°';
  return {latitude,longitude};
}

async function setMap(){
  let {latitude, longitude} = await getData();
  marker.setLatLng([latitude,longitude]);
}


  const mymap = L.map('mapid').setView([0,0], 5);//lattitude , longitude and zoom level
  const issIcon = L.icon({
    iconUrl: 'iss200.png',
    iconSize: [50, 32],
    iconAnchor: [25, 16]
  });
  const marker = L.marker( [ 0, 0 ] , { icon : issIcon } ).addTo(mymap);
  const attribution ='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
  const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';//s for style, x for lattitude , y for longitude, and z for zoom level
  const tiles = L.tileLayer(tileUrl, { attribution });
  tiles.addTo(mymap);



setInterval(async ()=>{await setMap()},1000);
