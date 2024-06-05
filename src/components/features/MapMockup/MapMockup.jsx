import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import styles from "./mapmockup.module.css";
import MarkerSvg from "../../../assets/svg/marker.svg";
import MockupMap from "../../../assets/mockups/mockup.png";
import MockupMapLayer from "../../../assets/mockups/mockuplayer.png";

const customMarkerIcon = new L.Icon({
  iconUrl: MarkerSvg,
  iconSize: [47, 54],
});

const CustomMarker = ({ position }) => (
  <Marker position={position} icon={customMarkerIcon}>
    <Popup>Новое мероприятие!</Popup>
  </Marker>
);

const MapMockup = () => {
  return (
    <div className={styles.layer}>
      <img className={styles.MockupMapLayer} src={MockupMapLayer} alt="mockup"></img>
      <MapContainer
        center={[59.9343, 30.3351]}
        zoom={13}
        style={{
      
          height: "750px",
          width: "390px",
          marginTop: "21px",
          borderTopLeftRadius: "54px",
          borderTopRightRadius: "54px",
          position: "relative",
          zIndex: 0,
        }}
        zoomControl={false}
      >
        <TileLayer
          attribution='<a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tile.jawg.io/jawg-dark/{z}/{x}/{y}{r}.png?access-token=0KBMnt76aP50bicBYlYcSS6XFk3jgHCPkNGFR1er7976nLql0toXesIwopN7NPLF"
        />

        {[...Array(20).keys()].map((index) => (
          <CustomMarker
            key={index}
            position={[
              59.9343 + (Math.random() - 0.5) * 0.1,
              30.3351 + (Math.random() - 0.5) * 0.1,
            ]}
          />
        ))}
      </MapContainer>
      <img className={styles.mockupMap} src={MockupMap} alt="mockup"></img>
    </div>
  );
};

export default MapMockup;
