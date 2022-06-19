import React, {useState} from 'react';
import 'leaflet/dist/leaflet.css'
import './style/map.css'
import { MapContainer, Marker, Popup, TileLayer, useMapEvents, Polyline } from 'react-leaflet';
import L from 'leaflet'
import { useSelector } from 'react-redux'



function MyComponent() {
    const markerIcon = new L.Icon({
        iconUrl:require('../resources/marker-a.png'),
        iconSize: [24, 24]
    })

    const [loc, setLoc] = useState([50.5, 30.5])
    useMapEvents({
        
        click: (e) => {
            console.log(e)
            setLoc([e.latlng.lat,
                e.latlng.lng])
            
        },

    })
    return (

        <Marker position={loc} icon={markerIcon}>
<Popup>test</Popup>
        </Marker>
    )
  }


export const Map = ()=>{
    const pline = useSelector(store=>store.points.pline)
    const routes = useSelector(store=>store.points.routes)
    const activeRoute = routes.filter(route=>route.isActive)[0] || []

    const markerIcon = new L.Icon({
        iconUrl:require('../resources/marker-a.png'),
        iconSize: [24, 24]
    })
   
    return(
    <MapContainer center={[47.22, 39.70]} zoom={13}
        style={{width:'100vw', height:'100vh'}}
        >
            
        <TileLayer
        
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
    <MyComponent />

    {
        activeRoute.base?
        <Marker position={activeRoute.base.coordinates} icon={markerIcon}>
            <Popup>{activeRoute.base.name}</Popup>
        </Marker>
        :null
    }

    {
        activeRoute.client?
        <Marker position={activeRoute.client.coordinates} icon={markerIcon}>
            <Popup>{activeRoute.client.name}</Popup>
        </Marker>
        :null
    }
    
    {
        pline?
        <Polyline positions={pline} />
        :null
    }
       
    </MapContainer>
    )
}

