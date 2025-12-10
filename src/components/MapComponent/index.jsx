import { useState } from "react"; 
import "./index.scss";
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { LatLngBounds } from "leaflet";
import FestivalModal from "../FestivalModal";
import festivals from "../../data/data.json";

export default function MapComponent() {
  const [selectedFestival, setSelectedFestival] = useState(null);

  const bounds = new LatLngBounds([
    [35, -10],
    [70, 40]
  ]);

  return (
    <>
      <MapContainer
        center={[52, 10]}
        zoom={1}
        minZoom={4}
        maxZoom={12}
        maxBounds={bounds}
        maxBoundsViscosity={1}
        scrollWheelZoom={true}
        dragging={true}
        doubleClickZoom={false}
        className="map_container"
      >
        <TileLayer
          url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />

        {festivals.map((fest) => (
          <Marker
            key={fest.id}
            position={fest.position}
            eventHandlers={{
              click: () => setSelectedFestival(fest)
            }}
          />
        ))}
      </MapContainer>

      {selectedFestival && (
        <FestivalModal
          festival={selectedFestival}
          fermerModal={() => setSelectedFestival(null)}
        />
      )}
    </>
  );
}
