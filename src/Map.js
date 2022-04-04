import React from 'react';

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";

function Map(props) {
  const position = [props.lat, props.lng];
const myIcon = L.icon({
  iconUrl: "https://img.icons8.com/glyph-neue/64/000000/marker.png",
  iconSize: [64, 64],
  iconAnchor: [32, 64],
  popupAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
});

  return (
    <MapContainer
      zoomControl={false}
      className="map"
      center={position}
      zoom={13}
      scrollWheelZoom={true}
    >
      <TileLayer
        url={``}
      />
      <Marker position={position} icon={myIcon}>
        <Popup>{props.location}</Popup>
      </Marker>
    </MapContainer>
  );
}


export default Map;
