import {
   MapContainer,
   TileLayer,

   Marker,
   Popup
} from "react-leaflet";
//import L from 'leaflet-pip'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import React from 'react'
import MapComponent from "./mapComponent.js";

//---Map Functionality---//

function Map(props) {
  
   const[locations, setLocations]=useState([])
   useEffect(()=>{


   if (locations.length === 0) {
      fetch("/api/location")
        .then((res) => res.json())
        .then((locationJson) => {
          setLocations(locationJson);
        });
    }
  });

   return (
      <div id='map-marker'>
         {/* added to allow the map to zoom in */}
         <MapContainer
            id="mapContainer"
            className='map'
            center={props.center}
            zoom={props.zoom}
            scrollWheelZoom={false}
            
         >
            <MapComponent center={props.newCenter} zoom={props.newZoom} />
            <TileLayer
               url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
               attribution="Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community" />
            {locations.map((location, index) => {
               //Map locations array to map pins and add popup holding a link to each pin 
               return (
                  <Marker key={index} position={[location.latitude, location.longitude]}>
                     <Popup key={index}>
                        <Link
                           to={`/restaurant/${location.name
                              .toLowerCase()
                              .replaceAll("'", "")
                              .replaceAll(" ", "-")}`}
                           >
                              { location.name }
              </Link>
            </Popup>
                  </Marker>
               )
            })}
         </MapContainer>
      </div>

   );
}


export default Map;
  //   <MapZoom center={props.center} zoom={props.zoom} />