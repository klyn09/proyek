import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Atur posisi marker/icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const Map = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Peta pertama */}
      <MapContainer
        center={[-7.1234, 107.5678]} // Ganti dengan koordinat desa pertama
        zoom={15}
        style={{ height: '400px', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[-7.1234, 107.5678]}>
          <Popup>Lokasi Desa Sindanglaka</Popup>
        </Marker>
      </MapContainer>

      {/* Peta kedua */}
      <MapContainer
        center={[-6.8351, 107.1393]} // Koordinat Kantor Desa Sindanglaka
        zoom={15}
        style={{ height: '400px', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[-6.8351, 107.1393]}>
          <Popup>Kantor Desa Sindanglaka</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
