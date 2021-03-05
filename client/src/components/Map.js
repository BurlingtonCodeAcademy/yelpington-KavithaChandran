import {
    MapContainer,
    TileLayer,
    Polygon,
    Marker,
    Popup
  } from "react-leaflet";
  //import L from 'leaflet-pip'
  
 
  import React from 'react'
  //---Map Functionality---//
  const position =[44.4761601,-73.212906]
  function Map(props) {
   
    return (
      <div id='map-marker'>
        {/* added to allow the map to zoom in */}
        <MapContainer 
        className="map-view"
        center={position}
         zoom={16}
          scrollWheelZoom={false}>
   <TileLayer 
   url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
   attribution="Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"/>
    <Marker position={[44.4779646, -73.2167659]}>
        <Popup>A Single Pebble</Popup> 
        </ Marker>
     <Marker position={[44.4766084, -73.2164283]}>
        <Popup>American Flatbread</Popup> 
        </ Marker>
     <Marker position={[44.478403, -73.2154937]}>
        <Popup>Farmhouse Tap and Grill</Popup> 
        </ Marker>
     <Marker position={[44.4790471, -73.2195496]}>
        <Popup>Hen of the Wood</Popup> 
        </ Marker>
     <Marker position={[44.4761196,-73.2144323]}>
        <Popup>Honey Road</Popup> 
        </ Marker>
     <Marker position={[44.4754259, -73.2142202]}>
        <Popup>Istanbul Kebab House</Popup> 
        </ Marker>
     <Marker position={[44.4756979, -73.2151394]}>
        <Popup>Kountry Kart Deli</Popup> 
        </ Marker>
     <Marker position={[44.4756528, -73.2148698]}>
        <Popup>Red Panda</Popup>
      </Marker>
      <Marker position={[44.4769943,-73.2146144]}>
        <Popup>SweetWaters</Popup>
      </Marker>
      <Marker position={[44.4769319,-73.2200307]}>
        <Popup>The Skinny Pancake</Popup>
      </Marker>
      </MapContainer>
      </div>
    );
  }
  
  export default Map;