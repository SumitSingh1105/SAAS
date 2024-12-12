import L from 'leaflet';
import { addMarker } from '../map.js';

const policeStations = [
  { name: 'Indirapuram Police Station', lat: 28.6421, lng: 77.3747 },
  { name: 'Kaushambi Police Station', lat: 28.6425, lng: 77.3238 },
  { name: 'Vaishali Police Station', lat: 28.6502, lng: 77.3391 }
];

const policeIcon = L.divIcon({
  html: '👮',
  className: 'police-icon',
  iconSize: [25, 25]
});

export function addPoliceStationMarkers(map) {
  policeStations.forEach(station => {
    addMarker(map, station.lat, station.lng, station.name, policeIcon);
  });
}