// src/components/MapComponent.jsx
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const MapComponent = () => {
  return (
    <MapContainer
      center={[28.7041, 77.1025]} // Delhi coordinates
      zoom={12}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="© OpenStreetMap contributors"
      />
      <Marker position={[28.7041, 77.1025]}>
        <Popup>📍 Delhi - Example Marker</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
