import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MapComponent = () => {
  // Coordonnées GPS approximatives de l'adresse à Jeddah
  const position = [21.543333, 39.172778];

  return (
    <div className="w-full h-[500px]">
      <MapContainer center={position} zoom={15} className="w-full h-full">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>JEBA3464, Jeddah, Arabie Saoudite</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapComponent;
