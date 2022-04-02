import React from 'react';

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";

function Map(props) {
  //  Use the state hook: 
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
      className="map"
      center={position}
      zoom={13}
      scrollWheelZoom={true}
    >
      <TileLayer
        url={`https://api.mapbox.com/styles/v1/abdulrahmannasser/cl1fg1wye003i15s6zhzhgu03/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiYWJkdWxyYWhtYW5uYXNzZXIiLCJhIjoiY2wwZGlwbXh0MDlpejNlcGJ2dHloMzg1aSJ9.PNDE74w_tg_t24PI_4nHGw`}
      />
      <Marker position={position} icon={myIcon}>
        <Popup>{props.location}</Popup>
      </Marker>
    </MapContainer>
  );
}


export default Map;