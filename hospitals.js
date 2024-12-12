import L from 'leaflet';
import { addMarker } from '../map.js';

const hospitals = [
  { name: 'Max Super Speciality Hospital', lat: 28.6725, lng: 77.4547 },
  { name: 'Columbia Asia Hospital', lat: 28.6802, lng: 77.4374 },
  { name: 'Yashoda Super Speciality Hospital', lat: 28.6697, lng: 77.4538 }
];

const hospitalIcon = L.divIcon({
  html: '🏥',
  className: 'hospital-icon',
  iconSize: [25, 25]
});

export function addHospitalMarkers(map) {
  hospitals.forEach(hospital => {
    addMarker(map, hospital.lat, hospital.lng, hospital.name, hospitalIcon);
  });
}