
var map = L.map('map').setView([42.50, 19.50], 8);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibG96b2IiLCJhIjoiY2ttdWgxd3ZxMTFqdjJvbnh5Z3RuMjBxdiJ9.2WDVX1LhruHjOybBqyU7hA'
}).addTo(map);