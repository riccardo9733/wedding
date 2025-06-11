import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Import leaflet CSS

// It's good practice to define props type
interface MapComponentProps {
  latitude: number;
  longitude: number;
  zoom?: number;
  markerText?: string;
}

const MapComponent: React.FC<MapComponentProps> = ({
  latitude,
  longitude,
  zoom = 13, // Default zoom level
  markerText = "La nostra location!" // Default marker popup text
}) => {
  // Ensure Leaflet's images are found (especially the marker icon)
  // This is a common workaround for icon issues with Webpack/Vite
  // @ts-ignore
  delete L.Icon.Default.prototype._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
  });

  if (typeof window === 'undefined') {
    // Don't render the map on the server or during build if it causes issues
    return null;
  }

  return (
    <MapContainer
      center={[latitude, longitude]}
      zoom={zoom}
      scrollWheelZoom={false}
      style={{ height: '400px', width: '100%' }} // Basic inline styling for visibility
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
      />
      <Marker position={[latitude, longitude]}>
        <Popup>
          {markerText}
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
