// var newYorkCoords = [40.73, -74.0059];
// var mapZoomLevel = 12;


// Create the createMap function.
function createMap(bikeStations) {
  // Create the tile layer that will be the background of our map.
  let streetmap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  
});


// Create a baseMaps object to hold the lightmap layer.
let baseMaps = {
  "Street Map": streetmap
}
// Create an overlayMaps object to hold the bikeStations layer.
let overlayMaps = {
  "Bike Stations": bikeStations
}

// Create the map object with options.
let map = L.map("map-id", {
  center: [40.73, -74.0059],
  zoom: 12,
  layers: [streetmap, bikeStations]
});

// Create a layer control, and pass it baseMaps and overlayMaps. Add the layer control to the map.
L.control.layers(baseMaps, overlayMaps,{
  collapsed: false
}).addTo(map);
}
// Create the createMarkers function.
function createMakers(response) { 
// Pull the "stations" property from response.data.
  let stations = response.data.statoins;
  let bikeMarkers = [];
  for (let index = 0; index < stations.length; index++) {
    let station = stations[index];
    
  }

stations.forEach(station => {
  let bikeMarker = L.marker([[station.lat, station.lon])
    .bindPopup(`Station Name: ${station.name}`)
})

// Initialize an array to hold the bike markers.

// Loop through the stations array.
// For each station, create a marker, and bind a popup with the station's name.

// Add the marker to the bikeMarkers array.

// Create a layer group that's made from the bike markers array, and pass it to the createMap function.
let layerGroup = L.

  // Perform an API call to the Citi Bike API to get the station information. Call createMarkers when it completes.
  d3.json("https://gbfs.citibikenyc.com/gbfs/en/station_information.json").then(createMarkers);