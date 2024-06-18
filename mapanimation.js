// This array contains the coordinates for all bus stops between MIT and Harvard
const busStops = [
  [-71.093729, 42.359244],
  [-71.094915, 42.360175],
  [-71.0958, 42.360698],
  [-71.099558, 42.362953],
  [-71.103476, 42.365248],
  [-71.106067, 42.366806],
  [-71.108717, 42.368355],
  [-71.110799, 42.369192],
  [-71.113095, 42.370218],
  [-71.115476, 42.372085],
  [-71.117585, 42.373016],
  [-71.118625, 42.374863],
];

// TODO: Add your own access token
mapboxgl.accessToken = 'pk.eyJ1IjoibHVjYWJyaTAyIiwiYSI6ImNsd3F1bzlrMDA1d2cyam9wZzVkZHprZmEifQ.uguZXOSv4t3pmNci64FbbA'; // Replace with your actual access token

// This is the map instance
let map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [-71.104081, 42.365554],
  zoom: 14,
});

// Add a marker to the map at the first coordinates in the array busStops
const marker = new mapboxgl.Marker()
  .setLngLat(busStops[0])
  .addTo(map);

// Counter represents the index of the current bus stop
let counter = 0;
function move() {
  // Move the marker to the next bus stop every 1000ms
  marker.setLngLat(busStops[counter]);
  counter = (counter + 1) % busStops.length; // Loop back to the beginning if all stops visited
  setTimeout(move, 1000); // Call move() again after 1000ms
}

// Start the animation when the button is clicked
document.getElementById('showStopsButton').addEventListener('click', move);
