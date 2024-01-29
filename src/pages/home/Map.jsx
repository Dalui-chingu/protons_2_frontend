import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useUserStore } from "../../stores/userStore";
import { Marker, Popup, ZoomControl } from "react-leaflet";
import Routing from "./Routing";
import L from "leaflet";
import { useAppStore } from "../../stores/appStore";
import { useStationStore } from "../../stores/stationStore";
import StaionPin from "/station-pin.png";
import UserPin from "/user-pin.png";
import { Link } from "react-router-dom";

const csIcon = new L.Icon({
  iconUrl: StaionPin,
  iconSize: [30, 30],
  iconAnchor: [16, 32], 
  popupAnchor: [0, -30], 
});

const usIcon = new L.Icon({
  iconUrl: UserPin,
  iconSize: [40, 40],
  iconAnchor: [16, 32], 
  popupAnchor: [0, -322], 
});

function Map() {
  const { currPosition } = useUserStore();
  const { view } = useAppStore();
  const { stations } = useStationStore();

  const renderStations = () => {
    return stations.map((station) => {
      return (
        <Marker
          position={[station.lat, station.lng]}
          key={station.id}
          icon={csIcon}
        >
          <Popup>
            <h3>{station.name}</h3>
            <p>{station.address}</p>
            <Link to={`/station/${station._id}`}>View Details</Link>
          </Popup>
        </Marker>
      );
    });
  };

  return (
    <MapContainer
      center={currPosition}
      zoom={12}
      style={{ height: "100vh", width: "100vw" }}
      zoomControl={false}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <ZoomControl position="bottomright" />
      {view == 2 ? <Routing /> : null}
      <Marker position={currPosition} icon={usIcon}>
        <Popup>
          <a href="http://openstreetmap.org">OpenStreetMap</a>
        </Popup>
      </Marker>
      {renderStations()}
    </MapContainer>
  );
}

export default Map;