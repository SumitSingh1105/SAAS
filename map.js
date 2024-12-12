import L from 'leaflet';
import { GHAZIABAD_COORDINATES } from '../utils/constants.js';
import { addHospitalMarkers } from './mapLayers/hospitals.js';
import { addPoliceStationMarkers } from './mapLayers/policeStations.js';

export function initMap() {
  const map = L.map('map').setView([GHAZIABAD_COORDINATES.lat, GHAZIABAD_COORDINATES.lng], 13);
  
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
  }).addTo(map);

  // Add markers for hospitals and police stations
  addHospitalMarkers(map);
  addPoliceStationMarkers(map);

  return map;
}

export function addMarker(map, lat, lng, title, icon = null) {
  const markerOptions = icon ? { icon } : {};
  return L.marker([lat, lng], markerOptions)
    .bindPopup(title)
    .addTo(map);
}